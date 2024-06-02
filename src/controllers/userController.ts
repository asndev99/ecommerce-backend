import { NextFunction, Request, Response } from "express";
import * as responseHandler from "../helpers/responseHandler";
import { UserService } from "../services/userService";

export class UserController {
  private userService: UserService = new UserService();

  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await this.userService.createUser(req);
      return responseHandler.responseWithData(
        res,
        user,
        "Account created successfully"
      );
    } catch (error) {
      responseHandler.handleError(res, error);
    }
  }

  async userSignup(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {
      responseHandler.handleError(res, error);
    }
  }
}
