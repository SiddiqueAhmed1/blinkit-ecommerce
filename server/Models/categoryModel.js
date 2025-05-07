import mongoose from "mongoose";

// create category schema
const categoryModel = mongoose.Schema(
  {
    name: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Category", categoryModel);
