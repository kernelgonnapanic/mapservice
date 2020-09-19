import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../App'
import IconInfo from '../IconInfo'
import React from 'react'
import { Search } from 'react-feather'
import ReactDOM from 'react-dom'

test('render IconInfo component', async () => {
	const { asFragment } = render(
		<ThemeProvider theme={theme}>
			<IconInfo text="Hello!" />
		</ThemeProvider>,
	)
	expect(asFragment()).toMatchSnapshot()
})

test('render IconInfo text with prop', async () => {
	const container = document.createElement('div')

	ReactDOM.render(
		<ThemeProvider theme={theme}>
			<IconInfo text="testText" />
		</ThemeProvider>,
		container,
	)
	expect(container.textContent).toMatch('testText')
})
