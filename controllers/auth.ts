import type ms from "ms";
import { asyncHandler } from "../middlewares/async";
import { User } from "../models/User";
import { ErrorResponse } from "../utils/errorResponse";
import { checkPassword, hashPassword } from "../utils/password";
import { createToken } from "../utils/token";
import type { Response } from "express";
import { token } from "morgan";

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
    .cookie("refreshToken", refreshToken)
    .json({ success: true, accessToken, user });
};
