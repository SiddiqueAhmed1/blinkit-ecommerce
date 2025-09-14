import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import addCategoryController from "../controller/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.post("/add-category", authMiddleware, addCategoryController);

export default categoryRouter;
