export const places = (state = [], action) => {
	switch (action.type) {
		case 'GET_PLACES':
			return action.payload.data
		case 'SEND_PLACES':
			return { state, payload: action.payload }
		default:
			return state
	}
}
