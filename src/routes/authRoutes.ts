import { Router } from "express";
const authRoutes: Router = Router();
import { UserController } from "../controllers/userController";
import validateSchema from "../middlewares/validateSchema";
import { signupSchema } from "../schema/userSchema";
const userController = new UserController();

authRoutes.post("/signup", validateSchema(signupSchema), (req, res, next) =>
  userController.userSignup(req, res, next)
);

authRoutes.post("/signin", (req, res, next) =>
  userController.userSignIn(req, res, next)
);

export default authRoutes;
