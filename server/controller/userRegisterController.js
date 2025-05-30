import bcrypt from "bcrypt";
import userModel from "../Models/user.model.js";
import { createTransport } from "nodemailer";
import mailTemplate from "../template/mailTemplate.js";
import { generateAccessToken } from "../utils/generateAccessToken.js";
import { generateRefreshToken } from "../utils/generateRefereshToken.js";
import { fileUploadCloudinary } from "../utils/cloudinary.js";
import { otpTemplate } from "../template/otpTemplate.js";
import generateOtp from "../utils/generateOtp.js";

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

// avatar upload
export const avatarUpload = async (req, res) => {
  try {
    const userFile = req.file;
    const userId = req.user.id;

    if (!userFile) {
      return res.status(400).json({ message: "File not uploaded" });
    }

    // Upload file to Cloudinary
    const uploadFile = await fileUploadCloudinary(userFile, "avatar");

    const avatarUrl = uploadFile?.secure_url;

    if (!avatarUrl) {
      return res
        .status(400)
        .json({ message: "Failed to upload file to Cloudinary" });
    }

    // Update user avatar in the database

    const user = await userModel.findByIdAndUpdate(
      userId,
      { avatar: avatarUrl },
      { new: true }
    );

    if (!user) {
      console.log("User not found.");
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "User avatar uploaded successfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

// update user details with login
export const updateUserDetails = async (req, res) => {
  const { name, email, mobile, password } = req.body;
  const user = req.user;

  //validation
  if (!name || !email || !mobile || !password) {
    return res.status(404).json({
      message: "All fields are required",
      success: false,
      error: true,
    });
  }

  const existUser = await userModel.findById({ _id: user.id });

  if (!existUser) {
    return res.status(400).json({ message: "Email is wrong" });
  }

  // check email
  if (existUser.email === email) {
    return res.status(400).json({ message: "email already exist" });
  }

  // password hash
  const hashPass = await bcrypt.hash(password, 10);

  const updateUser = await userModel.findByIdAndUpdate(
    user.id,
    {
      ...(name && { name }),
      ...(email && { email }),
      ...(mobile && { mobile }),
      ...(password && { password: hashPass }),
    },
    { new: true }
  );

  if (!updateUser) {
    return res.status(400).json({ message: "update not done" });
  }

  res
    .status(200)
    .json({ message: "Data updated succesfully", data: updateUser });
};

// forgot password
export const forgotPasswordOtp = async (req, res) => {
  try {
    const { email } = req.body;

    /// validation
    if (!email) {
      return res.status(400).json({ message: "email is required" });
    }

    // find email in database
    const existEmail = await userModel.findOne({ email });

    if (!existEmail) {
      return res.status(400).json({ message: "Email not matched" });
    }

    // create transport
    const transport = createTransport({
      port: process.env.MAIL_PORT,
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_ADDRESS,
        pass: process.env.MAIL_PASS,
      },
    });

    const otp = generateOtp();
    const expiryTime = Date.now() + 60 * 60 * 1000; // 1hr

    // email send nodemailer
    transport.sendMail({
      from: `<Blinkit>`,
      to: email,
      subject: "Forgot Password OTP",
      html: otpTemplate(existEmail.name, otp),
    });

    // update otp to database
    const updateOtp = await userModel.findByIdAndUpdate(
      existEmail._id,
      {
        forgot_password_otp: otp,
        forgot_password_expiry: expiryTime,
      },
      { new: true }
    );

    res.status(200).json({ message: "OTP send successfully", data: updateOtp });
  } catch (error) {
    return res.status(400).json({ message: error.message, error });
  }
};

// verify forgot password otp
export const verifyForgotPasswordOtp = async (req, res) => {
  const { email, otp } = req.body;

  /// validation
  if (!email || !otp) {
    return res.status(400).json({ message: "email & otp required" });
  }

  // email exist or not
  const existEmail = await userModel.findOne({ email });
  if (!existEmail) {
    return res
      .status(400)
      .json({ message: "Email address wrong", success: false, error: true });
  }

  // otp expiry check
  const currentTime = new Date();

  if (existEmail.forgot_password_expiry < currentTime) {
    return res
      .status(400)
      .json({ message: "OTP has expired", success: false, error: true });
  }

  /// check otp validation
  if (otp !== existEmail.forgot_password_otp) {
    return res.status(400).json({ message: "OTP is wrong", success: false });
  }

  // If matched, go forward
  return res.status(200).json({ message: "OTP is correct", success: true });
};

export default userRegister;
