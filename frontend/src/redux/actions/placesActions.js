import { api } from '../../api'
import axios from 'axios'
import { jsonToFormData } from '../../assets/helpers'
import TYPES from '../types'
import { getPlacesList, getSinglePlaceById } from '../api'

export const getPlaces = (
	perPage,
	offset,
	search = null,
	type = null,
) => async (dispatch) => {
	const action = { type: TYPES.GET_PLACES, payload: {} }
	dispatch(action)

	try {
		const response = await getPlacesList(perPage, offset, search, type)

		const action = {
			type: TYPES.GET_PLACES_SUCCESS,
			payload: response,
			meta: { isSearching: !!search },
		}
		dispatch(action)
	} catch (err) {
		if (axios.isCancel(err)) return

		const action = { type: TYPES.GET_PLACES_FAIL, payload: err }
		dispatch(action)
	}
}

export const getMarkers = (perPage, offset, search, placeType) => async (
	dispatch,
) => {
	const action = { type: TYPES.GET_MARKERS, payload: {} }

	dispatch(action)
	try {
		const response = await getPlacesList(perPage, offset, search, placeType)

		const action = { type: TYPES.GET_MARKERS_SUCCESS, payload: response }
		dispatch(action)
	} catch (err) {
		const action = { type: TYPES.GET_MARKERS_FAIL, payload: err }
		dispatch(action)
	}
}

export const getSinglePlace = (id) => async (dispatch) => {
	const action = { type: TYPES.GET_SINGLE_PLACE, payload: {} }

	dispatch(action)
	try {
		const response = await getSinglePlaceById(id)

		const action = {
			type: TYPES.GET_SINGLE_PLACE_SUCCESS,
			payload: response,
		}
		dispatch(action)
	} catch (err) {
		const action = { type: TYPES.GET_SINGLE_PLACE_FAIL, payload: err }
		dispatch(action)
	}
}

export const clearSingePlace = () => async (dispatch) => {
	const action = { type: TYPES.CLEAR_SINGLEPLACE, payload: {} }
	dispatch(action)
}

export const setNotification = (message) => async (dispatch) => {
	const action = {
		type: TYPES.SET_NOTIFICATION,
		payload: message,
	}

	dispatch(action)
}

export const sendPlace = (data) => async (dispatch) => {
	try {
		const bodyFormData = jsonToFormData(data)

		const response = await api.post('/place', bodyFormData, {
			headers: { 'Content-Type': 'multipart/form-data' },
		})

		const action = {
			type: TYPES.SEND_PLACES,
			payload: response,
		}

		dispatch(action)

		return response
	} catch (err) {
		const error = { sentStatus: 'ERROR', message: err && err.message }

		return error
	}
}

export const getPlaceTypeOptions = (data) => async (dispatch) => {
	try {
		const response = await api.get('./placetypeoptions')

		const action = {
			type: TYPES.GET_PLACETYPE_OPTIONS,
			payload: response,
		}

		dispatch(action)
	} catch (err) {
		console.log(err)
	}
}

export const updatePlaceType = (type) => async (dispatch) => {
	try {
		dispatch({ type: TYPES.UPDATE_PLACE_TYPE, payload: type })
	} catch (err) {
		console.log(err)
	}
}
