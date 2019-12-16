import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import Navigation from './components/Navigation/Navigation'

import { Provider } from 'react-redux'
import { store } from './components/redux/reducers'

const theme = {}

const GlobalStyle = createGlobalStyle`
  body {
	margin: 0;
	padding: 0;
	
  }

  *, *::before, *::after {
	  box-sizing: border-box
  }
`

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Navigation />
			</ThemeProvider>
		</Provider>
	)
}

export default App
