import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import baseUrl from "../utils/baseUrl";

import styles from "../styles/Home.module.css";

import Card from '../components/Card'


import Navbar from '../components/Navbar'
import Link from "next/link";


function Projects({postsData,user}) {
    if (typeof document === 'undefined') {
        React.useLayoutEffect = React.useEffect;
      }   
      const [post, setPost] = useState( postsData||[]);

  
    const options = [
        { value: "", label: "All" },
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
      ];
       const handleFilter = (value) => {
          // Do something with the selected filter value
        };
  return (
    <div>

<Navbar user={user}/>
<div  className={styles.bgI}>
   {/* <div  className='    pt-28  pb-14  gap-8 flex  flex-col  items-center'>
    <Filter options={options} onFilter={handleFilter}  /> */}
    <div className="flex  my-16 flex-wrap justify-center items-center  gap-8">
    {post.map((item,index)=>(    
     <Link className="w-auto" href={`/posts/${item._id}`} >
  
        <Card  key={index}  post={item} />
    
     </Link> 
  ) )}</div>
    </div>
    </div>

  )
}

export default Projects

export const getServerSideProps = async ctx => {
    try {
  
  
      const res = await axios.get(`${baseUrl}/api/post`, {
      
     
      });

      return { props: { postsData:res.data } };
    } catch (error) {
      return { props: { errorLoading: true } };
    }
  }; 
  