import { api } from '../../../api'
import axios from 'axios'
import { GET_PLACES, SEND_PLACES } from '../types'

export const getPlaces = () => async dispatch => {
	const response = await api.get('http://localhost:5000/places')

	const action = {
		type: GET_PLACES,
		payload: { ...response },
	}
	dispatch(action)
}

export const sendPlace = data => async dispatch => {
	const response = await api.post('/place', { ...data })

	const action = {
		type: SEND_PLACES,
		payload: response,
	}

	dispatch(action)
}
