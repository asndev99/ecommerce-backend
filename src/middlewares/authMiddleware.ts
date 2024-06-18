import * as jwt from "jsonwebtoken";
import { UnauthorizedError } from "../helpers/customError";
import { NextFunction, Request } from "express";
import { JWT_SECRET } from "../secrets";
import { prismaClient } from "../server";

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split("Bearer ")[1];
    if (!token) {
      throw new UnauthorizedError("Please login to continue");
    }
    const payload: any = jwt.verify(token, JWT_SECRET);
    const user = await prismaClient.user.findFirst({
      where: {
        id: payload.userId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (!user) {
      throw new UnauthorizedError("Please login to continue");
    }
    req.user = user;
    next();
  } catch (err) {
    if (err instanceof jwt.JsonWebTokenError) {
      throw new UnauthorizedError("Please login to continue");
    } else {
      next(err);
    }
  }
};

export default authMiddleware;
