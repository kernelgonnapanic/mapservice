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
import { getErrors, clearErrors } from './errorActions'

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
		.then(res => {
			console.log(res)

			dispatch({ type: USER_LOADED, payload: res.data })
		})
		.catch(err => {
			dispatch(getErrors(err.response.data.message, err.response.status))
			dispatch({ type: AUTH_ERROR })
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
		console.log(err)
	}
}
