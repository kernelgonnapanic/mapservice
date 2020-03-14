import React from 'react'
import styled from 'styled-components'
import { FieldProps } from 'formik'
import { TextField } from '@material-ui/core'
import { TextFieldProps } from 'material-ui'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

interface Props extends FieldProps, TextFieldProps {
    label: string
    error: boolean
}

const Input: React.FC<Props> = ({
    field,
    form: { touched, errors },
    label,
    type = 'text',
}) => {
    const { name } = field

    return (
        <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows="4"
            defaultValue="Default Value"
            variant="outlined"
        />
    )
}

export default Input
