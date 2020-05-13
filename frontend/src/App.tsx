import React from 'react'
import { Provider } from 'react-redux'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Navigation from './pages/Navigation/Navigation'
import { store } from './redux/reducers'
import { StylesProvider } from '@material-ui/core/styles'

const theme = {
	colors: {
		white: '#FFFFFF',
		black: '#000000',
		gray: '#6B6B6B',
		purple: 'rgb(209, 196, 233)',
	},
	headerHeight: '64px',
	barHeight: '75px',
	searchBarHeight: '50px',
	boxshadow: 'rgba(225, 232, 240, 0.5) 0px 2px 10px 10px',
	borderRadius: {
		small: 5,
		medium: '20px',
	},

	fontSize: {
		s: 14,
		m: 16,
		l: 20,
		xl: 24,
		xxl: 32,
	},
}

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Varela+Round&display=swap');

  html, body, #root {
 	 height: 100%
	}

  body {
	margin: 0;
	padding: 0;
	background-color: #FBFBFB;
	font-family: 'Varela Round', sans-serif;
  }

  *, *::before, *::after {
	  box-sizing: border-box
  }
`

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<GlobalStyle />
			<StylesProvider injectFirst>
				<ThemeProvider theme={theme}>
					<Navigation />
				</ThemeProvider>
			</StylesProvider>
		</Provider>
	)
}

export default App
