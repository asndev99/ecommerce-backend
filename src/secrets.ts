import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 5000;
export const JWT_SECRET = process.env.ACCESS_KEY_SECRET!;
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;
