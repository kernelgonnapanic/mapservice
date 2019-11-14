import { getPlace, createPlace, getData } from '../places.controllers'
import { isFunction } from 'lodash'

describe('Places controllers', () => {
	test('has crud controllers', () => {
		const crudMethods = [getPlace, createPlace, getData]

		crudMethods.forEach(name => expect(isFunction(name)).toBe(true))
	})
})
