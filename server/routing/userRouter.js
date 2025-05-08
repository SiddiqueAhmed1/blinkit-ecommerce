import express from "express";
import userRegister, {
  avatarUpload,
  getAllUser,
  userLogin,
  userLogout,
  verifyEmail,
} from "../controller/userRegisterController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import upload from "../middleware/multer.js";

// create router
const userRouter = express.Router();

userRouter.post("/register", userRegister);
userRouter.post("/verify-email", verifyEmail);
userRouter.post("/login", userLogin);
userRouter.get("/register", getAllUser);
userRouter.get("/logout", authMiddleware, userLogout);
userRouter.post("/avatar", authMiddleware, upload, avatarUpload);

export default userRouter;
