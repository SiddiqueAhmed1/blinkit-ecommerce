import colors from "colors"; // should be 'colors', not 'color'
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB connection successful".bgGreen.black);
  } catch (error) {
    console.log("MongoDB connection failed".bgRed.black);
    console.error(error.message.red);
  }
};

export default mongoDb;
