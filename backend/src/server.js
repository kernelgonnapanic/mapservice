import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { connect } from './utils/db'
import { config } from './config'
import placesRouter from './resources/places/places.router'
import userRouter from './resources/user/user.router'
import { catchErrors, notFound } from './middleware/errors'
import { protect, signup, signin } from './utils/auth'

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
app.use('/users', userRouter)

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
