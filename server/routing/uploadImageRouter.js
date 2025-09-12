import express from "express";
import uploadImageController from "../controller/uploadController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import upload from "../middleware/multer.js";

const uploadImageRouter = express.Router();

uploadImageRouter.post(
  "/upload-img",
  authMiddleware,
  upload.single("image"),
  uploadImageController
);

export default uploadImageRouter;
