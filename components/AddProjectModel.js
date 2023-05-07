import React, {useState} from "react";
import { submitNewPost } from "@/utils/postActions";
import uploadPic from "@/utils/uploadPicToCloudinary";
export default function Modal({user, setPost}) {
  
  const [showModal, setShowModal] = React.useState(false);
    
  let picUrl=[]
    const[data,setFormvalues]=useState({
        projectname:"",
        name:user?.name,
        userimg:user?.userimg,
        description:"",
        tech:"",
        details:"",
        pic:[],
        bidprice:"",
     
    })
    
    const[pic,setPic]=useState([])
    const picName = pic[0]
    const handlechange=(e)=>{
        const{name,value}=e.target
        setFormvalues(prev =>({...prev,[name]:value}))
        
    }

    const handleSubmit = async (e)=>{
       
      e.preventDefault();
      
      if (pic.length===0) {
        alert("Please select an image file.");
        return;
      }
    
    picUrl = await uploadPic(pic);
     data.pic=picUrl

await submitNewPost(data, setPost)
   }
  return (
    <>
      <button
        className="outline-none focus:outline-none ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <svg width="50" height="50" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="50" height="50" rx="25" fill="#2D75EF"/><path d="M32.5 25.938h-15a.944.944 0 0 1-.938-.938c0-.512.425-.938.938-.938h15c.513 0 .938.425.938.938a.944.944 0 0 1-.938.938Z" fill="#fff"/><path d="M25 33.438a.944.944 0 0 1-.938-.938v-15c0-.512.425-.938.938-.938.512 0 .938.425.938.938v15a.944.944 0 0 1-.938.938Z" fill="#fff"/></svg>
      </button>
      {showModal ? (
        <>
        <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto top-0 fixed bg-white/20 w-full inset-0 z-50 outline-none focus:outline-none"
          >
           <form onSubmit={handleSubmit} className="create-post1">
          <div className="flex items-center justify-center w-full text-slate-200 text-2xl font-bold font-sans">
            <span>Add Project</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <input required placeholder="Project Name" onChange={handlechange} value={data.projectname} name="projectname" className="bg-transparent/40 w-50 text-white outline-none py-1 px-2 rounded" type="text" />
            <input required placeholder="Tech Stack" onChange={handlechange} value={data.tech} name="tech" className="bg-transparent/40 w-50 text-white outline-none py-1 px-2 rounded" type="text" />
            <input required placeholder="Bid Price" min="0.00" max="10000.0" step="0.1"    onChange={handlechange} value={data.bidprice} name="bidprice" className="bg-transparent/40 w-50 text-white outline-none py-1 px-2 rounded " type="number" />
    <label className="flex items-center bg-transparent/40 w-40 outline-none rounded mt-0 px-2 gap-2">
        <svg className="w-7 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        {pic.length === 0 ? <span className="text-white leading-normal">upload image</span> : <span className="text-white text-xs leading-normal">{picName.name}</span>}
        <input required name="pic" multiple   onChange={(e)=>{setPic(e.target.files)}} type='file' className="hidden" />
    </label>
          </div>
          <div className="w-full">
            <textarea required onChange={handlechange} value={data.description} name="description" className="bg-transparent/40 text-white outline-none py-1 px-2 rounded w-full" placeholder="Add details" rows="5"></textarea>
          </div>
         <div className="flex">
         <div className="text-white bg-gradient-to-r mr-5 from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-20">
          <button type="submit">add</button>
        </div>
          <div onClick={()=> setShowModal(false)} className="text-white bg-gradient-to-r mr-5 from-red-400 via-red-500 to-red-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-20">
          <button type="submit">cancel</button>
        </div>
         </div>
        </form>
        </div>
        </>
      ) : null}
    </>
  );
}
