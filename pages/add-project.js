import React, { useState } from 'react'

import styles from '../styles/Home.module.css'
import Snowfall2 from 'react-snowfall'
import uploadPic from '../utils/uploadPicToCloudinary';
import uploadSingleVideo from '../utils/uplodesinglefile';
import { submitNewPost } from "../utils/postActions";

function AddProject() {
  if (typeof document === 'undefined') {
    React.useLayoutEffect = React.useEffect;
  }
  let picUrl=[]
    const[data,setFormvalues]=useState({
        projectname:"",
        description:"",
        tech:"",
        details:"",
        pic:[],
        demovideo:"",
        bidprice:"",
        ideaprice:""
    })
    const[video,setvideo]=useState()
    const[pic,setPic]=useState([])
    const handlechange=(e)=>{
        const{name,value}=e.target
        setFormvalues(prev =>({...prev,[name]:value}))
        
    }
    console.log(data)
console.log(pic)
    const handleSubmit = async (e)=>{
       
      e.preventDefault(data);
let demovideo=null

    picUrl = await uploadPic(pic);
  if(video)
  { demovideo = await  uploadSingleVideo(video)
  }data.pic=picUrl
  data.demovideo=demovideo
await submitNewPost(data)
   }


  return (
    <>
    <main className={styles.bgA}>
    
    <Snowfall2 style={{ filter: 'blur(1px)' }} snowflakeCount={50} speed={[0.0, 0.1]} wind={[0.0, 0.1]} />

   <div className={styles.form +" text-6xl m-2 ml-4 relative px-5 overflow-hidden z-20"}>
    Add Project</div>
    <br/>
    <form onSubmit={handleSubmit} className={styles.form +" text-6xl m-4 mt-10 relative  overflow-hidden z-20"}>
    <div className="flex items-center justify-start">
    <label className={styles.label +' text-xl '}>Project Name</label>
    <input type="text" className={styles.input+' text-lg font-sans mt-4  ml-8 rounded-md p-2'} onChange={handlechange} value={data.projectname} name="projectname"></input> 
  
    </div>

    

    <div className='flex items-center justify-start gap-20'>
    <label className={styles.label +' text-xl '}>Tech::</label> <textarea type="text" className={styles.input+' text-lg font-sans mt-4  ml-8 rounded-md p-2'} rows='' cols='50' onChange={handlechange} value={data.tech} name="tech"></textarea></div> 
    
    <div className='flex items-center gap-5'>
    <label className={styles.label +' text-xl '}>Details:</label> <textarea type="text" className={styles.input+' text-lg font-sans mt-4  ml-20 rounded-md p-2'} rows='4' cols='50' onChange={handlechange} value={data.description} name="description"></textarea></div> 
    
      
     <label className={styles.label +' text-xl '}>Screenshots:</label><input className={styles.input+" w-1/5 py-2 text-sm mt-3 ml-3"} type="file" name="pic" multiple   onChange={(e)=>{setPic(e.target.files)}} ></input>

     <label className={styles.label +' text-xl ml-6'}>Demo Video</label><input className={styles.input+" w-1/5 py-2 text-sm mt-3 ml-3"} type="file" name="video"  onChange={(e)=>{setvideo(e.target.files[0])}}  ></input>
     
     <br/>
     
     <label className={styles.label +' text-xl '}>Bid Price</label><input className={styles.input+"  text-sm ml-3 h-10 mt-3 p-2"} placeholder="DOLLAR" type="number"min="0.00" max="10000.0" step="0.1"    onChange={handlechange} value={data.bidprice} name="bidprice"></input>

     <label className={styles.label +' text-xl ml-12 '}>Idea Price</label><input className={styles.input+"  text-sm ml-3 h-10 mt-3 p-2"} placeholder="DOLLAR" type="number"min="0.00" max="10000.0" step="0.1"   onChange={handlechange} value={data.ideaprice} name="ideaprice" ></input>
   
    <br/>
    
    <button className={styles.addButton}>ADD</button>
    </form>
   

    </main>
    </>
  )
}

export default AddProject