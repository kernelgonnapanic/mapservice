import { api } from '../../../api'
import { jsonToFormData } from '../../../assets/helpers'
import {
	SET_NOTIFICATION,
	GET_PLACES,
	GET_PLACES_SUCCESS,
	GET_PLACES_FAIL,
	GET_SINGLE_PLACE,
	GET_SINGLE_PLACE_SUCCESS,
	GET_SINGLE_PLACE_FAIL,
	SEND_PLACES,
	SEND_PLACES_SUCCESS,
	SEND_PLACES_FAIL,
	GET_PLACETYPE_OPTIONS,
	GET_PLACETYPE_OPTIONS_SUCCESS,
	GET_PLACETYPE_OPTIONS_FAIL,
} from '../types'

export const getPlaces = () => async dispatch => {
	const meta = {}

	dispatch({ type: GET_PLACES, payload: meta })
	try {
		const response = await api.get('/places')
		const action = { type: GET_PLACES_SUCCESS, payload: response }

		dispatch(action)
	} catch (error) {
		const action = { type: GET_PLACES_FAIL, error: error }
		dispatch(action)
	}
}

export const getSinglePlace = (id = null) => async dispatch => {
	const meta = { id }

	dispatch({ type: GET_SINGLE_PLACE, payload: meta })
	try {
		const response = await api.get(`/place/${id}`)

		const action = {
			type: GET_SINGLE_PLACE_SUCCESS,
			payload: response,
		}

		dispatch(action)
	} catch (error) {
		const action = { type: GET_SINGLE_PLACE_FAIL, error: error }
		dispatch(action)
	}
}

export const setNotification = message => async dispatch => {
	const action = {
		type: SET_NOTIFICATION,
		payload: message,
	}

	dispatch(action)
}

export const sendPlace = (data = {}) => async dispatch => {
	dispatch({ type: SEND_PLACES })

	try {
		const bodyFormData = jsonToFormData(data)

		const response = await api.post('/place', bodyFormData, {
			headers: { 'Content-Type': 'multipart/form-data' },
		})

		const action = {
			type: SEND_PLACES_SUCCESS,
			payload: response,
		}

		dispatch(
			setNotification({
				sentStatus: true,
				message: 'Pomyślnie dodano nowe miejsce',
			}),
		)
		dispatch(action)
	} catch (error) {
		let message = ''

		if (!error.response) {
			message += 'Błąd krytyczny'
		} else if (error.response.status === 500) {
			message += 'Przepraszamy, problem z serwerem.'
		} else if (error.response.data.message.code === 11000) {
			message += 'Taka placówka już istnieje'
		} else {
			message = error.message
		}

		const action = {
			type: SEND_PLACES_FAIL,
			error: error,
		}

		dispatch(setNotification({ sentStatus: false, message: message }))
		dispatch(action)
	}
}

export const getPlaceTypeOptions = (data = []) => async dispatch => {
	const meta = { data }

	dispatch({ type: GET_PLACETYPE_OPTIONS, payload: meta })

	try {
		const response = await api.get('./placetypeoptions')

		const action = {
			type: GET_PLACETYPE_OPTIONS_SUCCESS,
			payload: response,
		}

		dispatch(action)
	} catch (error) {
		const action = {
			type: GET_PLACETYPE_OPTIONS_FAIL,
			error: error,
		}

		dispatch(action)
	}
}
