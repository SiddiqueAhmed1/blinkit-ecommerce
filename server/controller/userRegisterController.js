import bcrypt from "bcrypt";
import userModel from "../Models/user.model.js";
import { createTransport } from "nodemailer";
import mailTemplate from "../template/mailTemplate.js";
import { generateAccessToken } from "../utils/generateAccessToken.js";
import { generateRefreshToken } from "../utils/generateRefereshToken.js";
import { fileUploadCloudinary } from "../utils/cloudinary.js";

// create user
const userRegister = async (req, res) => {
  const { name, email, password } = req.body;

  // validation
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const transport = createTransport({
    port: process.env.MAIL_PORT,
    host: process.env.MAIL_HOST,
    auth: {
      user: process.env.MAIL_ADDRESS,
      pass: process.env.MAIL_PASS,
    },
  });

  // find existing user
  const existUser = await userModel.findOne({ email });

  if (existUser) {
    return res.status(400).json({ message: "This user already exist" });
  } else {
    // password hash
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, salt);

    // user create
    const user = await userModel.create({ name, email, password: hashPass });

    // verify email link
    const verifyEmailUrl = `${process.env.FRONT_END}/verify_email?code=${user?._id}`;

    // email send nodemailer
    transport.sendMail({
      from: `<Blinkit>`,
      to: email,
      subject: "Blinkit Ecommrce App",
      html: mailTemplate({ name, email, verifyEmailUrl: verifyEmailUrl }),
    });

    return res.status(202).json({ message: user });
  }
};

// user login
export const userLogin = async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Check if user exists
    const userExist = await userModel.findOne({ email: email });
    if (!userExist) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    // Validate password
    const checkPass = await bcrypt.compare(password, userExist.password);
    if (!checkPass) {
      return res.status(400).json({ message: "Password is incorrect" });
    }

    // Generate tokens
    const accessToken = await generateAccessToken(userExist._id);
    const refreshToken = await generateRefreshToken(userExist._id);

    // Set cookies
    const coockieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "None",
    };

    res.cookie("accessToken", accessToken, coockieOptions);
    res.cookie("refreshToken", refreshToken, coockieOptions);

    // Send success response
    res.status(200).json({
      message: "User logged in successfully",
      data: {
        accessToken,
        refreshToken,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message, error });
  }
};

// user logout
export const userLogout = async (req, res) => {
  try {
    const userId = req.user.id;

    const coockieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "None",
    };

    res.clearCookie("accessToken", coockieOptions);
    res.clearCookie("refreshToken", coockieOptions);

    const removeRefreshToken = await userModel.findByIdAndUpdate(userId, {
      refresh_token: "",
    });

    res.status(200).json({
      message: "User logged out successfully",
      data: removeRefreshToken,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message, error });
  }
};

// verify email controller
export const verifyEmail = async (req, res) => {
  const { code } = req.body;

  const user = await userModel.findOne({ _id: code });

  if (!user) {
    res.status(400).json({ message: "user not created" });
  } else {
    const updateUser = await userModel.updateOne(
      { _id: code },
      {
        verify_email: true,
      }
    );
    res.status(200).json({ message: updateUser });
  }
};

// get all user
export const getAllUser = async (req, res) => {
  const allUser = await userModel.find();

  return res.status(200).json({ message: allUser });
};

export const avatarUpload = async (req, res) => {
  try {
    const userFile = req.file;
    const userId = req.user.id;

    if (!userFile) {
      return res.status(400).json({ message: "file not uploaded" });
    }

    const upload = await fileUploadCloudinary(userFile.path);

    const avatarUrl = upload?.secure_url;

    const user = await userModel.findByIdAndUpdate(
      userId,
      { avatar: avatarUrl },
      { new: true }
    );
    res
      .status(200)
      .json({ message: "avatar uploaded successfully", data: user });
  } catch (error) {
    return res.status(500).json({ message: error.message, error });
  }
};

export default userRegister;
