import { UserRepository } from "./../repositories/userRepository";
import { Request } from "express";
import { hashSync } from "bcrypt";
import { User } from "@prisma/client";
import { ConflictError, UnauthorizedError } from "../helpers/customError";
import { isNil } from "lodash";
import { comparePassword } from "../helpers/commonHelpers";

export class UserService {
  private userRepository: UserRepository;
  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(req: Request): Promise<User> {
    const { email, name, password } = req.body;
    const existingUser = await this.userRepository.findOneWithEmail(email);
    if (existingUser) {
      throw new ConflictError("User With this email already exists");
    }
    const hashedPassword = hashSync(password, 10);
    const user = await this.userRepository.createUser({
      name,
      email,
      password: hashedPassword,
    });
    return user;
  }

  async userSignup(req: Request) {
    const { email, password } = req.body;
    const user = await this.userRepository.findOneWithEmail(email);
    if (isNil(user)) {
      throw new UnauthorizedError("Incorrect email or password");
    }
    if (user?.password && !comparePassword(password, user.password)) {
      throw new UnauthorizedError("Incorrect email or password");
    }
  }
}
