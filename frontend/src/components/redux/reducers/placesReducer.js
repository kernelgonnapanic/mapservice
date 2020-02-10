export const placesReducer = (state = [], action) => {
	switch (action.type) {
		case 'GET_PLACES_SUCCESS':
			return { ...state, list: { ...action.payload } }
		case 'GET_SINGLE_PLACE_SUCCESS':
			return { ...state, place: { ...action.payload } }
		case 'SEND_PLACES_SUCCESS':
			return { ...state, payload: { ...action.payload } }
		case 'SET_NOTIFICATION_SUCCESS':
			return { ...state, notification: { ...action.payload } }
		case 'GET_PLACETYPE_OPTIONS_SUCCESS':
			return { ...state, placeTypeOptions: { ...action.payload } }
		default:
			return state
	}
}
