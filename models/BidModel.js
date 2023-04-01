const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BidSchema= new Schema({
  
  user: { type: Schema.Types.ObjectId, ref: "User" },
   
  name:{type: String},
  
  userimg:{type:String},
   
  img:[String],

  projectName:{type: String},

  tech:{type: String},

  rating:[{type:String,default:0}], 

  link:{type: String},

  discription:{type:String},

  bid: [{ user: { type: Schema.Types.ObjectId, ref: "User" },
          price:{type:Number}  ,
          contact:{type: Number},
          name:{type:String},
          img:{type:String}
               
 }],
 
 idea: [{ user: { type: Schema.Types.ObjectId, ref: "User" },
idea:{type:String}  ,
 contact:{type: Number},
 price:{type: Number},
 name:{type:String},
 img:{type:String}
}],
  
  bidprice:{type:Number},



  

 
  
  

 
 
});

module.exports = mongoose.model("Bid",BidSchema  );
