import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import upload from "../middleware/multer.js";
import userRegister, {
  avatarUpload,
  forgotPasswordOtp,
  getAllUser,
  getUserDetails,
  refreshToken,
  resetPassWord,
  updateUserDetails,
  userLogin,
  userLogout,
  verifyEmail,
  verifyForgotPasswordOtp,
} from "../controller/userRegisterController.js";

// create router
const userRouter = express.Router();

userRouter.post("/register", userRegister);
userRouter.post("/verify-email", verifyEmail);
userRouter.post("/login", userLogin);
userRouter.get("/user", getAllUser);
userRouter.get("/logout", authMiddleware, userLogout);
userRouter.put(
  "/avatar",
  authMiddleware,
  upload.single("avatar"),
  avatarUpload
);
userRouter.put("/update-user-details", authMiddleware, updateUserDetails);
userRouter.put("/forgotPasswordOtp", forgotPasswordOtp);
userRouter.put("/verifyForgotPasswordOtp", verifyForgotPasswordOtp);
userRouter.put("/resetPassword", resetPassWord);
userRouter.post("/refresh-token", refreshToken);
userRouter.get("/user-details", authMiddleware, getUserDetails);
export default userRouter;
