import { api } from '../../../api'
import TYPES from '../types'
import { getErrors } from './errorActions'
import { navigate } from '@reach/router'

export const loadUser = () => (dispatch, getState) => {
	dispatch({ type: TYPES.USER_LOADING })

	api.get('/auth/user')
		.then(res => {
			dispatch({ type: TYPES.USER_LOADED, payload: res.data.data })
		})
		.catch(err => {
			// dispatch(getErrors(err.message, err.response.status))
			dispatch({ type: TYPES.AUTH_ERROR })
		})
}

export const LogoutUser = () => {
	navigate(`/auth/login`)

	return {
		type: TYPES.LOGOUT_SUCCESS,
	}
}

export const SignUpUser = values => async dispatch => {
	try {
		const { email, login, password } = values

		const newUserBody = { login, email, password }

		const response = await api.post('/signup', newUserBody)

		dispatch({
			type: TYPES.REGISTER_SUCCESS,
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
		dispatch({ type: TYPES.REGISTER_FAIL })
	}
}

export const SignIn = values => async dispatch => {
	try {
		const { login, password } = values

		const loginBody = { login, password }

		const response = await api.post('/signin', loginBody)

		dispatch({
			type: TYPES.LOGIN_SUCCESS,
			payload: response.data,
		})
		navigate(`/`)
	} catch (err) {
		dispatch(
			getErrors(
				err.response.data.error,
				err.response.status,
				'LOGIN_FAILED',
			),
		)
		dispatch({ type: TYPES.LOGIN_FAILED })
	}
}
