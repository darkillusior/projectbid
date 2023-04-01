const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const UserModel = require("../models/UserModel");
const BidModel = require("../models/BidModel");

router.get("/",authMiddleware, async (req, res) => {
  try {
  
    const { userId} = req;
   
    const post= await BidModel.find({user:userId})
 
    return res.json( post);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server Error");
  }
});
router.post(`/postsedit`, authMiddleware, async (req, res) => {
  try {
    const { userId} = req;
      const {price}=req.body
    
    return res.json(posts);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server Error");
  }
});

// UPDATE PROFILE
router.post("/update", authMiddleware, async (req, res) => {
  try {
    const { userId } = req;
     

    if (profilePicUrl) {
      const user = await UserModel.findById(userId);
      user.profilePicUrl = profilePicUrl;
      await user.save();
    }

    return res.status(200).send("Success");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server Error");
  }
});



module.exports = router;
