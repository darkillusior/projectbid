// pages/api/bids/delete/idea/[postId].js
import BidModel from "@/models/BidModel";
import UserModel from "@/models/UserModel";
import connectDb from "@/utilsServer/connectDb";
import withAuthorization from "@/middleware/authMiddleware";

const handler = async (req, res) => {
  try {
    if (req.method !== "DELETE") {
      connectDb();
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { postId } = req.query;
    const { userId } = req;

    const post = await BidModel.findById(postId);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    const index = post.idea.findIndex(
      (idea) => idea.user.toString() === userId
    );
    if (index === -1) {
      return res.status(404).json({ error: "No idea found" });
    }
    const idea = post.idea[index];

    const deleteComment = async () => {
      post.idea.splice(index, 1);

      await post.save();
      return res.status(200).json({ message: "Deleted Successfully" });
    };
    const user = await UserModel.findById(userId);

    const myideaIndex = user.myidea.findIndex(
      (idea) => idea.postId.toString() === postId
    );
    if (myideaIndex === -1) {
      return res.status(404).json({ error: "No myidea found" });
    }
    user.myidea.splice(myideaIndex, 1);
    await user.save();

    if (idea.user.toString() !== userId) {
      const user = await UserModel.findById(userId);
      if (user.role === "root") {
        await deleteComment();
      } else {
        return res.status(401).json({ error: "Unauthorized" });
      }
    }

    await deleteComment();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
};
export default withAuthorization(handler);