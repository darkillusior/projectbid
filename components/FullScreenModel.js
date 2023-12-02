import { useState } from "react";

export default function Modal({idea}) {
  
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="bg-slate-500/70 text-white hover:bg-slate-600/90 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Idea list
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative h-screen my-6 mx-auto w-full">
         
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full h-full bg-white outline-none focus:outline-none">
             
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl  font-semibold">
                    Idea list
                  </h3>
                
                </div>
          
            
            <table className="w-full  mb-10">
              <thead>
                <tr className="">
                  <td className=" text-xl p-2  text-center font-mono text-black">
                    Name
                  </td>
                  <td className=" text-xl  text-center p-2 font-mono text-black">
                   Idea Amount
                  </td>
                </tr>
              </thead>
              <tbody className="">
              {idea.map(bids=>(
                 <tr className=" border-slate-800 border hover:bg-slate-200 cursor-pointer ">
                 <td
                   className={
                     "w-2/4 text-xll p-2 text-center font-mono text-gray-900"
                   }
                 >
                 {bids.name}
                 </td>
                 <td className="w-2/4 text-xl p-2 text-center font-serif text-green-600">
                  {bids.price}
                 </td>
                
               </tr>
              ))} 
            
              </tbody>
            </table>
       
          
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
