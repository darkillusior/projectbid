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
 
  const [post, setPost] = useState(postsData || []);
  console.log(post)
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

    const handleSubmit = async (e)=>{
       
      e.preventDefault();


    picUrl = await uploadPic(pic);
     data.pic=picUrl

     await submitNewPost(data, setPost)
   }


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
            <input required placeholder="Project Name" onChange={handlechange} value={data.projectname} name="projectname" className="bg-transparent/40 w-50 text-white outline-none py-1 px-2 rounded" type="text" />
            <input required placeholder="Tech Stack" onChange={handlechange} value={data.tech} name="tech" className="bg-transparent/40 w-50 text-white outline-none py-1 px-2 rounded" type="text" />
            <input required placeholder="Bid Price" min="0.00" max="10000.0" step="0.1"    onChange={handlechange} value={data.bidprice} name="bidprice" className="bg-transparent/40 w-50 text-white outline-none py-1 px-2 rounded " type="number" />
            <label className="flex items-center bg-transparent/40 w-40 outline-none rounded mt-0 px-2 gap-2">
        <svg className="w-7 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        {pic.length === 0 ? <span className="text-white leading-normal">upload image</span> : <span className="text-white text-xs leading-normal">{picName.name}</span>}
        <input required name="pic" multiple   onChange={(e)=>{setPic(e.target.files)}} type='file' className="hidden" />
    </label>
          </div>
          <div className="w-full">
            <textarea required onChange={handlechange} value={data.description} name="description" className="bg-transparent/40 text-white outline-none py-1 px-2 rounded w-full" placeholder="Add details" rows="5"></textarea>
          </div>
          <div className="text-white bg-gradient-to-r mr-5 from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-20">
          <button type="submit">add</button>
        </div>
        </form>
        <div className="flex mt-4 mb-16 sm:my-16 flex-wrap justify-center items-center  gap-4">
          {post?.map((item, index) => (
            <Link className="w-full sm:w-auto" key={index} href={`/posts/${item._id}`}>
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
