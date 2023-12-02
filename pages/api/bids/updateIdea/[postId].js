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

    const ideas = post.idea.filter((idea) => idea.user.toString() === userId);
    if (price) {
      ideas[0].price = price;
    }

    if (contact) {
      ideas[0].contact = contact;
    }

    await post.save();

    const user = await UserModel.findById(userId);

    const userIdeas = user.myidea.filter(
      (idea) => idea.postId.toString() === postId
    );

    userIdeas[0].projectName = post.projectName;
    userIdeas[0].img = post.img[0];

    if (price) {
      userIdeas[0].price = price;
    }

    if (contact) {
      userIdeas[0].contact = contact;
    }

    await user.save();

    return res.status(200).json({ message: "Idea updated successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
};

export default withAuthorization(handler);
