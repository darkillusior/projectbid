import React, { useState } from 'react'

function New() {
  const [color,setColor]=useState("bg-red-400");
  const onchange =()=>{
if(color==="bg-blue-400"){
  setColor("bg-red-400");
}else{
  setColor("bg-blue-400");
}
  }
  return (<>
    <div className={`w-full ${color} h-screen`}>Index</div>
    <button className='white' onClick={onchange}>
change
    </button></>
  )
}

export default New