import withAuthorization from "@/middleware/authMiddleware";
import BidModel from "@/models/BidModel";
import connectDB from "@/utilsServer/connectDb";

export default withAuthorization(async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    try {
      const { userId } = req;

      // Applying middleware
      await withAuthorization(async (req, res) => {
        const post = await BidModel.find({ user: userId });
        console.log(post);
        return res.status(200).json({ msg: "Good", post });
      })(req, res);
    } catch (error) {
      console.error(error);
      return res.status(500).send("Server Error");
    }
  }
});
