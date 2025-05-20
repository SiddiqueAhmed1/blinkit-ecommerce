import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import upload from "../middleware/multer.js";
import userRegister, {
  avatarUpload,
  getAllUser,
  userLogin,
  userLogout,
  verifyEmail,
} from "../controller/userRegisterController.js";

// create router
const userRouter = express.Router();

userRouter.post("/register", userRegister);
userRouter.post("/verify-email", verifyEmail);
userRouter.post("/login", userLogin);
userRouter.get("/register", getAllUser);
userRouter.get("/logout", authMiddleware, userLogout);
userRouter.put("/avatar", authMiddleware, upload, avatarUpload);
export default userRouter;
