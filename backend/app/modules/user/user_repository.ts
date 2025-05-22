import type { CreateUser } from '@my-monorepo/validators'
import User from '#user/user_model'

export default class UserRepository {
  async getAllUsers() {
    return await User.all()
  }

  async getUserById(id: string) {
    return await User.findOrFail(id)
  }

  async createUser(user: CreateUser) {
    return await User.create(user)
  }
}
