import UserModel from "@/models/UserModel";
import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
import connectDb from "@/utilsServer/connectDb";

export default async function handler(req, res) {



  if (req.method === "POST") {
      connectDb();
    // Handle POST request
    const { client_id, jwtToken } = req.body.user;
    try {
      const client = new OAuth2Client(client_id);
      const ticket = await client.verifyIdToken({
        idToken: jwtToken,
        audience: client_id,
      });
      const payload = ticket.getPayload();

      let user = await UserModel.findOne({ email: payload.email });

      if (!user) {
        user = new UserModel({
          name: payload.name,
          email: payload.email,
          userimg: payload.picture,
        });
        await user.save();
      }

      const tokenPayload = { userId: user._id };
      jwt.sign(
        tokenPayload,
        process.env.JwtSecret,
        { expiresIn: "2d" },
        (err, token) => {
          if (err) throw err;

          res.json(token);
        }
      );
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Server error" });
    }
  }

  else{
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
