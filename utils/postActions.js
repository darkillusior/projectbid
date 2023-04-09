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


export const deletePost = async (postId,setBids,setMybids,userId) => {
  try {
    await Axios.delete(`/post/biddelete/${postId}`);
   
    setBids(prev => prev.filter(bid => bid.user.toString() !== userId));

  
  } catch (error) {
    alert(catchErrors(error));
  }
};
export const deletePost2 = async (postId,setMybids) => {
  try {
    await Axios.delete(`/post/ideadelete/${postId}`);
   


    setMyidea(prev => prev.filter(mybid => mybid.postId.toString() !== postId));
  } catch (error) {
    alert(catchErrors(error));
  }
};

export const bidPost = async (postId,data,setBids, setbidtrue) => {
  try {
 
     
      await Axios.post(`post/bid/${postId}`,{data});
     
      setBids(prev => [data, ...prev]);
      setbidtrue(true)
    //
   
  } catch (error) {
    alert(catchErrors(error));
  }
};
export const updateBidPost = async (postId, data,setBids,) => {
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

export const ideaPost = async (postId,data, setideatrue) => {
  try {
 
      
      await Axios.post(`post/idea/${postId}`,{data});
      setideatrue(true)
    
    //
   
  } catch (error) {
    alert(catchErrors(error));
  }
};
export const updateideaPost = async (postId,data, setideatrue) => {
  try {
 
      
      await Axios.post(`post/updateidea/${postId}`,{
        data
      });
      setideatrue(true)
    
    //
   
  } catch (error) {
    alert(catchErrors(error));
  }
};




