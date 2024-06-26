import { NextFunction, Request, Response } from "express";
import * as responseHandler from "../helpers/responseHandler";
import { UserService } from "../services/userService";
import { responseCode } from "../helpers/responseCode";
import { UserSerializers } from "../Serializers/userSerializers";

export class UserController {
  private userService: UserService = new UserService();

  async userSignup(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.userService.userSignup(req);
      const user = UserSerializers.fromPlainObject(data);
      return responseHandler.responseWithData(
        res,
        user.excludePassword(),
        "Account created successfully"
      );
    } catch (error) {
      responseHandler.handleError(res, error);
    }
  }

  async userSignIn(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.userService.userSignIn(req);
      const user = UserSerializers.fromPlainObject(data.user);
      return responseHandler.responseWithData(
        res,
        user.excludePassword(),
        "logged in successfully",
        responseCode.OK,
        data.token
      );
    } catch (error) {
      responseHandler.handleError(res, error);
    }
  }

  whoAmI = async (req: Request, res: Response) => {
    responseHandler.responseWithData(
      res,
      req.user,
      "who am I",
      responseCode.OK
    );
  };
}
