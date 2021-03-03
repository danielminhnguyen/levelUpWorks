import jwt from "jsonwebtoken";

export const generateToken = (user) =>
  jwt.sign(
    {
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET || "mysecretcode",
    {
      expiresIn: "30d",
    }
  );

export const converToNumArray = (arr) => arr.map((x) => +x);
