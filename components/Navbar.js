import React, { useRef, useEffect, useState } from "react";
import { GoogleLogin } from "@react-oauth/google";

import { loginUser, logoutUser } from "../utils/authUser";
import Link from "next/link";

function Navbar({ user }) {
  const [showCollapse, setShowCollapse] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const handelSubmit = async (credentialResponse) => {
    let user = {
      client_id: credentialResponse.clientId,
      jwtToken: credentialResponse.credential,
    };
    setLoading(true);
    await loginUser(user, setError, setLoading);
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
      {loading && (
        <div
          role="status"
          className="absolute flex justify-center items-center bg-opacity-5 backdrop-blur-md bg-black w-full h-full z-50 -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"
        >
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only text-white">Loading...</span>
        </div>
      )}

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
                onError={() => {}}
              />
            ) : (
              <div className="relative inline-block text-left px-2">
                <div
                  id="dropdownDefaultButton"
                  aria-haspopup="true"
                  aria-expanded={isOpen ? "true" : "false"}
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
                    <ul
                      className="py-2 text-sm text-white dark:text-white font-bold"
                      role="none"
                    >
                      <li>
                        <Link
                          href="/"
                          className="block px-4 py-2 hover:bg-black dark:hover:bg-black dark:hover:text-white"
                          role="menuitem"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/my-profile"
                          className="block px-4 py-2 hover:bg-black dark:hover:black dark:hover:text-white"
                          role="menuitem"
                        >
                          Profile
                        </Link>
                      </li>
                      <li>
                        <a
                          onClick={() => logoutUser(user.email)}
                          className="block px-4 py-2 hover:black dark:hover:bg-black dark:hover:text-white"
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
                onError={() => {}}
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
