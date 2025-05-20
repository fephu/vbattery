import type ms from "ms";
import { asyncHandler } from "../middlewares/async";
import { User } from "../models/User";
import { ErrorResponse } from "../utils/errorResponse";
import { checkPassword, hashPassword } from "../utils/password";
import { createToken, verifyToken } from "../utils/token";
import type { Response } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";
import type { MyJwtPayload } from "../middlewares/auth";

export const register = asyncHandler(async (req, res, next) => {
  const { fullName, email, password } = req.body;

  const hashedPassword = await hashPassword(password);

  const user = await User.create({
    fullName,
    email,
    password: hashedPassword,
  });

  res.status(200).json({ success: true, user });
});

interface userResponse {
  id: string;
  fullName: string;
  email: string;
}

export const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorResponse("Invalid credential", 401));
  }

  const isMatch = await checkPassword(password, user.password);
  if (!isMatch) {
    return next(new ErrorResponse("Invalid credential", 401));
  }

  const accessToken = createToken(
    user.id,
    process.env.ACCESS_TOKEN_DURATION as ms.StringValue
  );

  const userRe: userResponse = {
    id: user.id,
    email: user.email,
    fullName: user.fullName,
  };

  sendTokenResponse(userRe, 200, res, accessToken);
});

export const renewAccessToken = asyncHandler(async (req, res, next) => {
  const { refreshToken } = req.cookies;

  if (!refreshToken) {
    return next(new ErrorResponse("No token provided", 401));
  }

  const decoded = jwt.verify(
    refreshToken,
    process.env.JWT_SECRET as string
  ) as MyJwtPayload;

  if (!decoded) {
    return next(new ErrorResponse("Fail token", 404));
  }

  const accessToken = createToken(
    decoded.id,
    process.env.ACCESS_TOKEN_DURATION as ms.StringValue
  );

  res.status(200).json({ accessToken });
});

export const fetchCurrentUser = asyncHandler(async (req, res, next) => {
  const id = req.user?.id;

  const user = await User.findById(id);

  res.status(200).json({ user });
});

const sendTokenResponse = (
  user: any,
  statusCode: number,
  res: Response,
  accessToken: string
) => {
  const refreshToken = createToken(
    user.id,
    process.env.REFRESH_TOKEN_DURATION as ms.StringValue
  );

  res
    .status(statusCode)
    .cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      path: "/",
    })
    .json({ accessToken, user });
};
