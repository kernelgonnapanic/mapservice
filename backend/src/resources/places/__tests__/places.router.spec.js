import router from '../places.router'

describe('places router', () => {
	test('has crud routes', () => {
		const routes = [
			{ path: '/places', method: 'get' },
			{ path: '/place', method: 'post' },
			{ path: '/place/:id', method: 'get' },
		]

		routes.forEach(route => {
			const match = router.stack.find(
				s =>
					s.route.path === route.path &&
					s.route.methods[route.method],
			)
			expect(match).toBeTruthy()
		})
	})
})
