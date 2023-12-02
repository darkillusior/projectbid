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
    const { contact, price, youridea } = req.body.data;

    const post = await BidModel.findById(postId);
    if (!post) {
      return res.status(404).json({ error: "No Post found" });
    }

    const user = await UserModel.findById(userId);

    const isIdea = post.idea.some((idea) => idea.user.toString() === userId);
    if (isIdea) {
      return res.status(401).json({ error: "Already posted an idea" });
    }

    post.idea.unshift({
      user: userId,
      youridea: youridea,
      contact: contact,
      price: price,
      name: user.name,
    });

    await post.save();

    const newpost = {
      postId: postId,
      projectName: post.projectName,
      img: post.img[0],
      price: price,
      contact: contact,
    };
    user.myidea.push(newpost);
    await user.save();

    return res.status(200).json({ message: "Idea posted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
};

export default withAuthorization(handler);
