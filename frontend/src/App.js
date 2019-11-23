import React from 'react'
import Navigation from './components/Navigation'
import AddPlace from './components/AddPlace'
import { store } from './components/redux/reducers'
import { Provider } from 'react-redux'

const App = () => {
	return (
		<Provider store={store}>
			<Navigation />
		</Provider>
	)
}

export default App
