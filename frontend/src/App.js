import React, { useEffect } from 'react'
import thunk from 'redux-thunk'
import AddPlace from './components/AddPlace'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { todos } from './components/redux/reducers'
import { useSelector, useDispatch } from 'react-redux'

const App = () => {
	const reducers = combineReducers({
		todos,
	})

	const store = createStore(reducers, applyMiddleware(thunk))

	console.log(store.getState())

	return (
		<Provider store={store}>
			<div className="App">
				<AddPlace />
			</div>
		</Provider>
	)
}

export default App
