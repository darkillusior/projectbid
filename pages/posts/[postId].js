import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import styles from "../../styles/Home.module.css";
import {deletePost  } from "../../utils/postActions";
import Slider from "../../components/tools/sliders";
import BidForm from "../../components/BidForm";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";
import PersonForm from "../../components/PersonalizeForm";
import Modal from "@/components/FullScreenModel";
function Post({ postsData,user }) {

  const [post, setPost] = useState( postsData||[]);

  const [bid, setBids] = useState( post.bid||[]);
  const [idea, setIdea] = useState( post.idea||[]);
  const [viewdescription, setviewdescription] = useState(false);
  const [showBidForm, setShowBidForm] = useState(false);
  const [showIdeaForm, setShowIdeaForm] = useState(false);
  let bidusertrue=post.bid.some(bid => bid.user.toString() === (user?user._id:null))
  const [bidtrue, setbidtrue] = useState(bidusertrue );
  let ideatruserue=post.idea.some(bid => bid.user.toString() === (user?user._id:null))
  const [ideatrue, setideatrue] = useState(ideatruserue);
  const bidform = () => {
    setShowBidForm(true);
    setShowIdeaForm(false)
  };
  const ideaform = () => {
    setShowBidForm(false);
    setShowIdeaForm(true)
  };

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
  useEffect(()=>{

  },[bid])
  return (
    <>
      <main className={styles.bg}>
    
        <Navbar user={user} />
        <div className={" h-auto sm:mx-5 mt-10 sm:mt-20 flex flex-col"}>
          <div className="flex flex-col  justify-between ">
            <div className="flex justify-between sm:items-center  ">
              <div className={" cursor-pointer " + styles.container }>
                <div className={styles.btn} onClick={bidform}>
                 {bidtrue?<a>UpdateBid</a>:<a>BID</a>} 

                </div>
                <h1 className="text-white text-2xl font-bold py-2 px-5">  min: &#8377;{post.bidprice
}
       </h1>  
              </div>
                 <button
                className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-3/1 mx-5 mr-2 mb-2 h-10"
                type="button"
                onClick={ideaform}
              >
              {ideatrue?<a>UpdateIdea</a>:<a>Idea</a>} 
              </button>
            </div>
            <h1
              className={
             
                " mt-7 text-center backdrop-blur-3xl font-bold text-4xl sm:text-5xl  text-white  "  + styles.heading2 
              }
            >
             {post.projectName.toUpperCase()}
            </h1>
          </div>
          <div className="mt-10">
            <BidForm
              bidtrue={bidtrue}
              postId={post._id}
              showBidForm={showBidForm}
              setShowBidForm={setShowBidForm}
              setBids={setBids}
              setbidtrue={setbidtrue}
              name={user?user.name:null}
            />
            <PersonForm
             ideatrue={ideatrue}
             postId={post._id}
             showBidForm={showIdeaForm}
             setShowBidForm={setShowIdeaForm}
             setideas={setIdea}
             name={user?user.name:null}
             setideatrue={setideatrue}
            />
          </div>
          <div
            className={
              "rounded-md flex flex-wrap backdrop-blur-sm bg-white bg-opacity-10 mt-10 border-collapse relative z-10  " +
              styles.bgbox
            }
          >
            <div className=" w-full sm:w-1/2 ">
              <Slider img={post.img} />
            </div>

            <div className="rounded-md flex flex-col items-start gap-5 border-t-0 sm:w-1/2 mt-10">
              <div className="m-2 flex items-center  ">
                <img
                  className={"h-24 w-24 m-2  rounded-full object-cover" + styles.userPic}
                  src={post.userimg}
                ></img>
                <div className="font-bold  text-2xl  text-gray-300">
                {post.name}
                </div>
              </div>
              {/* <div className="text-left backdrop-blur-3xl px-8 py-2  font-bold text-3xl font-sans text-white ml-5 mt-2">
               <div> Description</div>
              </div> */}
              <div className="blinking-cursor backdrop-blur-3xl w-full mt-2 pl-5 rounded-md  text-white font-medium font-500 text-xl font-sans border-white px-2 py-2">
                {text1}{" "}
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
          {user&&(user.role === "root" || post.user === user._id) && (  <Modal  idea={idea}/>)}
          <div className="rounded-md mt-2 ">
            <div className="text-center backdrop-blur-3xl font-bold text-3xl font-sans text-white  mt-2">
              Bid List
            </div>
            <table className="w-[80%] m-auto mb-10">
              <thead>
                <tr className="">
                  <td className="w-2/4 text-xl p-2  text-center font-mono text-white">
                    Name
                  </td>
                  <td className="w-2/4 text-xl  text-center p-2 font-mono text-white">
                    Bid Amount
                  </td>
                </tr>
              </thead>
              <tbody className="">
              {bid?.map(bids=>(
                 <tr className="bg-slate-900/50 border-slate-800 border hover:bg-slate-800/50 cursor-pointer ">
                 <td
                   className={
                     "w-2/4 text-xll p-2 text-center font-mono text-gray-300"
                   }
                 >
                 {bids.name}
                 </td>
                 <td className="w-2/4 text-xl p-2 text-center font-serif text-green-600">
                  {bids.price}
                 </td>
                {user&&(user.role === "root" || bids.user === user._id) && (
               
                <td className="w-2/4 text-xl p-2 text-center font-serif text-red-600">
              <button onClick={() =>deletePost(post._id,setBids,user._id)}>delete</button>   
               
                 </td>
                 )}
               </tr>
              ))} 
            
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
    
    const res = await axios.get(`${baseUrl}/api/bids/${postId}`, {});

    return { props: { postsData: res.data } };
  } catch (error) {
    return { props: { errorLoading: true } };
  }
};

export default Post;