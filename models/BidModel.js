const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BidSchema= new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
 
   img:[String],

  projectName:{type: String},

  tech:{type: String},

  rating:[{type:String,default:0}], 

  video:{type:String},

  discription:{type:String},

  bid: [{ user: { type: Schema.Types.ObjectId, ref: "User" },
          price:{type:Number}       
 }],
  
  bidprice:{type:Number},
  ideaprice:{type:Number},


  

 
  
  

 
 
});

module.exports = mongoose.model("Bid",BidSchema  );
