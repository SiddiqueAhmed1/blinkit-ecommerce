import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import addCategoryController, {
  getCategoryController,
} from "../controller/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.post("/add-category", authMiddleware, addCategoryController);
categoryRouter.get("/get-category", getCategoryController);

export default categoryRouter;
