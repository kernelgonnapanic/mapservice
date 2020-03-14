import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { placesReducer } from './placesReducer'
import { errorReducer } from './errorReducer'
import { authReducer } from './authReducer'

export const reducers = combineReducers({
	places: placesReducer,
	errors: errorReducer,
	auth: authReducer,
})

export const store = createStore(
	reducers,
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f,
	),
)
