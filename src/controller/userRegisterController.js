import bcrypt from "bcrypt";
import userModel from "../Models/user.model.js";
import { createTransport } from "nodemailer";
import mailTemplate from "../template/mailTemplate.js";

// create user
const userRegister = async (req, res) => {
  const { name, email, password } = req.body;

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

  // validation
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (existUser) {
    return res.status(400).json({ message: "This user already exist" });
  } else {
    // password hash
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, salt);

    const user = await userModel.create({ name, email, password: hashPass });
    transport.sendMail({
      from: `<Blinkit>`,
      to: email,
      subject: "Blinkit Ecommrce App",
      html: mailTemplate({ name, email }),
    });
    return res.status(202).json({ message: user });
  }
};

// get all user
export const getAllUser = async (req, res) => {
  const allUser = await userModel.find();

  return res.status(200).json({ messag: allUser });
};

export default userRegister;
