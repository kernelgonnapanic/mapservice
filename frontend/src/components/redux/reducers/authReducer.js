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

const intialState = {
	token: localStorage.getItem('token'),
	isAuthenticated: null,
	isLoading: false,
	user: null,
}

export const authReducer = (state = [], action) => {
	switch (action.type) {
		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				isLoading: false,
				user: action.payload,
			}
		case USER_LOADING:
			return {
				...state,
				isLoading: true,
			}
		case LOGIN_SUCCESS:
		case REGISTER_SUCCESS:
			return {
				...state,
				isAuthenticated: true,
				isLoading: false,
			}
		case AUTH_ERROR:
		case LOGIN_FAILED:
		case REGISTER_FAIL:
		case LOGOUT_SUCCESS:
			return {
				...state,
				isAuthenticated: null,
				isLoading: false,
				user: null,
			}
		default:
			return state
	}
}
