import React from 'react'
import styles from '../../styles/Home.module.css'
import style2 from '../../styles/main.module.scss'
function Card() {
  return (
  <>
  <div className={'bg-white  bg-opacity-25 hover:translate-y-1 w-full md:w-[28%]   mx-2 my-1  text-black rounded-md hover:cursor-pointer  hover:bg-opacity-60  shadow-md  flex flex-col sm:flex-col '} >
    
    <div className=' flex   justify-center items-center p-1 '>    

     {/* <div className="text-bold text-base flex  text-yellow-300">     <img className={'h-12 w-12 m-2  rounded-full '+styles.userPic} src='/random.jpg '/>Gaurav Bahuguna</div> */}
     <img className='w-[99%]   rounded-md' src='/project.jpeg'/>
     </div>
      <div className="flex  items-center justify-around">
 
      <div className='flex flex-col  mb-5 m-1'>

        <div className=' w-1/2 font-bold text-xl font-serif text-black '>Shopler.com</div> 
        <div className='flex flex-col items-baseline'>
        <div className=' font-semibold text-lg text-slate-600'>Tech stack</div>
        <div className=' w-full   overflow-hidden text-violet-500 text-base font-semibold  break-words'>React, MongoDb, Nodejs</div>
        </div>
        </div>
        <div className={styles.liveBtn}>
          <button>live preview</button>
        </div>
           
        </div>
    </div>
  </>
  )
}

export default Card