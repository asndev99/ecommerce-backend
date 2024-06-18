import { compareSync } from "bcrypt";
import * as jwt from "jsonwebtoken";
import { JWT_EXPIRES_IN, JWT_SECRET } from "../secrets";

export const comparePassword = (
  password: string,
  dbPassword: string | null
): Boolean => {
  if (!dbPassword) {
    return false;
  }
  return compareSync(password, dbPassword);
};

export const generateToken = (
  payload: any,
  options = { expiresIn: JWT_EXPIRES_IN }
) => {
  return jwt.sign(payload, JWT_SECRET, options);
};
