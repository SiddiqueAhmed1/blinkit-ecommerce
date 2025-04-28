import express from "express";
import dotenv from "dotenv";
import color from "colors";
import mongoDb from "./src/config/mongoDB.js";
import userRouter from "./src/routing/userRouter.js";

// dotenv config
dotenv.config();

// init app
const app = express();

// app middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT;

// app router
app.use(userRouter);

// server listen
app.listen(port, () => {
  mongoDb();
  console.log(`server is running on port 5050`.bgMagenta.black);
});
