import { api, apiFormData } from '../../../api'
import { jsonToFormData } from '../../../assets/helpers'
import {
	GET_PLACES,
	GET_PLACETYPE_OPTIONS,
	GET_SINGLE_PLACE,
	SEND_PLACES,
	SET_NOTIFICATION,
} from '../types'

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

export const setNotification = message => async dispatch => {
	const action = {
		type: SET_NOTIFICATION,
		payload: message,
	}

	dispatch(action)
}

export const sendPlace = data => async dispatch => {
	try {
		const bodyFormData = jsonToFormData(data)

		const response = await api.post('/place', bodyFormData, {
			headers: { 'Content-Type': 'multipart/form-data' },
		})

		const action = {
			type: SEND_PLACES,
			payload: response,
		}

		dispatch(
			setNotification({
				sentStatus: true,
				message: 'Pomyślnie dodano nowe miejsce',
			}),
		)
		dispatch(action)
	} catch (err) {
		let message = ''

		if (!err.response) {
			message += 'Błąd krytyczny'
		} else if (err.response.status === 500) {
			message += 'Przepraszamy, problem z serwerem.'
		} else if (err.response.data.message.code === 11000) {
			message += 'Taka placówka już istnieje'
		} else {
			message = err.message
		}

		dispatch(setNotification({ sentStatus: false, message: message }))
	}
}

export const getPlaceTypeOptions = data => async dispatch => {
	try {
		const response = await api.get('./placetypeoptions')

		const action = {
			type: GET_PLACETYPE_OPTIONS,
			payload: response,
		}

		dispatch(action)
	} catch (err) {
		console.log(err)
	}
}
