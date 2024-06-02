import { PrismaClient, User } from "@prisma/client";
import { IUserRepository } from "./IUserRepository";

const prisma = new PrismaClient();

interface CreateUserInput {
  name: string;
  email: string;
  password: string;
}

export class UserRepository implements IUserRepository {
  async createUser(user: CreateUserInput): Promise<User> {
    return prisma.user.create({
      data: user,
    });
  }

  async findOneWithEmail(email: string): Promise<User | null> {
    return prisma.user.findFirst({
      where: {
        email,
      },
    });
  }
}
