const express = require("express");
const router = express.Router();
const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");

const authMiddleware = require("../middleware/authMiddleware");
const { OAuth2Client } = require('google-auth-library');
router.get("/", authMiddleware, async (req, res) => {
  const { userId } = req;

  try {
    const user = await UserModel.findOne({_id:userId})
    if (!user) {
      return res.status(404).send("User not found");
    }


    return res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
});
router.post("/", async (req, res) => {
  const {client_id, jwtToken } = req.body.user;

  try {

   

    const client = new OAuth2Client(client_id);
    // Call the verifyIdToken to
    // varify and decode it
    const ticket = await client.verifyIdToken({
        idToken: jwtToken,
        audience: client_id,
    });
    // Get the JSON with all the user info
    const data = ticket.getPayload();
  

 
  let user = await UserModel.findOne({ email: data.email })
    if (!user) {
      user = new UserModel({
        name:data.name,
        email: data.email,
        userimg:data.picture

      });
 
      await user.save();
    }


    const payload = { userId: user._id };
    jwt.sign(payload, process.env.JwtSecret, { expiresIn: "2d" }, (err, token) => {
      if (err) throw err;
   
      res.json(token);
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
});

module.exports = router;
