import BidModel from "@/models/BidModel";
import connectDb from "@/utilsServer/connectDb";

export default async function handler(req, res) {
  try {
    if (req.method !== "GET") {
      connectDb()
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    const postId = req.query.postId;

    const post = await BidModel.findById(postId);

    if (!post) {
      return res.status(404).json({ error: "No product found" });
    }

    return res.json(post);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
}
