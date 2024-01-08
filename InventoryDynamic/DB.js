import mongoose from "mongoose";
import "dotenv/config";

 const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, { dbName: "BackendTask" });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};


export default connectDB;




