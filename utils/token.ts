import jwt from "jsonwebtoken";
import type ms from "ms";

export const createToken = (id: string, duration: ms.StringValue) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn: duration,
  });

  return token;
};

export const verifyToken = (token: string) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

  if (!decoded) return false;

  return decoded;
};
