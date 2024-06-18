import express, { Express, Request, Response, NextFunction } from "express";
import { PORT } from "./secrets";
import rootRouter from "./api";
import { PrismaClient } from "@prisma/client";
const app: Express = express();

app.use(express.json());
app.use("/api", rootRouter);

//global prisma instance
export const prismaClient = new PrismaClient({
  log: ["query"],
});
//global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) =>
  res.status(500).json({
    message: "Internal server error",
  })
);

app.listen(PORT, () => {
  console.log(`server is running at PORT ${PORT}`);
});
