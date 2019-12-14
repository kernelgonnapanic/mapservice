import { api } from '../../../api'
import { GET_PLACES, SEND_PLACES, GET_SINGLE_PLACE } from '../types'

export const getPlaces = () => async dispatch => {
	try {
		const response = await api.get('/places')

		const action = {
			type: GET_PLACES,
			payload: response,
		}

		dispatch(action)
	} catch (err) {
		console.log(err)
	}
}

export const getSinglePlace = id => async dispatch => {
	try {
		const response = await api.get(`/place/${id}`)

		const action = {
			type: GET_SINGLE_PLACE,
			payload: response,
		}

		dispatch(action)
	} catch (err) {
		alert('FFS')
		console.log(err)
	}
}

export const sendPlace = data => async dispatch => {
	try {
		const response = await api.post('/place', { ...data })

		const action = {
			type: SEND_PLACES,
			payload: response,
		}

		dispatch(action)
	} catch (err) {
		console.log(err)
	}
}
