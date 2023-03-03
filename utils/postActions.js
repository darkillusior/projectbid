import axios from "axios";
import baseUrl from "./baseUrl";
import catchErrors from "./catchErrors";
import cookie from "js-cookie";

export const Axios = axios.create({
  baseURL: `${baseUrl}/api`,
  headers: { Authorization: cookie.get("token") }
});

export const submitNewPost = async (
  data
) => {
  try {
  console.log("090",data)
   await Axios.post("/post",  {data});

  } catch (error) {
    const errorMsg = catchErrors(error);
    setError(errorMsg);
  }
};


export const deletePost = async (postId, setPosts, setShowToastr) => {
  try {
    await Axios.delete(`/${postId}`);
    setPosts(prev => prev.filter(post => post._id !== postId));
    setShowToastr(true);
  } catch (error) {
    alert(catchErrors(error));
  }
};

export const bidPost = async (postId,price,userId,setBids) => {
  try {
 
      
      await Axios.post(`/bid/${postId}`,{price});
      setBids(prev => [...prev, { user: userId }]);
    
    //
   
  } catch (error) {
    alert(catchErrors(error));
  }
};
export const updateBidPost = async (postId,userId, setLikes,setBids) => {
  try {
 
      
      await Axios.post(`/updatebid/${postId}`,{price});
      setBids(prev => [...prev, { user: userId }]);
    
    //
   
  } catch (error) {
    alert(catchErrors(error));
  }
};





