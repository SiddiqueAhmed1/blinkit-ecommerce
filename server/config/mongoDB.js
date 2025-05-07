import color from "colors";
import mongoose from "mongoose";

const mongoDb = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://siddiqueahmed2721:GUvuDkSYSykLT212@mern-stack-cluster.iofoqcy.mongodb.net/blinkit"
    );
    console.log(`mongodb connection done`.bgGreen.black);
  } catch (error) {
    console.log("mongodb connection failed".bgRed.black);
    error.message;
  }
};

export default mongoDb;
