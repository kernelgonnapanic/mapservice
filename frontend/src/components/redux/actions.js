export const GET_PLACES = 'GET_PLACES'

export const getPlaces = () => dispatch => {
	const action = {
		type: GET_PLACES,
		text: 1,
	}
	dispatch(action)
}
