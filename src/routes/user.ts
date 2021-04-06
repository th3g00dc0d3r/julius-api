import { Router } from 'express'

import { UserController } from '../controllers/userController'
import { User } from '../entity/User'

export const userRouter = Router()
const userCtrl = new UserController()

userRouter.post('/', async (req, res) => {
  const { firstName, lastName, age, email } = req.body
  const user = new User(firstName, lastName, age, email)
  const savedUser = await userCtrl.save(user)
  res.json(savedUser)
})

userRouter.get('/', async (req, res) => {
  const users = await userCtrl.listAllUsers()
  res.json(users)
})

userRouter.get('/entries/:userId', async (req, res) => {
  const userId = parseInt(req.params.userId)
  const entries = await userCtrl.retrieveUserEntries(userId)
  res.json(entries)
})
