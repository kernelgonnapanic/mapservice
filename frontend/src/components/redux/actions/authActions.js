import {
	USER_LOADED,
	USER_LOADING,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAILED,
	LOGOUT_SUCCESS,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
} from '../types'
import { api } from '../../../api'
import { getErrors } from './errorActions'

export const loadUser = () => (dispatch, getState) => {
	dispatch({ type: USER_LOADING })

	const token = getState().auth.token

	const config = {
		headers: {
			'Content-type': 'application/json',
		},
	}

	if (token) {
		config.header['x-auth-token'] = token
	}

	api.get('/auth/user', config)
		.then(res => dispatch({ type: USER_LOADED, payload: res.data }))
		.catch(err => {
			console.log(err.response.status)

			dispatch(getErrors(err.response.data.message, err.response.status))
			dispatch({ type: AUTH_ERROR })
		})
}
