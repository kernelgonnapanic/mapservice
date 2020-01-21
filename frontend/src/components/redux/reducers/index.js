import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { placesReducer } from './placesReducer'
import { errorReducer } from './errorReducer'

export const reducers = combineReducers({
	places: placesReducer,
	errors: errorReducer,
})

export const store = createStore(
	reducers,
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f,
	),
)
