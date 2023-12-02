import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import baseUrl from "../utils/baseUrl";

import styles from "../styles/Home.module.css";

import Card from "../components/Card";
import uploadPic from "../utils/uploadPicToCloudinary";
import { submitNewPost } from "../utils/postActions";
import Navbar from "../components/Navbar";
import Link from "next/link";
import AddProjectModel from "../components/AddProjectModel"

function Projects({ postsData, user }) {
 const [loading, setLoading] = useState(false)
  const [post, setPost] = useState(postsData || []);
  let picUrl=[]
    const[data,setFormvalues]=useState({
        projectname:"",
        name:user?.name,
        userimg:user?.userimg,
        description:"",
        tech:"",
        details:"",
        pic:[],
        bidprice:"",
     
    })
    
    const[pic,setPic]=useState([])
    const picName = pic[0]
  
  
    const handlechange=(e)=>{
        const{name,value}=e.target
        setFormvalues(prev =>({...prev,[name]:value}))
        
    }

 const handleSubmit = async (e) => {
   setLoading(true);
   e.preventDefault();

   try {
     picUrl = await uploadPic(pic);
     data.pic = picUrl;

     await submitNewPost(data, setPost, setLoading);

     // Clear input fields on successful post
     setFormvalues({
       projectname: "",
       name: user?.name,
       userimg: user?.userimg,
       description: "",
       tech: "",
       details: "",
       pic: [],
       bidprice: "",
     });
     setPic([]);
   } catch (error) {
     console.error("Error submitting post:", error);
     setLoading(false);
   }
 };


  return (
    <div>
      <Navbar user={user} />
      <div className={styles.bgI}>
        {/* <div  className='    pt-28  pb-14  gap-8 flex  flex-col  items-center'>
    <Filter options={options} onFilter={handleFilter}  /> */}
        <form onSubmit={handleSubmit} className="create-post">
          <div className="flex items-center justify-center w-full text-slate-200 text-2xl font-bold font-sans">
            <span>Add Project</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <input
              required
              placeholder="Project Name"
              onChange={handlechange}
              value={data.projectname}
              name="projectname"
              className="bg-transparent/40 w-50 text-white outline-none py-1 px-2 rounded"
              type="text"
            />
            <input
              required
              placeholder="Tech Stack"
              onChange={handlechange}
              value={data.tech}
              name="tech"
              className="bg-transparent/40 w-50 text-white outline-none py-1 px-2 rounded"
              type="text"
            />
            <input
              required
              placeholder="Bid Price"
              min="0.00"
              max="10000.0"
              step="0.1"
              onChange={handlechange}
              value={data.bidprice}
              name="bidprice"
              className="bg-transparent/40 w-50 text-white outline-none py-1 px-2 rounded "
              type="number"
            />
            <label className="flex items-center bg-transparent/40 w-40 outline-none rounded mt-0 px-2 gap-2">
              <svg
                className="w-7 h-8"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
              </svg>
              {pic.length === 0 ? (
                <span className="text-white leading-normal">upload image</span>
              ) : (
                <span className="text-white text-xs leading-normal">
                  {picName.name}
                </span>
              )}
              <input
                required
                name="pic"
                multiple
                onChange={(e) => {
                  setPic(e.target.files);
                }}
                type="file"
                className="hidden"
              />
            </label>
          </div>
          <div className="w-full">
            <textarea
              required
              onChange={handlechange}
              value={data.description}
              name="description"
              className="bg-transparent/40 text-white outline-none py-1 px-2 rounded w-full"
              placeholder="Add details"
              rows="5"
            ></textarea>
          </div>
          <div className="w-full flex justify-center">
            <div className="text-white bg-gradient-to-r mr-5 from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-3 py-1 text-center w-20">
              <button type="submit">
                {!loading ? (
                  "Add"
                ) : (
                  <div
                    role="status"
                    className="w-full h-full "
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
                  </div>
                )}
              </button>
            </div>
          </div>
        </form>
        <div className="flex mt-4 mb-16 sm:my-16 flex-wrap justify-center items-center  gap-4">
          {post?.map((item, index) => (
            <Link
              className="w-full sm:w-auto"
              key={index}
              href={`/posts/${item._id}`}
            >
              <Card key={index} post={item} />
            </Link>
          ))}
        </div>
      </div>
      <div className="add-project-handler">
        <AddProjectModel setPost={setPost} />
      </div>
    </div>
  );
}

export default Projects;

export const getServerSideProps = async (ctx) => {
  try {
    const res = await fetch(`${baseUrl}/api/bids`);
    const data = await res.json();
    console.log(data)
    return { props: { postsData: data } };
  } catch (error) {
    return { props: { errorLoading: true } };
  }
};
