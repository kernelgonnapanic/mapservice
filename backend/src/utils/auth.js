import jwt from 'jsonwebtoken'
import { config } from '../config'
import { User } from '../resources/user/user.model'

export const newToken = user => {
	return jwt.sign({ id: user.id }, config.secrets.jwt, {
		expiresIn: config.secrets.jwtExp,
	})
}

export const verifyToken = token =>
	new Promise((resolve, reject) => {
		jwt.verify(token, config.secrets.jwt, (err, payload) => {
			if (err) return reject(err)
			resolve(payload)
		})
	})

export const signup = async (req, res) => {
	if (!req.body.email || !req.body.password || !req.body.login) {
		return res.status(400).send({
			error: 'Invalid data',
		})
	}

	try {
		const user = await User.create(req.body)
		const token = newToken(user)
		return res.status(201).send({ token, user })
	} catch (error) {
		return res.status(404).send({
			error: 'User already exsists or you put invalid data',
		})
	}
}

export const signin = async (req, res) => {
	if (!req.body.password || !req.body.login) {
		return res.status(401).send({
			error: 'Invalid data',
		})
	}

	const user = await User.findOne({ login: req.body.login }).exec()

	if (!user) {
		return res.status(401).send({
			error: 'Users does not exist in database',
		})
	}

	try {
		const match = await user.checkPassword(req.body.password)
		if (!match) {
			return res.status(401).send({ error: 'Not auth' })
		}

		const token = newToken(user)

		return res.status(201).send({ token, user })
	} catch (error) {
		return res.status(400).end()
	}
}

export const protect = async (req, res, next) => {
	if (!req.headers.authorization) {
		return res.status(400).send({
			message: 'No token',
		})
	}

	let token = req.headers.authorization.split('Bearer ')[1]

	if (!token) {
		return res.status(400).end()
	}

	//FIX VERIFY TOKEN
	try {
		const payload = await verifyToken(token)

		const user = await User.findById(payload.id)
			.select('-password')
			.lean()
			.exec()

		req.user = user

		next()
	} catch (err) {
		return res.status(400).end()
	}
}
