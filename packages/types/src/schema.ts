import type { User } from "./user.js"
import { CreateUser } from "@my-monorepo/validators";

export type Response<T extends (...args: any) => any> = Promise<ReturnType<T>>;
export type Parameter<T> = T extends (arg: infer A, ...args: any[]) => any ? A : never

export interface UsersSchema {
  index: () => User[]
  show: () => User
  store: (validator: CreateUser) => User
}