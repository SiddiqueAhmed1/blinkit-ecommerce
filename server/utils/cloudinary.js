import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: "do1tgpmcr",
  api_key: "945322258616318",
  api_secret: "Do_a3txVrhfYmwd4Eho6IJGRpw4",
});

export const fileUploadCloudinary = (path) => {
  return cloudinary.v2.uploader.upload(path);
};
