import TYPES from '../types'

export const getErrors = (message, status, id = null) => {
	return {
		type: TYPES.GET_ERRORS,
		payload: { message, status, id },
	}
}

export const clearErrors = () => {
	return {
		type: TYPES.CLEAR_ERRORS,
		payload: {
			message: null,
			status: null,
			id: null,
		},
	}
}
