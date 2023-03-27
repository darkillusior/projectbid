const express = require("express");


const BidModel = require("../models/BidModel");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const UserModel = require("../models/UserModel");

router.get("/",async (req, res) => {
  try {
   
  

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
    const {price,contact} = req.body.data;

    const post = await BidModel.findById(postId)
    if (!post) {
      return res.status(404).send("No Post found");
    }
   
    const user= await UserModel.findById(userId)

    const isBid = post.bid.some(bid => bid.user.toString() === userId);
    if (isBid) {
      return res.status(401).send(" already bided update yours price");
    }

    post.bid.unshift({ user: userId,price:price,contact:contact,name:user.name,img:user.userimg});
                          
    await post.save();
    

     const newpost={
      postId:postId,
      projectName:post.projectName,
      img:post.img[0],
      price:price,
      contact:contact
     }
     user.mybid.push(newpost)
     await  user.save()

    return res.status(200).send("Post liked");
  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
});
router.post("/updatebid/:postId", authMiddleware, async (req, res) => {
  try {
     const { postId } = req.params;
   
     const { userId } = req;
    const {price,contact} = req.body.data;
   
    const post = await BidModel.findById(postId );
  if (!post) {
      return res.status(404).send("No Post found");
    }
  const bids= post.bid.filter(bid=>bid.user.toString()===  userId);
   if(price)
   { bids[0].price=price
  }
   
    if(contact){

      bids[0].contact=contact
    }
    
  
   await post.save()
    
    
  
    const user= await UserModel.findById(userId );
     
     

    const userbids= user.mybid.filter(bid=>bid.postId.toString()=== postId);
  
    userbids[0].projectName=post.projectName
    userbids[0].img=post.img[0]
    if(price)
   { userbids[0].price=price
  }
   
    if(contact){

      userbids[0].contact=contact
    }
    


 
     await  user.save()


    return res.status(200).send("Post updated");
  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
});
router.post("/idea/:postId", authMiddleware, async (req, res) => {
  try {
     const { postId } = req.params;
   
     const { userId } = req;
    const {contact,price,youridea,} = req.body.data;

    const post = await BidModel.findById(postId)
    if (!post) {
      return res.status(404).send("No Post found");
    }
   


    const isBid = post.idea.some(bid => bid.user.toString() === userId);
    if (isBid) {
      return res.status(401).send(" already there ");
    }

    post.idea.unshift({ user: userId,youridea:youridea,contact:contact,price:price});
                          
    await post.save();
    
    const user= await UserModel.findById(userId)
    const newpost={
     postId:postId,
     projectName:post.projectName,
     img:post.img[0],
     price:price,
     contact:contact
    }
    user.idea.push(newpost)
    await  user.save()

    return res.status(200).send("Post liked");
  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
});
router.post("/updateidea/:postId", authMiddleware, async (req, res) => {
  try {
    const { postId } = req.params;
   
    const { userId } = req;
   const {price,contact} = req.body.data;
  
   const post = await BidModel.findById(postId );
 if (!post) {
     return res.status(404).send("No Post found");
   }
 const bids= post.idea.filter(bid=>bid.user.toString()===  userId);
  if(price)
  { bids[0].price=price
 }
  
   if(contact){

     bids[0].contact=contact
   }
   
 
  await post.save()
   
   
 
   const user= await UserModel.findById(userId );
    
    

   const userbids= user.myidea.filter(bid=>bid.postId.toString()=== postId);
 
   userbids[0].projectName=post.projectName
   userbids[0].img=post.img[0]
   if(price)
  { userbids[0].price=price
 }
  
   if(contact){

     userbids[0].contact=contact
   }
   



    await  user.save()


   return res.status(200).send("Post updated");
  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
});

// UNLIKE A POST




module.exports = router;