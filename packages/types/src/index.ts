import { User } from "./user"

export type Response<T extends (...args: any[]) => any> = Promise<ReturnType<T> | void>

export interface UserSchema {
  index: () => User[]
}