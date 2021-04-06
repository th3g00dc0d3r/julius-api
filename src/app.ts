import * as cors from 'cors'
import * as express from 'express'
import * as morgan from 'morgan'

import { connectServerToDB } from './config/db'
import { entryRouter } from './routes/entry'
import { userRouter } from './routes/user'

export const app = express()

app.use(cors())

app.use(express.json())

app.use(morgan('dev'))

connectServerToDB()

app.use('/user', userRouter)

app.use('/entry', entryRouter)

app.use('/', (req, res) => res.send('Julius API at PORT: 3000'))
