import { api } from '../../../api'
import {
	AUTH_ERROR,
	LOGIN_FAILED,
	LOGIN_SUCCESS,
	LOGOUT_SUCCESS,
	REGISTER_FAIL,
	REGISTER_SUCCESS,
	USER_LOADED,
	USER_LOADING,
} from '../types'
import { getErrors } from './errorActions'

export const loadUser = () => (dispatch, getState) => {
	dispatch({ type: USER_LOADING })

	const token = getState().auth.token

	// if (token) {
	// 	api.header['x-auth-token'] = token
	// }

	api.get('/auth/user')
		.then(res => {
			dispatch({ type: USER_LOADED, payload: res.data })
		})
		.catch(err => {
			dispatch(getErrors(err.response.data.message, err.response.status))
			// dispatch({ type: AUTH_ERROR })
		})
}

export const LogoutUser = () => {
	return {
		type: LOGOUT_SUCCESS,
	}
}

export const SignUpUser = values => async dispatch => {
	try {
		const { email, login, password } = values

		const newUserBody = { login, email, password }

		const response = await api.post('/signup', newUserBody)

		dispatch({
			type: REGISTER_SUCCESS,
			payload: response.data,
		})
	} catch (err) {
		dispatch(
			getErrors(
				err.response.data.message,
				err.response.status,
				'REGISTER_FAIL',
			),
		)
		dispatch({ type: REGISTER_FAIL })
	}
}

export const SignIn = values => async dispatch => {
	try {
		const { login, password } = values

		const loginBody = { login, password }

		const response = await api.post('/signin', loginBody)

		dispatch({
			type: LOGIN_SUCCESS,
			payload: response.data,
		})
	} catch (err) {
		dispatch(
			getErrors(
				err.response.data.error,
				err.response.status,
				'LOGIN_FAILED',
			),
		)
		dispatch({ type: LOGIN_FAILED })
	}
}
