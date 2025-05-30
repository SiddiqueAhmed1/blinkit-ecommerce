import express from "express";
import dotenv from "dotenv";
import color from "colors";
import mongoDb from "../server/config/mongoDB.js";
import userRouter from "./routing/userRouter.js";
import cookieParser from "cookie-parser";

// dotenv config
dotenv.config();

// init app
const app = express();

// app middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const port = process.env.PORT;

// app router
app.use("/api", userRouter);

// server listen
app.listen(port, () => {
  mongoDb();
  console.log(`server is running on port 5050`.bgMagenta.black);
});
