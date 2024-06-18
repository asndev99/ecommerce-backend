import { Prisma, PrismaClient, User } from "@prisma/client";
import { IUserRepository } from "./IUserRepository";
import { prismaClient } from "../server";

interface CreateUserInput {
  name: string;
  email: string;
  password: string;
}

export class UserRepository implements IUserRepository {
  async createUser(user: CreateUserInput): Promise<User> {
    return prismaClient.user.create({
      data: user,
    });
  }

  async findOneWithEmail(
    email: string,
    select: Prisma.UserSelect
  ): Promise<User | null> {
    return prismaClient.user.findFirst({
      where: {
        email,
      },
      select,
    });
  }
}
