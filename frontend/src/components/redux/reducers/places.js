export const places = (state = [], action) => {
	switch (action.type) {
		case 'GET_PLACES':
			return { ...state, list: { ...action.payload } }
		case 'GET_SINGLE_PLACE':
			return { ...state, place: { ...action.payload } }
		case 'SEND_PLACES':
			return { ...state, payload: action.payload }
		case 'SET_NOTIFICATION':
			return { ...state, notification: action.payload }
		default:
			return state
	}
}
