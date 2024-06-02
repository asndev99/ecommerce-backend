import { User } from "@prisma/client";

export interface IUserRepository {
  createUser(user: Omit<User, "id">): Promise<User>;
  findOneWithEmail(email: string): Promise<User | null>;
}
