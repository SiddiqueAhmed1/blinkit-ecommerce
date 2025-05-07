import express from "express";
import userRegister, {
  getAllUser,
  userLogin,
  userLogout,
  verifyEmail,
} from "../controller/userRegisterController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

// create router
const userRouter = express.Router();

userRouter.post("/register", userRegister);
userRouter.post("/verify-email", verifyEmail);
userRouter.post("/login", userLogin);
userRouter.get("/register", getAllUser);
userRouter.get("/logout", authMiddleware, userLogout);

export default userRouter;
