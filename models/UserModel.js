import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {

  
    email: { type: String, required: true, unique: true },


    name: { type: String, required: true },
  
    category:{type:String,default:"User"},
 
    master:{type:String},
   
    userimg:{type: String},
   
      mybid:[{
     postId: { type: Schema.Types.ObjectId},
     projectName:{type:String},
     img:{type:String},
     price:{type:Number},
      contact:{type:Number}

   }],
   myidea:[{
    postId: { type: Schema.Types.ObjectId},
    projectName:{type:String},
    img:{type:String},
    price:{type:Number},
    contact:{type:Number}
 
    }],
    role: { type: String, default: "user", enum: ["user", "root"] },
  },
  { timestamps: true }
);

export default mongoose.models?.User || mongoose.model("User", UserSchema);
