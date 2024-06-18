import { z } from "zod";

export const signupSchema = z.object({
  name: z.string({ message: "name is required" }),
  email: z
    .string({ message: "email is required" })
    .email({ message: "please enter valid email" }),
  password: z
    .string({ message: "password must consist of characters" })
    .min(8, { message: "password must be atleast 8 characters long" }),
});
