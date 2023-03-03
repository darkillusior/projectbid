import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import baseUrl from "../utils/baseUrl";


import { parseCookies } from "nookies";
import Card from './components/card'

import Snowfall2 from 'react-snowfall'
import Navbar from './components/navbar'
import Link from "next/link";
function Snowfall({ postsData}) {
  if (typeof document === 'undefined') {
    React.useLayoutEffect = React.useEffect;
  }   
  const [post, setPost] = useState( postsData||[]);
  console.log(post)
let array2 =[1,1,1,1,1,1,1,1,1]

  return (

      
    <>
    <Navbar /> 
   {/* <div className={styles.snowfall}  > 
    {snow()}
      
    </div> */}
   <Snowfall2  snowflakeCount={100} speed={[0.0, 0.1]} wind={[0.0, 0.1]} />
   <div id="position" className='bg-gradient-radial-t from-transparent to-cyan-400 overflow-y-auto h-screen fixed top-0  pt-28  pb-14  gap-8 flex flex-wrap justify-center items-center  '>

    {post.map((item,index)=>(    
     <Link href={`/posts/${item._id}`} > <Card  key={index}  post={post} /></Link> )
    )}
    </div>

</>
  )
}
export const getServerSideProps = async ctx => {
  try {


    const res = await axios.get(`${baseUrl}/api/post`, {
    
   
    });
console.log("hello",res.data)
    return { props: { postsData:res.data } };
  } catch (error) {
    return { props: { errorLoading: true } };
  }
}; 

export default Snowfall