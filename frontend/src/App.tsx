import React from 'react'
import { Provider } from 'react-redux'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Navigation from './components/Navigation/Navigation'
import { store } from './components/redux/reducers'


const theme = {
	colors: {
		mainDark: '#203A55',
		mediumGray: '#546577',
		white: '#FFFFFF',
		purple: 'rgb(209, 196, 233)',
		gray: 'hsl(220, 7%, 83%)',
	},
	headerHeight: '64px',
	barHeight: '75px',
	boxshadow: '0 3px 0 hsl(220, 7%, 83%) ',
	borderRadius: {
		small: 5,
		medium: "20px"
	},
	fontSize: {
		s: "14px",
		l: "16px",
		xl: "20px",
		xxl: "30px"
	}
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
			<ThemeProvider theme={theme}>
				<Navigation />
			</ThemeProvider>
		</Provider>
	)
}

export default App
