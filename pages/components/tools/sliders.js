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
     <h1 className=" w-[80%] m-2 text-center font-bold text-3xl font-serif text-green-600 " >Screenshots:</h1>  
    <div className="p-2  relative flex items-center" ref={slideRef}>
    
    <button className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"onClick={handleOnPrevClick}> <img src="/left2.png"></img>
    </button>
    
    <img  className="m-2 w-[80%] h-96 " src={featuredProducts[currentIndex]} alt="" />
    
    <button className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100  transition"onClick={handleOnNextClick}><img src="/right2.png"></img>
    </button>
    </div> 
   </div>
    
      
    <div className="flex flex-col">
     <h1 className="  m-2 text-center font-bold text-3xl font-serif text-green-600 " >Demo Video:</h1>  
    <video className=' h-96  m-auto' src='/demovideo2.mp4' controls></video>    
    </div>
   
    </div>
    
  );
}