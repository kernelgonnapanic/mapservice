import { api } from '../../../api'
import axios from 'axios'
import { jsonToFormData } from '../../../assets/helpers'
import {
	GET_PLACES,
	GET_PLACES_SUCCESS,
	GET_PLACES_FAIL,

	GET_SINGLE_PLACE,
	GET_SINGLE_PLACE_SUCCESS,
	GET_SINGLE_PLACE_FAIL,

	GET_MARKERS,
	GET_MARKERS_SUCCESS,
	GET_MARKERS_FAIL,

	CLEAR_SINGLEPLACE,

	GET_PLACETYPE_OPTIONS,

	SEND_PLACES,
	SET_NOTIFICATION,
} from '../types'
import { getPlacesList, getSinglePlaceById } from '../api'

export const getPlaces = (
					perPage,
					offset,
					search = null,
					type = null,
				) => async dispatch => {
					const action = { type: GET_PLACES, payload: {} }
					dispatch(action)

					try {

     console.log(type)

						const response = await getPlacesList(perPage, offset, search, type)

						const action = {
							type: GET_PLACES_SUCCESS,
							payload: response,
							meta: { isSearching: !!search },
						}
						dispatch(action)
					} catch (err) {
						if (axios.isCancel(err)) return

						const action = { type: GET_PLACES_FAIL, payload: err }
						dispatch(action)
					}
				}

export const getMarkers = (perPage) => async dispatch => {
	const action = { type: GET_MARKERS, payload: {}};

	dispatch(action);
	try {
		const response = await getPlacesList(perPage);

		const action = {type: GET_MARKERS_SUCCESS, payload: response}
		dispatch(action);
	} catch (err){
		const action = {type: GET_MARKERS_FAIL, payload: err};
		dispatch(action);
	}
}

export const getSinglePlace = id => async dispatch => {
	const action = {type: GET_SINGLE_PLACE, payload: {}};

	dispatch(action);
	try {
		const response = await getSinglePlaceById(id)

		const action = {type: GET_SINGLE_PLACE_SUCCESS, payload: response};
		dispatch(action)
	} catch (err) {
		const action = {type: GET_SINGLE_PLACE_FAIL, payload: err};
		dispatch(action)
	}
};

export const clearSingePlace = () => async dispatch => {
	const action = {type: CLEAR_SINGLEPLACE, payload: {}}
	dispatch(action);
};

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
		} else if (err.response.err.message.code === 11000) {
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
