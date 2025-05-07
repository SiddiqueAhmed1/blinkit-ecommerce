import mongoose from "mongoose";

// create addres schemas
const addresSchema = mongoose.Schema(
  {
    address_line: {
      type: String,
      default: "",
    },
    city: {
      type: String,
      default: "",
    },
    state: {
      type: String,
      default: "",
    },
    pincode: {
      type: String,
      default: "",
    },
    country: {
      type: String,
      default: "",
    },
    mobile: {
      type: Number,
      default: null,
    },
    deliver_status: {
      type: Boolean,
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Address", addresSchema);
