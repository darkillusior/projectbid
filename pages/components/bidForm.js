import React from 'react'
import styles from '../../styles/Home.module.css'
import style2 from '../../styles/main.module.scss'
function BidForm({showBidForm,setShowBidForm}) {
  return (
    <>
          {showBidForm ? <>  
          <form className={styles.form2 + ' w-1/2 p-3 h-fit flex flex-col shadow-2xl  shadow-black rounded-md bg-white  z-50   '}>
              <h1 className={styles.heading}>Enter Bidding Details:</h1>
              <div className='m-2 flex justify-center'>
                <label className={styles.label + ' m-2'}>Enter Phone No</label><input className={styles.input + ' text-slate-800 font-bold m-2 p-2'} type='tel'></input>
              </div>
              <div className='m-2 flex justify-center'>
                  <label className={styles.label + ' m-2'}>Enter BID Amount</label><input className={styles.input + ' text-slate-800 font-bold m-2 p-2'} type='number'></input>
              </div>
            <div className='flex justify-evenly '>
             <a className='flex justify-center m-auto font-bold text-black text-xl hover:text-base hover:bg-red-600 hover:text-white transition-all duration-100 w-1/3 p-2 rounded-md cursor-pointer'onClick={()=>{setShowBidForm(false)}}>Cancel</a>    
            <a className={styles.btn5}>BID</a>
            </div>
          </form></>:null}
  
    </>
  )
}

export default BidForm