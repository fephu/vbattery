import type { NextFunction, Request, Response } from "express";
import { ErrorResponse } from "../utils/errorResponse";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let error = { ...err };

  error.message = err.message;

  console.error(err);

  if (err.name === "CastError") {
    const message = "Resource not found";
    error = new ErrorResponse(message, 404);
  }

  if (err.code === 11000) {
    const message = "Duplicate field value entered";
    error = new ErrorResponse(message, 400);
  }

  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((val: any) => val.message);
    error = new ErrorResponse(messages.join(", "), 400);
  }

  res.status(error.statusCode || 500).json({
    error: error.message || "Server Error",
  });
};
