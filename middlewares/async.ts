import type { NextFunction, Request, RequestHandler, Response } from "express";

export interface RequestWithContext extends Request {
  user?: {
    id: string;
    role: string;
  };
}

export const asyncHandler =
  (
    fn: (
      req: RequestWithContext,
      res: Response,
      next: NextFunction
    ) => Promise<any>
  ): RequestHandler =>
  (req, res, next) =>
    Promise.resolve(fn(req, res, next)).catch(next);
