import type { NextFunction, Request, Response } from "express";
import { ErrorResponse } from "../utils/errorResponse";
import { asyncHandler, type RequestWithContext } from "./async";
import jwt, { type JwtPayload } from "jsonwebtoken";
import { User } from "../models/User";

export interface MyJwtPayload extends JwtPayload {
  id: string;
}

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
    const decoded = jwt.verify(
      accessToken,
      process.env.JWT_SECRET as string
    ) as MyJwtPayload;

    const user = await User.findById(decoded.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    req.user = {
      id: user.id,
      role: user.role,
    };

    next();
  } catch (error) {
    return next(new ErrorResponse("Not authorize to access this route", 401));
  }
});

export const authorize = (...roles: string[]) => {
  return (req: RequestWithContext, res: Response, next: NextFunction) => {
    if (!roles.includes(req.user?.role ?? "")) {
      return next(
        new ErrorResponse(
          `User role ${req.user?.role} is not authorized to access this route`,
          403
        )
      );
    }

    next();
  };
};
