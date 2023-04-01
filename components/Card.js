import React from 'react'

function Card({post}) {
  console.log(post)
  return (
  <>
  <div className={'gradient-z hover:translate-y-1  sm:w-96   mx-2 my-1  text-black rounded-md hover:cursor-pointer  hover:bg-opacity-60  shadow-md    card'} >
    
    <div className=' flex   justify-center items-center p-1 '>    

     {/* <div className="text-bold text-base flex  text-yellow-300">     <img className={'h-12 w-12 m-2  rounded-full '+styles.userPic} src='/random.jpg '/>Gaurav Bahuguna</div> */}
     <img className='w-full p-1 max-h-56   rounded-lg' src={post.img[0]}/>
     </div>
      <div className="flex  items-center justify-between ">
 
      <div className='flex flex-col mx-4 my-5  mb-5 '>

        <div className='  font-bold text-xl font-serif text-white '>{post.projectName.toUpperCase()}</div> 
        <div className='flex flex-col items-baseline'>
        <div className=' font-semibold text-lg text-slate-300'>Tech Stack</div>
        <div className=' w-full   overflow-hidden text-slate-200 text-base font-semibold break-all  break-words'>{post.tech.toLowerCase()}</div>
        </div>
        </div>
        <div className="text-white bg-gradient-to-r mx-10 from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
          <button type="button">Live Preview</button>
        </div>
           
        </div>
    </div>
  </>
  )
}

export default Card