const express = require("express");


const BidModel = require("../models/BidModel");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const UserModel = require("../models/UserModel");
const ObjectId = require('mongodb').ObjectId;
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
      let id =ObjectId()
      const newPost = {
        _id:id,
        user: userId,
        
       name:data.data.name,

       userimg:data.data.userimg,

        img:data.data.pic,
     
       projectName:data.data.projectname,
     
       tech:data.data.tech,

       discription:data.data.description,
     
       bid: [],
       
       bidprice:data.data.bidprice,
  
      };
      
  
      await new BidModel(newPost).save();
  
      
      return res.json(newPost);
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

    return res.status(200).send("bided");
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
       const user= await UserModel.findById(userId)


    const isBid = post.idea.some(bid => bid.user.toString() === userId);
    if (isBid) {
      return res.status(401).send(" already there ");
    }

    post.idea.unshift({ user: userId,youridea:youridea,contact:contact,price:price,name:user.name});
                          
    await post.save();
    

    const newpost={
     postId:postId,
     projectName:post.projectName,
     img:post.img[0],
     price:price,
     contact:contact
    }
    user.myidea.push(newpost)
    await  user.save()

    return res.status(200).send("Posted");
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

//delete
router.delete("/biddelete/:postId", authMiddleware, async (req, res) => {
  try {
    const { postId } = req.params;
    const { userId } = req;

    const post = await BidModel.findById(postId);
    if (!post) return res.status(404).send("Post not found");

    const index = post.bid.findIndex(bid =>bid.user.toString() === userId);

  if (index === -1) {
      return res.status(404).send("No bid found");
    }
    const bid = post.bid[index];

    const deleteComment = async () => {
      post.bid.splice(index, 1);

      await post.save();
      return res.status(200).send("Deleted Successfully");
    };
const user = await UserModel.findById(userId);


 
    const  mybidindex = user.mybid.findIndex(bid =>bid.postId.toString() === postId);
    if (index === -1) {
     return res.status(404).send("No bid found");
   }       
    user.mybid.splice(mybidindex,1)
    await user.save();
    if (bid.user.toString() !== userId) {
      
      if (user.role === "root") {
        await deleteComment();
      } else {
        return res.status(401).send("Unauthorized");
      }
    }
    await deleteComment();
   
  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
});

router.delete("/ideadelete/:postId", authMiddleware, async (req, res) => {
  try {
    const { postId } = req.params;
    const { userId } = req;

    const post = await BidModel.findById(postId);
    if (!post) return res.status(404).send("Post not found");

    const index = post.idea.findIndex(bid =>bid.user.toString() === userId);
    if (index === -1) {
      return res.status(404).send("No idea found");
    }
    const bid = post.idea[index];

    const deleteComment = async () => {
      post.idea.splice(index, 1);

      await post.save();
      return res.status(200).send("Deleted Successfully");
    };
    const user = await UserModel.findById(userId);


 
    const  mybidindex = user.myidea.findIndex(bid =>bid.postId.toString() === postId);
    if (mybidindex === -1) {
     return res.status(404).send("No myidea found");
   }       
    user.myidea.splice(mybidindex,1)
    await user.save();
    if (bid.user.toString() !== userId) {
      const user = await UserModel.findById(userId);
      if (user.role === "root") {
        await deleteComment();
      } else {
        return res.status(401).send("Unauthorized");
      }
    }

    await deleteComment();
  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
});



module.exports = router;