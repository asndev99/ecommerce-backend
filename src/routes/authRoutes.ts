import { Router } from "express";
const authRoutes: Router = Router();
import { UserController } from "../controllers/userController";
const userController = new UserController();

authRoutes.post("/login", (req, res, next) =>
  userController.createUser(req, res, next)
);

export default authRoutes;
