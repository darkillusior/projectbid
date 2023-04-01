import React, { useRef, useEffect, useState } from "react";
import FullScreenModel from "../components/FullScreenModel"


function Navbar() {
  const [showCollapse, setShowCollapse] = useState(false);
  let mobile = false;
  const [hover, setHover] = useState("1");
  const [hover2, setHover2] = useState("2");
  const [hover3, setHover3] = useState("3");
  const [hover4, setHover4] = useState("4");
  const [hidden, sethidden] = useState("");
  const [hidden2, sethidden2] = useState(false);
  console.log("gg", hover);
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
        sethidden2(true);
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
        className={`fixed top-0 z-50 backdrop-blur-lg flex justify-between bg-gradient-radial  from-transparent ${hidden}    w-full h-14 items-center  `}
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

          <div
            onMouseEnter={() => {
              setHover3("1");
              setHover4("1");
              setHover2("1");
              setHover("1");
            }}
            onMouseLeave={() => {
              setHover2("2");
              setHover3("3");
              setHover4("4");
            }}
            className={`px-6 z-40 ${
              hover != "1" && "blur-[2px]"
            }  hover:bg-gradient-radial py-1  from-transparent to-cyan-400  transition ease-in delay-150 ${hidden} `}
          >
            <a className={`font-bold   `} href="/">
              Home
            </a>
          </div>
          <div
            onMouseEnter={() => {
              setHover3("2");
              setHover4("2");
              setHover2("2");
              setHover("2");
            }}
            onMouseLeave={() => {
              setHover3("3");
              setHover4("4");

              setHover("1");
            }}
            className={`px-6 z-40 ${
              hover2 != "2" && "blur-[2px]"
            }   hover:bg-gradient-radial from-transparent to-cyan-400   py-1 font-bold transition ease-in delay-200 ${hidden}`}
          >
            <a className={`font-bold  `} href="/my-profile">
              Profile
            </a>
          </div>
          <div
            onMouseEnter={() => {
              setHover3("3");
              setHover4("3");
              setHover2("3");
              setHover("3");
            }}
            onMouseLeave={() => {
              setHover("1");
              setHover2("2");
              setHover4("4");
            }}
            className={`px-6 z-40  ${
              hover3 != "3" && "blur-[2px]"
            }  hover:bg-gradient-radial from-transparent py-1 to-cyan-400    font-bold transition ease-in delay-300 ${hidden}`}
          >
            Signup
          </div>
          <div
            onMouseEnter={() => {
              setHover("4");
              setHover2("4");
              setHover3("4");
            }}
            onMouseLeave={() => {
              setHover("1");
              setHover2("2");
              setHover3("3");
            }}
            className={`px-6  z-40  ${
              hover4 != "4" && "blur-[2px]"
            }   hover:bg-gradient-radial  py-1 from-transparent to-cyan-400   font-bold transition ease-in delay-500 ${hidden}`}
          >
            Login
          </div>
          <div
            className={`px-6  z-40   from-transparent to-cyan-400   font-bold transition ease-in delay-500 ${hidden}`}
          >
            <FullScreenModel />
          </div>
    
        </div>
      </div>
    </>
  );
}

export default Navbar;
