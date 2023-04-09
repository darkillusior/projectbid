import React, { useEffect, useState } from "react";
import {deletePost2,deletePost  } from "../utils/postActions";
function Bidslist({bid,idea,setMybids,setMyidea}) {
    const [bids, setBids] = useState(bid ||idea||[]);
    let bidtrue=true
    
  useEffect(() => {
   if(bid)
   { setBids(bid )}
 if(idea){
    setBids(idea)
 }
  }, [bid,idea]);
  return (<>
   {(bid||idea) && <div className="rounded-md mt-2 ">
   <div className="text-center font-bold text-3xl font-sans text-white ml-12 mt-2">
    {bid?<>Bid List</>:<>Idea LIST</>} 
   </div>
   <table className="w-[80%] m-auto mb-10">
     <thead>
       <tr className="">
         <td className="w-2/4 text-xl p-2 text-center font-mono text-white">
          {<>Name</>} 
         </td>
         <td className="w-2/4 text-xl text-center p-2 font-mono text-white">
         {bid?<>Bid Amount</>:<>Idea Amount</>}  
         </td>
        {idea&&<td className="w-2/4 text-xl text-center p-2 font-mono text-white">
         Discription
   </td>} 
       </tr>
     </thead>
     <tbody className="">
     {bids.map(bids=>(
        <tr className="bg-slate-900/50 border-slate-800 border hover:bg-slate-800/50 cursor-pointer ">
          <td
          className={  "w-2/4 text-xll p-2 text-center font-mono text-gray-300"}
        >
    <img src={bids.img} alt="" />
        </td>
        <td
          className={
            "w-2/4 text-xll p-2 text-center font-mono text-gray-300"
          }
        >
        {bids.projectName}
        </td>
        <td className="w-2/4 text-xl p-2 text-center font-serif text-green-600">
         {bids.price}
        </td>
      
      
     {idea&&<td className="w-2/4 text-xl p-2 text-center font-serif text-red-600">
     <button onClick={() =>deletePost2(bids.postId,setMyidea)}>delete</button>   
      
        </td>}  
        {bid&&<td className="w-2/4 text-xl p-2 text-center font-serif text-red-600">
     <button onClick={() =>deletePost(bids.postId,setMybids)}>delete</button>   
      
        </td>}
      </tr>
     ))} 
   
     </tbody>
   </table>
 </div>} 
  </>
  )
}

export default Bidslist