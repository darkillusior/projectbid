import React from 'react'
import styles from '../../styles/Home.module.css'
import style2 from '../../styles/main.module.scss'
function Card() {
  return (
  <>
  <div className={'gradient-z hover:translate-y-1 w-full   mx-2 my-1  text-black rounded-md hover:cursor-pointer  hover:bg-opacity-60  shadow-md  flex flex-col sm:flex-col card'} >
    
    <div className=' flex   justify-center items-center p-1 '>    

     {/* <div className="text-bold text-base flex  text-yellow-300">     <img className={'h-12 w-12 m-2  rounded-full '+styles.userPic} src='/random.jpg '/>Gaurav Bahuguna</div> */}
     <img className='w-[99%]   rounded-md' src='/project.jpeg'/>
     </div>
      <div className="flex  items-center justify-around">
 
      <div className='flex flex-col  mb-5 m-1'>

        <div className=' w-1/2 font-bold text-xl font-serif text-white '>Shopler.com</div> 
        <div className='flex flex-col items-baseline'>
        <div className=' font-semibold text-lg text-slate-300'>Tech stack</div>
        <div className=' w-full   overflow-hidden text-slate-200 text-base font-semibold  break-words'>React, MongoDb, Nodejs</div>
        </div>
        </div>
        <div className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          <button type="button">Live Preview</button>
        </div>
           
        </div>
    </div>
  </>
  )
}

export default Card