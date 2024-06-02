import { Router } from "express";
import authRoutes from "./routes/authRoutes";

const rootRouter: Router = Router();

rootRouter.use("/auth", authRoutes);

export default rootRouter;
