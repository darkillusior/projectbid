import React, { useState, useEffect, useRef } from "react";


const featuredProducts = [
  "/project.jpeg"

];

let count = 0;
let slideInterval;
export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
    // eslint-disable-next-line
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
   
  };
  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
   
  };

  return (
   <div className="flex justify-evenly p-6">
    
    <div className="flex flex-col">
     <h1 className=" w-[80%] m-2 text-center font-bold text-3xl font-sans text-white " >Screenshots</h1>  
    <div className="p-2  relative flex items-center" ref={slideRef}>
    
    <button className="text-white p-1 rounded-full  cursor-pointer hover:bg-opacity-100 transition w-10"onClick={handleOnPrevClick}> <img src="/left.png"></img>
    </button>
    
    <img  className="m-2 w-[90%] h-96 rounded-lg " src={featuredProducts[currentIndex]} alt="" />
    
    <button className="text-white p-1 rounded-full  cursor-pointer hover:bg-opacity-100 transition w-10"onClick={handleOnNextClick}><img src="/right.png"></img>
    </button>
    </div> 
   </div>
    
      
    {/* <div className="flex flex-col">
     <h1 className="  m-2 text-center font-bold text-3xl font-sans text-white " >Demo Video</h1>  
    <video className=' h-96  m-2 rounded-lg' src='/demovideo2.mp4' controls></video>    
    </div> */}
   
    </div>
    
  );
}