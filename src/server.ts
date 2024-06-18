import express, { Express, Request, Response, NextFunction } from "express";
import { PORT } from "./secrets";
import rootRouter from "./api";
import { PrismaClient } from "@prisma/client";
import { errorHandler } from "./middlewares/globalErrorMiddleware";
const app: Express = express();

app.use(express.json());
app.use("/api", rootRouter);

//global prisma instance
export const prismaClient = new PrismaClient({
  log: ["query"],
});
//global error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server is running at PORT ${PORT}`);
});
