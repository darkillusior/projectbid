import React, { useState, useRef } from "react";
import uploadPic from "../utils/uplodesinglefile";
import { profileUpdate } from "@/utils/profileActions";
export default function Modal2({}) {
  
  const [showModal, setShowModal] = React.useState(false);
  const [media, setMedia] = useState(null);
  const [mediaPreview, setMediaPreview] = useState(null);
  const [info, setinfo] = useState("");
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "media") {
      if (files && files.length > 0) {
        setMedia(files[0]);
        return setMediaPreview(URL.createObjectURL(files[0]));
      }
    }
    

  };
  const inputRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    let picUrl;

    if (media !== null) {
      picUrl = await uploadPic(media);
      }
     
 
await profileUpdate(picUrl,info)

setMedia(null);
    mediaPreview && URL.revokeObjectURL(mediaPreview);
}

  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
   Update Info
      </button>
      {showModal ? (
        <>
          <div
<<<<<<< HEAD
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative h-screen my-6 mx-auto w-full">
         
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full h-full bg-white outline-none focus:outline-none">
             
           <form onSubmit={handleSubmit}>
=======
            className="justify-center items-center flex overflow-x-hidden h-screen overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative h-screen my-6 mx-auto w-full">
         
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col gap-60 w-full h-full bg-white outline-none focus:outline-none">
             
           <form onSubmit={handleSubmit} className="flex items-center gap-10">
>>>>>>> 9e2c5b8 (new ui changes)
           {media === null && mediaPreview === null ? (
            <>
              <input
                ref={inputRef}
                onChange={handleChange}
                name="media"
                style={{ display: "none" }}
                type="file"
              />
              <div
<<<<<<< HEAD
                className="flex flex-col p-5 "
                onClick={() => inputRef.current.click()}
              >
                <h1 className="text-9xl" >
                    +</h1>
                <h1 className="font-semibold text-lg">Image</h1>
=======
                className="flex flex-col items-center p-5 "
                onClick={() => inputRef.current.click()}
              >
                <h1 className="text-6xl text-gray-800" >
                    +</h1>
                <h1 className="font-semibold text-gray-800 text-lg">Image</h1>
>>>>>>> 9e2c5b8 (new ui changes)
              </div>
            </>
          ) : media != null && mediaPreview ? (
            <div className="flex flex-col">
              <img
                style={{ height: "150px", width: "150px" }}
                src={mediaPreview}
                alt="PostImage"
                centered
                size="medium"
              />
              <h1 className="font-semibold text-lg">Image</h1>
            </div>
          ) : null}
<<<<<<< HEAD
          <textarea 
=======
         <div className="w-60 h-20  border-red-100">
         <textarea 
          className="h-full w-full"
>>>>>>> 9e2c5b8 (new ui changes)
            placeholder="Add discription"
            name="discription"
            value={info}
            onChange={(e)=>setinfo(e.target.value)}/>
<<<<<<< HEAD

          <button>Update</button>
=======
         </div>

          <button className="text-white bg-green-500 rounded font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button">Update</button>
>>>>>>> 9e2c5b8 (new ui changes)
          
       </form> 
          
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
<<<<<<< HEAD
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
=======
                    className="text-white bg-red-500 rounded font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
>>>>>>> 9e2c5b8 (new ui changes)
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                 
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
