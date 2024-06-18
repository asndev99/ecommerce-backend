import { Router } from "express";
const authRoutes: Router = Router();
import { UserController } from "../controllers/userController";
const userController = new UserController();

authRoutes.post("/signup", (req, res, next) =>
  userController.userSignup(req, res, next)
);

authRoutes.post("/signin", (req, res, next) =>
  userController.userSignIn(req, res, next)
);

export default authRoutes;
