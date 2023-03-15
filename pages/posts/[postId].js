import React, { useState } from "react";
import Navbar from "../components/navbar";
import styles from "../../styles/Home.module.css";
import Snowfall2 from "react-snowfall";
import Slider from "../components/tools/sliders";
import BidForm from "../components/bidForm";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";
function Project1({ postsData }) {
  const [viewdescription, setviewdescription] = useState(false);
  const [showBidForm, setShowBidForm] = useState(false);
  const bidform = () => {
    setShowBidForm(true);
  };
  console.log(postsData);
  const viewmoredescription = () => {
    setviewdescription(!viewdescription);
  };
  return (
    <>
      <main className={styles.bg}>
        <Navbar />
        <div className={" h-auto mx-5 mt-20 flex" + styles.bgbox1}>
        <div className="flex justify-between items-center">
        <div className="flex">
        <div className={styles.container + " cursor-pointer"}>
              <div className={styles.btn} onClick={bidform}>
                <a>BID</a>
              </div>
            </div>
          <h1
            className={
              styles.heading2 +
              " mt-3 text-center font-bold text-5xl  text-white ml-12"
            }
          >
            Shopler.com
          </h1>
        </div>
        <button className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-3/1 mx-5 mr-2 mb-2" type="button">Personalization</button>
        </div>
       <div className="mt-10">
       <BidForm showBidForm={showBidForm} setShowBidForm={setShowBidForm} />
       </div>
          <div className={"rounded-md bg-white bg-opacity-10 mt-10 border-collapse relative z-10 " + styles.bgbox}>
          <div className="">
            <Slider />
          </div>
            
          <div className="rounded-md flex flex-col items-start gap-5 border-t-0 w-[60%] mt-10">
          <div className="m-2 flex items-center  ">
            <img
              className={"h-24 w-24 m-2  rounded-full " + styles.userPic}
              src="/random.jpg "
            ></img>
            <div className="font-bold text-2xl  text-gray-300">
              Gaurav Bahuguna
            </div>
          </div>
            <div className="text-left font-bold text-3xl font-sans text-white ml-5 mt-2">
              Description
            </div>
            <div className="m-2 rounded-md  text-gray-300 font-500 text-xl font-sans border-white p-2">
            Using opacity I'm able to change the alpha of the background white DIV but how can I keep the text black? I placed it in a DIV inside the one with the background but it inherits opacity also if I override it through CSS
              {!viewdescription ? (
                <span
                  className="m-4 text-gray-600 cursor-pointer"
                  onClick={viewmoredescription}
                >
                  ...more
                </span>
              ) : null}
              {viewdescription ? (
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laboriosam numquam, omnis esse fugit maiores sunt. Dolorum
                  molestias at maiores quibusdam doloribus vitae vel officiis
                  ducimus voluptatibus aliquid corrupti culpa magni, eaque
                  soluta error vero cupiditate ratione molestiae aspernatur
                  dolorem obcaecati nam atque. Iure, vitae? Molestias dolorum
                  debitis ducimus nesciunt optio.
                  <span
                    className="m-4 text-gray-600 cursor-pointer"
                    onClick={viewmoredescription}
                  >
                    less
                  </span>
                </span>
              ) : null}
            </div>
          <button className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-3/1 mx-5 mr-2 mb-2" type="button">Live Preview</button>
          </div>
          </div>
          <br />
          {/* <hr /> */}
         
          <div className="rounded-md mt-2 ">
            <div className="text-center font-bold text-3xl font-sans text-white ml-12 mt-2">
              Bid List
            </div>
            <table className="w-[80%] m-auto mb-10">
              <thead>
                <tr className="">
                  <td className="w-2/4 text-xl p-2 text-center font-mono text-white">
                    Name
                  </td>
                  <td className="w-2/4 text-xl text-center p-2 font-mono text-white">
                    Bid Amount
                  </td>
                </tr>
              </thead>
              <tbody className="">
                <tr className="bg-slate-900/50 border-slate-800 border hover:bg-slate-800/50 cursor-pointer ">
                  <td
                    className={
                      "w-2/4 text-xll p-2 text-center font-mono text-gray-300"
                    }
                  >
                    gaurav bahuguna
                  </td>
                  <td className="w-2/4 text-xl p-2 text-center font-serif text-green-600">
                    500$
                  </td>
                </tr>
                <tr className="bg-slate-900/50 border-slate-800 border  hover:bg-slate-800/50 cursor-pointer">
                  <td className="w-2/4 text-xll p-2 text-center font-mono text-gray-300">
                    gaurav bahuguna
                  </td>
                  <td className="w-2/4 text-xl p-2 text-center font-serif text-green-600">
                    500$
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  try {
    const { postId } = ctx.query;
    console.log("so", postId);
    const res = await axios.get(`${baseUrl}/api/post/${postId}`, {});

    return { props: { postsData: res.data } };
  } catch (error) {
    return { props: { errorLoading: true } };
  }
};

export default Project1;
