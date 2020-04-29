import TYPES from '../types'

const initialState = {
	message: {},
	status: null,
	id: null,
}

export const errorReducer = (state = initialState, action) => {
	switch (action.type) {
		case TYPES.GET_ERRORS:
			return {
				message: action.payload.message,
				status: action.payload.status,
				id: action.payload.id,
			}
		case TYPES.CLEAR_ERRORS: {
			return {
				message: {},
				status: null,
				id: null,
			}
		}
		default:
			return state
	}
};
