import express from "express";
import dotenv from "dotenv";
import mongoDb from "../server/config/mongoDB.js";
import userRouter from "./routing/userRouter.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import uploadImageRouter from "./routing/uploadImageRouter.js";

// dotenv config
dotenv.config();

// init app
const app = express();

// app middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

const port = process.env.PORT;

// app router
app.use("/api/v1", userRouter);
app.use("/uploads", uploadImageRouter);

// server listen
app.listen(port, () => {
  mongoDb();
  console.log(`server is running on port 5050`.bgMagenta.black);
});
