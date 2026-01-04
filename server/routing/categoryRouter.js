import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import addCategoryController, {
  deleteCategoryController,
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
categoryRouter.delete(
  "/delete-category/:id",
  authMiddleware,
  deleteCategoryController
);

export default categoryRouter;
