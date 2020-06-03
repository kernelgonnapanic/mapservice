import React from 'react'
import ReactDOM from 'react-dom'
import {render, cleanup} from '@testing-library/react'
import Input from "../Input";
// import {theme} from "../../../App";
// import {ThemeProvider} from "styled-components";

afterEach(cleanup);

test("render Input component", async () => {
    const {asFragment} = render(<Input label="test" error={null} multiline={false} rows={null} field={null} form={null} meta={null}/>)
    expect(asFragment()).toMatchSnapshot()
})

test("render Input Error corretly component", async () => {
    // const container = document.createElement('div');
    //
    // ReactDOM.render(<Input label="test" error={null} multiline={false} rows={null} field={null} form={null} meta={null}/>, container)
    //
    // expect()

})