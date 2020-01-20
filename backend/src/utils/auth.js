import jwt from 'jsonwebtoken'
import config from '../config'
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

export const signup = async (req, res, next) => {
	console.log(req.body)

	if (!req.body.email || !req.body.password || req.body.login) {
		next()
	}

	const user = new User({
		login: req.body.name,
		email: req.body.email,
		password: req.body.password,
	})

	const token = newToken(user)

	res.status(201).send({ token })
}

export const signin = async (req, res) => {
	console.log(req.body)

	if (!req.body.password || req.body.login) {
		next()
	}

	const user = await User.findOne({ login: req.body.login })

	if (!user) {
		next()
	}

	const match = user.checkPassword(req.body.password)

	try {
		if (!match) {
			return res.status(401).send({ message: 'Not auth' })
		}

		const token = newToken(user)

		return res.status(201).send({ token })
	} catch (error) {
		console.error(error)
		return res.status(400).end()
	}
}

export const protect = async (req, res, next) => {
	if (!req.headers.authorization) {
		return res.status(400).send({
			message: 'No token',
		})
	}

	let token = req.headers.authorization.split('Bearer')[1]

	if (!token) {
		return res.status(400).end()
	}

	try {
		const payload = await verifyToken(token)
		const user = await (await User.findById(payload.id))
			.select('-password')
			.lean()
			.exec()

		req.user = user

		next()
	} catch (e) {
		return res.status(400).end()
	}
}
