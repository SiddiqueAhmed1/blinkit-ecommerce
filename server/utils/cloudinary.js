import cloudinary from "cloudinary";
import streamifier from "streamifier";

// Cloudinary configuration
cloudinary.v2.config({
  cloud_name: "do1tgpmcr",
  api_key: "945322258616318",
  api_secret: "Do_a3txVrhfYmwd4Eho6IJGRpw4",
});

// Function to upload file to Cloudinary
export const fileUploadCloudinary = (image, folder) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.v2.uploader.upload_stream(
      { folder: folder },
      (error, result) => {
        if (error) {
          reject(error); // Reject the promise if there's an error
        } else {
          resolve(result); // Resolve the promise with the result
        }
      }
    );

    // Convert buffer to stream and pipe it to Cloudinary
    try {
      streamifier.createReadStream(image.buffer).pipe(uploadStream);
    } catch (streamError) {
      console.error("Error while piping file to Cloudinary:", streamError);
      reject(streamError);
    }
  });
};
