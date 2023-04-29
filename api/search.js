const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const BidModel = require("../models/BidModel");


router.get("/:searchText/:userId", authMiddleware, async (req, res) => {
  try {
    const { searchText,userId } = req.params;

   
   
    if (searchText.length === 0) return;

    const results = await BidModel.findOne({
      user:userId,
      "product.name": { $regex: searchText, $options: "i" },
      
    },{product: {
      $elemMatch: {
        name: { $regex: searchText, $options: "i" },
      },
    },}
    );
  
//     const name =  results.product.filter(like => like.name.toString() === searchText);
// 
    return res.status(200).json(results.product);
  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
});

module.exports = router;
