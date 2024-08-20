export type User = {
  id: number;
  name: string;
  email: string;
  role?: Roles;
};

export enum Roles {
  Admin = "ADMIN",
  User = "USER",
}
