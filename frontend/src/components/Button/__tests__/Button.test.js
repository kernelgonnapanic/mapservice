import React from 'react'
import ReactDOM from 'react-dom'
import {render, cleanup} from '@testing-library/react'
import Button from '../Button'
import {theme} from "../../../App";
import {ThemeProvider} from "styled-components";

afterEach(cleanup);

test("render Button component", async () => {
    const {asFragment} = render(<ThemeProvider theme={theme}><Button text="Hello!"/></ThemeProvider>)
    expect(asFragment()).toMatchSnapshot()
})

test("insert text into the button" , () =>{
    const container = document.createElement('div')
    ReactDOM.render(<ThemeProvider theme={theme}><Button text="testText"/></ThemeProvider>, container)
    expect(container.textContent).toMatch('testText')
})