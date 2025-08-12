import jwt from "jsonwebtoken";

export const authMiddleware = async (req, res, next) => {
  try {
    const token =
      req.cookies.accessToken || req?.headers?.authorization?.split(" ")[1];

    if (!token) {
      return res.status(400).json({ message: "Provide Token" });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    if (!decoded) {
      return res.status(400).json({ message: "Unathorized" });
    }

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(500).json({ message: error.message, error });
  }
};
