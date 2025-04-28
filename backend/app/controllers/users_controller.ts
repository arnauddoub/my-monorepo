import type { Response, UserSchema } from '@my-monorepo/types'
import { inject } from '@adonisjs/core'
import UserService from '#services/user_service'

@inject()
export default class UsersController {
  userService: UserService

  constructor(userService: UserService) {
    this.userService = userService
  }

  async index(): Response<UserSchema['index']> {
    return await this.userService.getAllUsers()
  }
}
