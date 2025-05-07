import mongoose from "mongoose";

// create subCategory schemas
const subCategoryModel = mongoose.Schema(
  {
    name: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    category: [
      {
        type: mongoose.Schema.ObjectId,
        default: "",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Subcategory", subCategoryModel);
