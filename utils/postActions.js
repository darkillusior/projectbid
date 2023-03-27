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
     
      setBids(prev => [data, ...prev]);
    //
   
  } catch (error) {
    alert(catchErrors(error));
  }
};
export const updateBidPost = async (postId, data,setBids) => {
  try {
 
      
      await Axios.post(`post/updatebid/${postId}`,{
        data
      });
      setBids(prev => [data, ...prev]);
    
    //
   
  } catch (error) {
    alert(catchErrors(error));
  }
};

export const ideaPost = async (postId,data,setBids) => {
  try {
 
      
      await Axios.post(`post/idea/${postId}`,{data});
     
    
    //
   
  } catch (error) {
    alert(catchErrors(error));
  }
};
export const updateideaPost = async (postId,data,setBids) => {
  try {
 
      
      await Axios.post(`post/updateidea/${postId}`,{
        data
      });

    
    //
   
  } catch (error) {
    alert(catchErrors(error));
  }
};




