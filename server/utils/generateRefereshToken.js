import jwt from "jsonwebtoken";
import userModel from "../Models/user.model.js";

export const generateRefreshToken = async (userId) => {
  const refreshToken = jwt.sign({ id: userId }, process.env.SECRET_KEY, {
    expiresIn: "7d",
  });

  const updateToken = await userModel.updateOne(
    { _id: userId },
    {
      refresh_token: refreshToken,
    }
  );

  return updateToken;
};
