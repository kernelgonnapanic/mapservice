import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import { config } from './config'
import { catchErrors, notFound } from './middleware/errors'
import placesRouter from './resources/places/places.router'
import userRouter from './resources/user/user.router'
import { signin, signup } from './utils/auth'
import { connect } from './utils/db'
import { protect } from './utils/auth'

require('dotenv').config()
mongoose.set('useFindAndModify', false)

const app = express()

app.disable('x-powered-by')
app.use(cors())
app.use(express.json())
app.use('/uploads', express.static('uploads'))

app.post('/signup', signup)
app.post('/signin', signin)

app.use('/', placesRouter)
app.use('/auth', protect, userRouter)

app.use(notFound)
app.use(catchErrors)

export const start = async () => {
	try {
		await connect()
		app.listen(config.port, (req, res) => {
			console.log(`Server running at ${config.port}`)
		})
	} catch (e) {
		console.log(e)
	}
}
