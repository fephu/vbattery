import jwt from "jsonwebtoken";
import type ms from "ms";

export const createToken = (id: number, duration: ms.StringValue) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }

  const token = jwt.sign({ id }, secret, {
    expiresIn: duration,
  });

  return token;
};
