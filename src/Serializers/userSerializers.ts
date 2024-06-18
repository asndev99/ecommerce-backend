export class UserSerializers {
  id: any;
  name: string;
  email: string;
  password: string;
  createdAt: any;
  updatedAt: any;
  constructor(
    id: any,
    name: string,
    email: string,
    password: string,
    createdAt: any,
    updatedAt: any
  ) {
    (this.id = id),
      (this.name = name),
      (this.email = email),
      (this.password = password),
      (this.createdAt = createdAt),
      (this.updatedAt = updatedAt);
  }

  excludePassword() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  static fromPlainObject(obj: {
    id: any;
    name: string;
    email: string;
    password: string;
    createdAt: any;
    updatedAt: any;
  }): UserSerializers {
    return new UserSerializers(
      obj.id,
      obj.name,
      obj.email,
      obj.password,
      obj.createdAt,
      obj.updatedAt
    );
  }
}
