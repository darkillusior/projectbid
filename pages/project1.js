import React, { useState } from 'react'
import Navbar from './components/navbar'
import styles from '../styles/Home.module.css'
import Snowfall2 from 'react-snowfall'
import Slider from './components/tools/sliders'
import BidForm from './components/bidForm'
function Project1() {
  const[viewdescription,setviewdescription]=useState(false)
  const[showBidForm,setShowBidForm]=useState(false)
  const bidform=()=>{
    setShowBidForm(true)
  }
  const viewmoredescription=()=>{
    setviewdescription(!viewdescription)
  }
  return (
   <>
    <main className={styles.bg}>
    <Navbar />     
    <div className=' h-auto p-2 '>
    <BidForm showBidForm={showBidForm} setShowBidForm={setShowBidForm} />
     <div className='m-2 flex items-center  '>    
    <img className={'h-32 w-32 m-2  rounded-full '+styles.userPic} src='/random.jpg '></img>
     <div className="font-bold text-3xl  text-yellow-300">Gaurav Bahuguna</div>
    	<div className={styles.container+' cursor-pointer'}><div className={styles.btn} onClick={bidform}><a  >BID</a></div> </div>
     </div>
    <h1 className={styles.heading2+' mt-3 text-center font-bold text-7xl  text-white ml-12'}>Shopler.com</h1> 
    
     <div className='rounded-md border-2 border-dotted mt-10 border-collapse relative z-10 '>
     <div className='text-center font-bold text-3xl font-serif text-white mt-4'>Gallery:</div>
    <Slider/>
     </div> 

    <div className='rounded-md border-2 border-dotted border-t-0 w-[70%] m-auto'>
    <div className='text-center font-bold text-3xl font-serif text-white ml-12 mt-2'>Description:</div>
     <div className='m-2 rounded-md  text-green-500 text-xl font-sans border-white p-2'>sdad dssda dsa dsa dsa dsa sda dsa dsa sda sda sda sad sda dsa sda dsa sda dsa sda ads
     {!viewdescription?
     <span className='m-4 text-red-600 cursor-pointer'onClick={viewmoredescription}>...more</span>:null}
     {viewdescription?
     <span>fajbsadba aisdhoasindoaisndolasn asoldlon asdn asdnaosdnasl n oiasnd asdkn asdasdassdasdasd
      asdasdasdasd asdasdasdasdasdasdasdasdasd sadasdasdasdasdasdasdasdasd ajbsadbadf defaultsaddadas dasda sdasdasdasdasdasd     sadasdasdasdasdas dasdasdasdasd dsada  sdf<span className='m-4 text-red-600 cursor-pointer'onClick={viewmoredescription}>less</span></span>:null}
     </div>
     </div>
     <br/>
 <hr/>
    <div className='rounded-md mt-2 '>
    <div className='text-center font-bold text-3xl font-serif text-white ml-12 mt-2'>Bid List:</div>
    <table className='w-[80%] m-auto mb-10'>
      <thead>
        <tr className=''>
          <td className='w-2/4 text-xl p-2 text-center font-serif text-white'>Name</td>      
          <td className='w-2/4 text-xl text-center p-2 font-serif text-white'>Bid Amount</td>
        </tr>
      </thead>
      <tbody className='' >
         <tr className='bg-slate-900 border-slate-50 border-2 hover:bg-slate-800 cursor-pointer '>
          <td className={ 'w-2/4 text-xl p-2 text-center font-serif text-gray-300'}>gaurav bahuguna</td>      
          <td className='w-2/4 text-xl p-2 text-center font-serif text-green-600'>500$</td>
        </tr>
          <tr className='bg-slate-900  border-slate-50 border-2  hover:bg-slate-800 cursor-pointer'>
          <td className='w-2/4 text-xl p-2 text-center font-serif text-gray-300'>gaurav bahuguna</td>      
          <td className='w-2/4 text-xl p-2 text-center font-serif text-green-600'>500$</td>
        </tr>
    </tbody>
      </table>
     </div>
     
    </div>
    </main>  
   </>
  )
}

export default Project1