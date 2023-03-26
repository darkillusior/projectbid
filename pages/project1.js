import React, { useState } from 'react'
import Navbar from './components/navbar'
import styles from '../styles/Home.module.css'
import Snowfall2 from 'react-snowfall'
import Slider from './components/tools/sliders'
import BidForm from './components/bidForm'
import Profile from './my-profile'
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
    <Profile />
   </>
  )
}

export default Project1