import { fileUploadCloudinary } from "../utils/cloudinary.js";

const uploadImageController = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({
        message: "File not uploaded yet",
        success: false,
        error: true,
      });
    }

    const uploadCloud = await fileUploadCloudinary(file, "image");

    const imageUrl = uploadCloud?.secure_url;

    if (!imageUrl) {
      return res.status(500).json({
        message: "File not uploaded in cloud",
        success: false,
        error: true,
      });
    }
    return res.status(200).json({
      message: "Image upload successful",
      success: true,
      error: false,
      image: imageUrl,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      success: false,
      error: true,
    });
  }
};

export default uploadImageController;
