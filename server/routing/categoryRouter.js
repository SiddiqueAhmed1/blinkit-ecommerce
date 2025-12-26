import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import addCategoryController, {
  getCategoryController,
  updateCategoryController,
} from "../controller/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.post("/add-category", authMiddleware, addCategoryController);
categoryRouter.get("/get-category", authMiddleware, getCategoryController);
categoryRouter.put(
  "/update-category",
  authMiddleware,
  updateCategoryController
);

export default categoryRouter;
