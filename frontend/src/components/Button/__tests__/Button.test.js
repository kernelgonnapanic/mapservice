import React from 'react'
import ReactDOM from 'react-dom'
import {cleanup, fireEvent, render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Button from '../Button'
import {theme} from '../../../App'
import {ThemeProvider} from 'styled-components'

afterEach(cleanup)

test('render Button component', async () => {
	const { asFragment } = render(
		<ThemeProvider theme={theme}>
			<Button text="Hello!" />
		</ThemeProvider>,
	)
	expect(asFragment()).toMatchSnapshot()
})

test('insert text into the button', () => {
	const container = document.createElement('div')
	ReactDOM.render(
		<ThemeProvider theme={theme}>
			<Button text="testText" />
		</ThemeProvider>,
		container,
	)
	expect(container.textContent).toMatch('testText')
})

test('button can have onClick as a prop', (done) => {
	const handleClick = () => {
		done()
	}

	const { getByText } = render(
		<ThemeProvider theme={theme}>
			<Button text="testText" onClick={handleClick} />
		</ThemeProvider>,
	)

	const node = getByText('testText')
	fireEvent.click(node)
})

test('background color of a button can be changed by prop', () => {
	const { getByText } = render(
		<ThemeProvider theme={theme}>
			<Button text="testText" color="blue" />
		</ThemeProvider>,
	)

	const node = getByText('testText')

	expect(node).toHaveStyle(`background-color: blue`)
})

test('button attribute can be changed by prop', () => {
	const { getByText } = render(
		<ThemeProvider theme={theme}>
			<Button text="testText" type="reset" />
		</ThemeProvider>,
	)

	const node = getByText('testText')

	expect(node).toHaveAttribute('type', 'reset')
})
