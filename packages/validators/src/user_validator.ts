import { UserRole } from '@my-monorepo/types'
import vine from '@vinejs/vine'
import { Infer } from '@vinejs/vine/types'

export const createUserValidator = vine.compile(
  vine.object({
    fullName: vine.string(),
    email: vine.string().email(),
    password: vine.string().minLength(8),
    role: vine.enum(Object.values(UserRole)),
  })
)

export type CreateUser = Infer<typeof createUserValidator>