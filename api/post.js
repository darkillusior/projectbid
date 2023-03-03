const express = require("express");


const BidModel = require("../models/BidModel");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

router.get("/",async (req, res) => {
  try {
   
   console.log("123 gg")

   const post = await BidModel.find()
     
      if (!post) {
   
        return res.status(404).send("User not found");
      }
   
    
   


    return res.json(post);
  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
});




router.get("/:postId",async (req, res) => {
    try {
   
      const post = await BidModel.findById(req.params.postId)
      
     
       
      if (!post) {
        return res.status(404).send("no product found");
      }
     
      return res.json(post);
    } catch (error) {
      console.error(error);
      return res.status(500).send(`Server error`);
    }
  });




  router.post("/", authMiddleware, async (req, res) => {
    const { userId } = req;
    const data = req.body;
  console.log(data,data.pic)
    try {
      const newPost = {
        user: userId,
 
        img:data.data.pic,
     
       projectName:data.data.projectname,
     
       tech:data.data.tech,
     
       
     
       video:data.data.video,
     
       discription:data.data. description,
     
       bid: [],
       
       bidprice:data.data.bidprice,
       ideaprice:data.data.ideaprice,
      };
      
  
      const post = await new BidModel(newPost).save();
  
      
      return res.json(post);
    } catch (error) {
      console.error(error);
      return res.status(500).send(`Server error`);
    }
  });



router.post("/bid/:postId", authMiddleware, async (req, res) => {
  try {
     const { postId } = req.params;
   
     const { userId } = req;
    const {price} = req.body;

    const post = await BidModel.findById(postId)
    if (!post) {
      return res.status(404).send("No Post found");
    }
   


    const isBid = post.bid.some(bid => bid.user.toString() === userId);
    if (isBid) {
      return res.status(401).send(" already bid update yours");
    }

    post.bid.unshift({ user: userId,price:price});
                          
    await post.save();
    


    return res.status(200).send("Post liked");
  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
});

// UNLIKE A POST
router.post("/updatebid/:postId", authMiddleware, async (req, res) => {
  try {
     const { postId } = req.params;
   
     const { userId } = req;
    const {price} = req.body;
    const post = await BidModel.findOne({
      _id:postId,
      "bid.user":userId,
      
    },{bid: {
      $elemMatch: {
        user: userId,
      
      },
    },}
    );
   
    if (!post) {
      return res.status(404).send("No Post found");
    }
   
     post.price=price

    
    await post.save();
    


    return res.status(200).send("Post liked");
  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
});



module.exports = router;