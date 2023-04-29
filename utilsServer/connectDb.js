const mongoose = require("mongoose");

async function connectDb() {
  try {
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    
  } catch (error) {
 
    
    process.exit(1);
  }
}

module.exports = connectDb;
