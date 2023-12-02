import withAuthorization from "@/middleware/authMiddleware";
import BidModel from "@/models/BidModel";
import UserModel from "@/models/UserModel";
import connectDb from "@/utilsServer/connectDb";

const handler = async (req, res) => {
  try {
    if (req.method !== "POST") {
      connectDb();
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { postId } = req.query;
    const { userId } = req;
    const { price, contact } = req.body.data;

    const post = await BidModel.findById(postId);
    if (!post) {
      return res.status(404).json({ error: "No Post found" });
    }

    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(401).json({ error: "User not found", userId });
    }

    const isBid = post.bid.some((bid) => bid.user.toString() === userId);
    if (isBid) {
      return res
        .status(401)
        .json({ error: "Already bided, update your price" });
    }

    post.bid.unshift({
      user: userId,
      price: price,
      contact: contact,
      name: user ? user.name : "Unknown",
      img: user ? user.userimg : null,
    });
     
    await post.save();
 const newpost = {
   postId: postId,
   projectName: post.projectName,
   img: post.img[0],
   price: price,
   contact: contact,
 };
 user.mybid.push(newpost);
  await user.save();
    return res.status(200).json({ message: "Bided successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
};

export default withAuthorization(handler);
