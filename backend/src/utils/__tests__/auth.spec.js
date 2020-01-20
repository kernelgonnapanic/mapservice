import { newToken, verifyToken, signup, signin, protect } from '../auth'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import { config } from '../../config'
import { User } from '../../resources/user/user.model'

describe('Authentication:', () => {
	describe('newToken', () => {
		test('creates new jwt from user', () => {
			const id = 123
			const token = newToken({ id })
			const user = jwt.verify(token, config.secrets.jwt)

			expect(user.id).toBe(id)
		})
	})

	describe('verifyToken', () => {
		test('validates jwt and returns payload', async () => {
			const id = 1234
			const token = jwt.sign({ id }, config.secrets.jwt)
			const user = await verifyToken(token)
			expect(user.id).toBe(id)
		})
	})

	describe('signup', () => {
		test('requires email, password and login', async () => {
			expect.assertions(2)

			const req = { body: {} }
			const res = {
				status(status) {
					expect(status).toBe(400)
					return this
				},
				send(result) {
					expect(typeof result.error).toBe('string')
				},
			}

			await signup(req, res)
		})

		test('creates user and and sends new token from user', async () => {
			expect.assertions(2)

			const req = {
				body: {
					email: 'testemail@gmail.com',
					password: 'examplepassword123',
					login: 'testlogin',
				},
			}

			const res = {
				status(status) {
					expect(status).toBe(201)
					return this
				},
				async send(result) {
					let user = await verifyToken(result.token)
					user = await User.findById(user.id)
						.lean()
						.exec()
					expect(user.email).toBe('testemail@gmail.com')
				},
			}

			await signup(req, res)
		})
	})

	describe('signin', () => {
		test('requires login and password', async () => {
			expect.assertions(2)

			const req = { body: {} }

			const res = {
				status(status) {
					expect(status).toBe(401)
					return this
				},
				send(result) {
					expect(typeof result.error).toBe('string')
				},
			}

			await signin(req, res)
		})

		test('User must be in database', async () => {
			expect.assertions(2)

			const req = { body: { login: 'johndoe', password: 'mypassword' } }

			const res = {
				status(status) {
					expect(status).toBe(401)
					return this
				},
				send(result) {
					expect(typeof result.error).toBe('string')
				},
			}

			await signin(req, res)
		})

		test('passwords must match', async () => {
			expect.assertions(2)

			await User.create({
				login: 'testuser',
				password: 'hello',
			})

			const req = {
				body: {
					login: 'testuser',
					password: 'wrongpassword',
				},
			}

			const res = {
				status(status) {
					expect(status).toBe(401)
					return this
				},
				send(result) {
					expect(typeof result.error).toBe('string')
				},
			}

			await signin(req, res)
		})
	})
})
