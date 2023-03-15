import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import baseUrl from "../utils/baseUrl";
import { useHorizontalScroll } from "./components/tools/Horizentalslide";
import styles from "../styles/Home.module.css";
import { parseCookies } from "nookies";
import Card from './components/card'

import Snowfall2 from 'react-snowfall'
import Navbar from './components/navbar'
import Link from "next/link";
import Home from "./components/Home";
import Filter from "./components/Filter";
function Snowfall({ postsData}) {
  if (typeof document === 'undefined') {
    React.useLayoutEffect = React.useEffect;
  }   
  const [post, setPost] = useState( postsData||[]);
  console.log(post)
let array2 =[1,1,1,1,1,1,1,1,1]

// const containerRef = useRef(null);

// const handleVerticalScroll = (event) => {
//   const container = containerRef.current;
//   const containerScrollPosition = container.scrollLeft;
//   const deltaY = event.deltaY;
//   const scrollOffset = 50; // You can adjust this value to control the speed of horizontal scrolling
//   container.scrollTo({
//     top: 0,
//     left: containerScrollPosition + deltaY * scrollOffset,
//     behavior: "smooth",
//   });
// };
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
    <Navbar /> 

 <div className=' bg-black flex w-[200%] scroll-smooth' > 

  <Home />

   <div  id="section2" className={styles.bgI}>
   <div  className='overflow-y-auto h-screen min-w-1/2   pt-28  pb-14  gap-8 flex  flex-col  items-center'>
    <Filter options={options} onFilter={handleFilter}  />
    <div className="flex  flex-wrap justify-center items-center  gap-8">
    {array2.map((item,index)=>(    
     <Link className="w-[28%]  " href={`/posts/${item._id}`} >
   
        <Card  key={index}  post={post} />
    
     </Link> )
    )}</div>
    </div>
    </div>
</div> 
</div>
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