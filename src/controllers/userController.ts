import { NextFunction, Request, Response } from "express";
import * as responseHandler from "../helpers/responseHandler";
import { UserService } from "../services/userService";

export class UserController {
  private userService: UserService = new UserService();

  async userSignup(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await this.userService.userSignup(req);
      return responseHandler.responseWithData(
        res,
        user,
        "Account created successfully"
      );
    } catch (error) {
      responseHandler.handleError(res, error);
    }
  }

  async userSignIn(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await this.userService.userSignIn(req);
      return responseHandler.responseWithData(
        res,
        user,
        "logged in successfully"
      );
    } catch (error) {
      responseHandler.handleError(res, error);
    }
  }
}
