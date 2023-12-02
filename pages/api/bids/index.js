import BidModel from "@/models/BidModel";
import connectDb from "@/utilsServer/connectDb";


export default async function handler(req, res) {
  try {
    if (req.method !== "GET") {
      connectDb()
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    const posts = await BidModel.find();

    if (!posts) {
      return res.status(404).json({ error: "Posts not found" });
    }

    return res.json(posts);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
}
