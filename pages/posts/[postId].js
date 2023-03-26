import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import styles from "../../styles/Home.module.css";

import Slider from "../../components/tools/sliders";
import BidForm from "../../components/BidForm";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";
function Post({ postsData }) {
  const [post, setPost] = useState( postsData||[]);
  const [viewdescription, setviewdescription] = useState(false);
  const [showBidForm, setShowBidForm] = useState(false);
  const bidform = () => {
    setShowBidForm(true);
  };
  console.log(postsData);
  const viewmoredescription = () => {
    setviewdescription(!viewdescription);
  };

  

  const [text1, setText1] = useState("");

  useEffect(() => {
    
    const timeout = setTimeout(() => {
      setText1(post.discription.slice(0, text1.length + 1));
    }, 50);
    return () => clearTimeout(timeout);
  }, [text1]);

  return (
    <>
      <main className={styles.bg}>
        <Navbar />
        <div className={" h-auto mx-5 mt-20 flex flex-col"}>
          <div className="flex flex-col  justify-between ">
            <div className="flex justify-between items-center  ">
              <div className={" cursor-pointer " + styles.container }>
                <div className={styles.btn} onClick={bidform}>
                  <a>BID</a> 

                </div>
                <h1 className="text-white text-2xl font-bold py-2 px-5">  min: &#8377;{post.bidprice
}
       </h1>  
              </div>
                 <button
                className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-3/1 mx-5 mr-2 mb-2"
                type="button"
              >
                Personalization
              </button>
            </div>
            <h1
              className={
             
                " mt-7 text-center font-bold text-4xl sm:text-5xl  text-white ml-12 "  + styles.heading2 
              }
            >
             {post.projectName.toUpperCase()}
            </h1>
          </div>
          <div className="mt-10">
            <BidForm
              postId={post._id}
              name={post.projectName}
              img={post.img[0]}
              showBidForm={showBidForm}
              setShowBidForm={setShowBidForm}
              setBid={setPost}
            />
          </div>
          <div
            className={
              "rounded-md flex flex-wrap bg-white bg-opacity-10 mt-10 border-collapse relative z-10  " +
              styles.bgbox
            }
          >
            <div className=" w-full sm:w-1/2">
              <Slider img={post.img} />
            </div>

            <div className="rounded-md flex flex-col items-start gap-5 border-t-0 sm:w-1/2 mt-10">
              <div className="m-2 flex items-center  ">
                <img
                  className={"h-24 w-24 m-2  rounded-full " + styles.userPic}
                  src="/random.jpg "
                ></img>
                <div className="font-bold text-2xl  text-gray-300">
                  Gaurav Bahuguna
                </div>
              </div>
              <div className="text-left  font-bold text-3xl font-sans text-white ml-5 mt-2">
               <div> Description</div>
              </div>
              <div className="blinking-cursor  mt-2 rounded-md  text-gray-300 font-500 text-xl font-sans border-white px-2 pt-2">
                {text1}{" "}
              </div>
              <div className="  rounded-md  text-gray-300 font-500 text-xl font-sans border-white p-2">
                {" "}
                {!viewdescription ? (
                  <span
                    className=" text-gray-600 "
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
              <button
                className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-3/1 mx-5 mr-2 mb-2"
                type="button"
              >
                Live Preview
              </button>
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
    
    const res = await axios.get(`${baseUrl}/api/post/${postId}`, {});

    return { props: { postsData: res.data } };
  } catch (error) {
    return { props: { errorLoading: true } };
  }
};

export default Post;
