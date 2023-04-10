
import React, { useState, useEffect, useRef } from "react";




let count = 0;
let slideInterval;
export default function Slider({img}) {
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
    }, 5000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % img.length;
    setCurrentIndex(count);
   
  };
  const handleOnPrevClick = () => {
    const productsLength = img.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
   
  };

  return (
   <div className="flex justify-evenly p-1">
    
    <div className="flex flex-col">
     <h1 className=" w-full m-2 text-center font-bold text-3xl font-sans text-white " >Screenshots</h1>  
    <div className="p-2  relative flex items-center" ref={slideRef}>
    
  
    
    <img  className="m-1 w-full max-h-96  rounded-lg " src={img[currentIndex]} alt="" />
    

    </div> 
   <div className="flex justify-center"> <button className="text-white p-1 rounded-full  cursor-pointer hover:bg-opacity-100 transition w-10"onClick={handleOnPrevClick}> <img src="/left.png"></img>
    </button>
   <button className="text-white p-1 rounded-full  cursor-pointer hover:bg-opacity-100 transition w-10"onClick={handleOnNextClick}><img src="/right.png"></img>
    </button>
    </div>
   </div>
 
    </div>
    
  );
}