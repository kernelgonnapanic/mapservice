import TYPES from '../types'

const initialState = {
	token: localStorage.getItem('token'),
	isAuthenticated: null,
	isLoading: false,
	user: null,
}

export const authReducer = (state = initialState, action) => {
					switch (action.type) {
						case TYPES.USER_LOADED:
							return {
								...state,
								isAuthenticated: true,
								isLoading: false,
								user: action.payload,
							}
						case TYPES.USER_LOADING:
							return {
								...state,
								isLoading: true,
							}
						case TYPES.LOGIN_SUCCESS:
						case TYPES.REGISTER_SUCCESS:
							localStorage.setItem('token', action.payload.token)
							return {
								...state,
								...action.payload,
								isAuthenticated: true,
								isLoading: false,
							}
						case TYPES.AUTH_ERROR:
						case TYPES.LOGIN_FAILED:
						case TYPES.REGISTER_FAIL:
						case TYPES.LOGOUT_SUCCESS:
							localStorage.removeItem('token')
							return {
								...state,
								token: null,
								user: null,
								isAuthenticated: null,
								isLoading: false,
							}
						default:
							return state
					}
				}
