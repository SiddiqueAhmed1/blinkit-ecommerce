import express from "express";
import dotenv from "dotenv";
import mongoDb from "../server/config/mongoDB.js";
import userRouter from "./routing/userRouter.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import uploadImageRouter from "./routing/uploadImageRouter.js";
import categoryRouter from "./routing/categoryRouter.js";

// dotenv config
dotenv.config();

// init app
const app = express();

// app middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://blinkit-ecommerce-application.vercel.app",
    ],
    credentials: true,
  }),
);

const port = process.env.PORT;

// app router
app.use("/api/v1", userRouter);
app.use("/uploads", uploadImageRouter);
app.use("/category", categoryRouter);

// server listen
app.listen(port, () => {
  mongoDb();
  console.log(`server is running on port 5050`.bgMagenta.black);
});
