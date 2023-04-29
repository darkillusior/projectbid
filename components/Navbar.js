import React, { useRef, useEffect, useState } from "react";
import { GoogleLogin } from "@react-oauth/google";

import { loginUser, logoutUser } from "../utils/authUser";
import Link from "next/link";

function Navbar({ user }) {
  const [showCollapse, setShowCollapse] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };
  

  const handelSubmit = async (credentialResponse) => {
    let user = {
      client_id: credentialResponse.clientId,
      jwtToken: credentialResponse.credential,
    };

    await loginUser(user);
  };
  const [hidden, sethidden] = useState("");
  const [hidden2, sethidden2] = useState(false);
  
  useEffect(() => {
    let postend = 0;
    let position = document.getElementById("position");

    const fixedHeader = () => {
      let poststart;

      if (position) {
        poststart = position.scrollTop;
      } else {
        poststart = window.scrollY;
      }

      if (poststart > postend) {
        sethidden("-translate-y-[150%] scale-x-50 ");
        sethidden2(false);
      } else {
        sethidden("");
        sethidden2(false);
      }
      postend = poststart;
    };
    if (position) {
      position.addEventListener("scroll", fixedHeader);
    } else {
      window.addEventListener("scroll", fixedHeader);
    }
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 z-50 hidden sm:flex backdrop-blur-lg justify-between bg-gradient-radial  from-transparent ${hidden}    w-full h-14 items-center  `}
      >
        <div
          className={`px-4 font-medium text-white   transition ease-in delay-100 ${hidden}`}
        >
          <a
            className={`px-4  transition ease-in delay-100 ${hidden}`}
            href="/"
          >
            ProjectBidder.com
          </a>
        </div>

        <div
          className={`text-white relative  w-auto flex items-center h-14 cursor-pointer `}
        >
          {/* <img className={`absolute -z-50 transition ease-in delay-500 bg-black w-full h-full ${hidden}`} src="/removebg.png" alt="" /> */}
          <div className="px-5">
            {!user ? (
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  handelSubmit(credentialResponse);
                }}
                useOneTap
                type="icon"
                shape="circle"
                onError={() => {
                  
                }}
              />
             
            ) : (
              <div className="relative inline-block text-left px-2">
              <div
                id="dropdownDefaultButton"
                aria-haspopup="true"
                aria-expanded={isOpen ? 'true' : 'false'}
                onClick={handleDropdownClick}
              >
                <img src="/menu.png" alt="" />
              </div>
              {isOpen && (
                <div
                  className={`origin-top-right absolute right-0 mt-2 w-44 rounded-lg shadow bg-white divide-y divide-gray-100 card  z-10 ${hidden}`}
                  id="dropdown"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" role="none">
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/my-profile"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <a
                        onClick={() => logoutUser(user.email)}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            )}
          </div>
        </div>
      </div>

      <div
        className={`sm:hidden fixed bottom-0  backdrop-blur  flex z-50  justify-between bg-black/20  from-transparent     w-full h-14 items-center  `}
      >
        <div
          className={`text-white relative  w-full flex items-center h-14 justify-around`}
        >
          {/* <img className={`absolute -z-50 transition ease-in delay-500 bg-black w-full h-full ${hidden}`} src="/removebg.png" alt="" /> */}

          <div className={`px-6 outline-none`}>
            <a href="/">
              <img src="/home.svg" alt="" />
            </a>
          </div>
          {user ? (
            <div className={`px-6 z-40 outline-none`}>
              <Link href="/my-profile">
                <img src="/user.svg" alt="" />
              </Link>
            </div>
          ) : (
            <div className={`px-6 z-40`}>
              <img src="/user.svg" alt="" />
            </div>
          )}

          <div className={`px-6  z-40`}>
          {!user ? (
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  handelSubmit(credentialResponse);
                }}
                useOneTap
                type="icon"
                shape="circle"
                onError={() => {
                  
                }}
              />
            ) : (
              <button
                onClick={() => logoutUser(user.email)}
                className=" font-bold mt-1"
              >
                <img src="/logoutL.svg" alt="logout" />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
