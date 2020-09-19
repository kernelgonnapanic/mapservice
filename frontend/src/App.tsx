import React from 'react'
import { Provider } from 'react-redux'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Navigation from './pages/Navigation/Navigation'
import { store } from './redux/reducers'
import { StylesProvider } from '@material-ui/core/styles'

export const theme = {
	colors: {
		white: '#FFFFFF',
		black: '#000000',
		gray: '#6B6B6B',
		lightGray: '#C4C4C4',
		purple: 'rgb(209, 196, 233)',
		green: '#22bfa2',
		orange: '#e65336',
	},
	textColors: {
		lightGray: '#546577',
		darkGray: '#6B6B6B',
	},
	fontSize: {
		s: '14px',
		m: '16px',
		l: '20px',
		xl: '24px',
		xxl: '32px',
	},
	headerHeight: '64px',
	barHeight: '75px',
	searchBarHeight: '50px',
	boxshadow: 'rgba(225, 232, 240, 0.5) 0px 2px 10px 10px',
	borderRadius: {
		small: 5,
		medium: '20px',
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
  
  @keyframes changewidth {
     
      
   
        from {
        top: 0;
        }
    to {
        top: -15px;
    }
      
  
    }

    .active-marker {
    z-index: 1000 !important;
    animation-duration: 0.5s;
    animation-name: changewidth;
    animation-iteration-count: infinite;
    animation-direction: alternate;
   
}`

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<StylesProvider injectFirst>
					<Navigation />
				</StylesProvider>
			</ThemeProvider>
		</Provider>
	)
}

export default App
