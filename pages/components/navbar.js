import React, { useRef, useLayoutEffect,useState } from 'react'

import styles from '../../styles/Home.module.css'
import style2 from '../../styles/main.module.scss'

function Navbar() {
  const[showCollapse,setShowCollapse]=useState(false)
    
  const [hidden, sethidden] = useState("");
  useLayoutEffect(() => {

    let postend=0
    let position = document.getElementById('position');
    
    const fixedHeader = () => {   
      
         let poststart
   
      if(position){
        console.log("2")
         poststart = position.scrollTop}
   else{

        poststart = window.scrollY
   }     
console.log(poststart)
      if ( poststart >postend) {
        sethidden("-translate-y-3/4")
      } else {
        sethidden("")
      }
      postend=poststart 
    }
    if(position){
      
    position.addEventListener('scroll', fixedHeader)
 }else{
  console.log("1")
  window.addEventListener('scroll', fixedHeader)
 }


}, [])
  const collapse=(e)=>{
    setShowCollapse(!showCollapse)
  }
  return (
   <>
   <div  className={`fixed top-0 bg-opacity-50 bg-slate-800  z-50 items-center ${hidden}  ` + style2.navbar} >
    <input className='m-2 p-1 rounded-md opacity-70 w-1/5' type="text" placeholder='Search Any Project' ></input><button className='w-8'><img src='/magnifying-glass2.png' className='h-5'></img></button>
    
    <div className={styles.heading + "  w-full "}>
          <div className=' w-4/5'><a href='/'>ProjectBidder.com</a></div>
    </div>
    
   <div className='text-white text-xl font-bold relative right-8 p-2 hover:text-slate-300 cursor-pointer select-none' onMouseEnter={() => setShowCollapse(true)} onMouseLeave={()=>{setShowCollapse(false)}}>
  Menu
  {showCollapse && (
    <div className='bg-white text-black z-30 w-44 right-12 absolute duration-700 ease-in-out transform transition-transform rounded-md'>
      <div className='block rounded-md'>
        <div className='text-center p-2 hover:bg-slate-400 rounded-sm'><a href='/add-project'>Add Project</a></div>
        <div className='text-center p-2 hover:bg-slate-400 rounded-sm'><a href='/my-profile'>My Profile</a></div>
        <div className='text-center p-2 rounded-sm hover:bg-slate-400'><a href='logout'>Logout</a></div>
      </div>
    </div>
  )}
</div>

   </div>
   </>
  )
}

export default Navbar