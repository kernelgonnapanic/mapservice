import { api, apiFormData } from '../../../api'
import axios from 'axios'
import { GET_PLACES, SEND_PLACES, GET_SINGLE_PLACE } from '../types'
import { jsonToFormData } from '../../../assets/helpers'

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
		console.log(err)
	}
}

export const sendPlace = data => async dispatch => {
	try {
		const bodyFormData = jsonToFormData(data)

		const response = await apiFormData.post('/place', bodyFormData)

		const action = {
			type: SEND_PLACES,
			payload: response,
		}

		dispatch(action)
	} catch (err) {
		console.log(err)
	}
}
