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

export const bidPost = async (postId,data,setBids) => {
  try {
 
     
      await Axios.post(`post/bid/${postId}`,{data});
      setBids(prev => [...prev,  {bid:[data]}]);
    
    //
   
  } catch (error) {
    alert(catchErrors(error));
  }
};
export const updateBidPost = async (postId, contact,img,name,setLikes,setBids) => {
  try {
 
      
      await Axios.post(`/updatebid/${postId}`,{
        price,contact,img,name
      });
      setBids(prev => [...prev,  {price,contact,name,img}]);
    
    //
   
  } catch (error) {
    alert(catchErrors(error));
  }
};

export const ideaPost = async (postId,price,name,img,userId,setBids) => {
  try {
 
      
      await Axios.post(`/idea/${postId}`,{price,contact,name,img});
      setBids(prev => [...prev, {price,contact,name,img}]);
    
    //
   
  } catch (error) {
    alert(catchErrors(error));
  }
};
export const updateideaPost = async (postId,userId, contact,img,name,setLikes,setBids) => {
  try {
 
      
      await Axios.post(`/updateidea/${postId}`,{
        price,contact,img,name
      });
      setBids(prev => [...prev, {price,contact,name,img}]);
    
    //
   
  } catch (error) {
    alert(catchErrors(error));
  }
};




