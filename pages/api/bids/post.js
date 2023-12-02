import withAuthorization from "@/middleware/authMiddleware";
import BidModel from "@/models/BidModel";
import connectDb from "@/utilsServer/connectDb";
import { ObjectId } from "mongodb";

export default withAuthorization(async function handler(req, res) {

  if (req.method === "POST") {
    connectDb();

    try {
      const { userId } = req;
      const data = req.body;

      let id = ObjectId();
      const newPost = {
        _id: id,
        user: userId,
        name: data.data.name,
        userimg: data.data.userimg,
        img: data.data.pic,
        projectName: data.data.projectname,
        tech: data.data.tech,
        discription: data.data.description,
        bid: [],
        bidprice: data.data.bidprice,
      };

      await new BidModel(newPost).save();

      return res.json(newPost);
    } catch (error) {
      console.error(error);
      return res.status(500).send(`Server error`);
    }
  }

  return res.status(405).json({ error: "Method Not Allowed" });
});
