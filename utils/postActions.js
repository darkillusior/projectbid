import axios from "axios";
import baseUrl from "./baseUrl";
import catchErrors from "./catchErrors";
import cookie from "js-cookie";

export const Axios = axios.create({
  baseURL: `${baseUrl}/api`,
  headers: { Authorization: cookie.get("token") },
});

export const submitNewPost = async (data, setPost, setLoading) => {
  try {
    const res = await Axios.post("/bids/post", { data });

    const newPost = {
      ...res.data,
    };
    setLoading(false);
    setPost((prev) => [newPost, ...prev]);
  } catch (error) {
    alert(catchErrors(error));
  }
};

export const deletePost = async (postId, setBids, setMybids, userId) => {
  try {
    await Axios.delete(`/bids/delete/bid/${postId}`);

    setBids((prev) => prev.filter((bid) => bid.user.toString() !== userId));
  } catch (error) {
    alert(catchErrors(error));
  }
};

export const deletePost2 = async (postId, setMybids) => {
  try {
    await Axios.delete(`/bids/delete/idea/${postId}`);

    setMybids((prev) =>
      prev.filter((mybid) => mybid.postId.toString() !== postId)
    );
  } catch (error) {
    alert(catchErrors(error));
  }
};

export const bidPost = async (postId, data, setBids, setbidtrue) => {
  try {
    await Axios.post(`/bids/bid/${postId}`, { data });

    setBids((prev) => [data, ...prev]);
    setbidtrue(true);
  } catch (error) {
    alert(catchErrors(error));
  }
};

export const updateBidPost = async (postId, data, setBids) => {
  try {
    await Axios.post(`/bids/updatebid/${postId}`, { data });
    setBids((prev) => [data, ...prev]);
  } catch (error) {
    alert(catchErrors(error));
  }
};

export const ideaPost = async (postId, data, setideatrue) => {
  try {
    await Axios.post(`/bids/idea/${postId}`, { data });
    setideatrue(true);
  } catch (error) {
    alert(catchErrors(error));
  }
};

export const updateideaPost = async (postId, data, setideatrue) => {
  try {
    await Axios.post(`/bids/updateIdea/${postId}`, { data });
    setideatrue(true);
  } catch (error) {
    alert(catchErrors(error));
  }
};
