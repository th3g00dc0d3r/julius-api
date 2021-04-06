import { getManager } from 'typeorm'

import { Entry } from '../entity/Entry'
import { User } from '../entity/User'

export class UserController {
  async save(user: User): Promise<User> {
    const savedUser = await getManager().save(user)
    return savedUser
  }

  async listAllUsers(): Promise<User[]> {
    const users = await getManager().find(User)
    return users
  }

  async retrieveUserById(id: number): Promise<User> {
    const user = await getManager().findOne(User, id)

    return user
  }

  async retrieveUserEntries(id: number): Promise<Entry[]> {
    const user = await getManager().findOne(User, id, {
      relations: ['entries'],
    })

    return user.entries
  }
}
