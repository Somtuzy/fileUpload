import { Request, Response, NextFunction } from "express";
import { logger, sendResponse } from "../utils/index.util";

export default (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(error.message);
  console.log(error.stack);
  return sendResponse(res, 500, false, error.message);
};