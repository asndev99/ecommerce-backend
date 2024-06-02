import { compareSync } from "bcrypt";

export const comparePassword = (
  password: string,
  dbPassword: string | null
): Boolean => {
  if (!dbPassword) {
    return false;
  }
  return compareSync(password, dbPassword);
};
