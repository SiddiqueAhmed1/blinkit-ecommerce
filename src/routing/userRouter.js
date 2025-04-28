import express from "express";
import userRegister, {
  getAllUser,
} from "../controller/userRegisterController.js";

// create router
const router = express.Router();

router.post("/register", userRegister);
router.get("/register", getAllUser);

export default router;
