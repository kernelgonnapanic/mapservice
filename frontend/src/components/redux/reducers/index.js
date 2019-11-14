import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { places } from './places'

const reducers = combineReducers({
	places,
})

export const store = createStore(reducers, applyMiddleware(thunk))
