import { Prisma, User } from "@prisma/client";

export interface IUserRepository {
  createUser(user: Omit<User, "id">): Promise<User>;
  findOneWithEmail(
    email: string,
    select: Prisma.UserSelect | null
  ): Promise<User | null>;
}
