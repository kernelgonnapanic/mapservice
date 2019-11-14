import { Place } from '../places.model'

describe('Place model', () => {
	test('Title must be required', async () => {
		expect.assertions(1)
		try {
			await Place.create({
				titdsadsadsadsale: 'Bob',
			})
		} catch (e) {
			expect(e).toBeTruthy()
		}
	})
})
