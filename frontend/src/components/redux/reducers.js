import { GET_PLACES } from './actions'

export const todos = (state = [], action) => {
	switch (action.type) {
		case 'GET_PLACES':
			return state
		default:
			return state
	}
}
