import React from 'react'
import AddPlace from './components/AddPlace'
import { store } from './components/redux/reducers'
import { Provider } from 'react-redux'

const App = () => {
	return (
		<Provider store={store}>
			<AddPlace />
		</Provider>
	)
}

export default App
