import { ErrorResponse } from "../utils/errorResponse";
import { asyncHandler } from "./async";
import jwt from "jsonwebtoken";

export const protectedRoute = asyncHandler(async (req, res, next) => {
  let accessToken;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    accessToken = req.headers.authorization.split(" ")[1];
  }

  if (!accessToken) {
    return next(new ErrorResponse("Not authorize to access this route", 401));
  }

  try {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error("JWT_SECRET is not defined in environment variables");
    }

    const decoded = jwt.verify(accessToken, secret);

    next();
  } catch (error) {
    return next(new ErrorResponse("Not authorize to access this route", 401));
  }
});
