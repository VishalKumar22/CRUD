const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("MongoDB Connected");
//   } catch (error) {
//     console.error("MongoDB connection error:", error);
//   }
// };

// module.exports = connectDB;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDb Connected")
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = connectDB;
