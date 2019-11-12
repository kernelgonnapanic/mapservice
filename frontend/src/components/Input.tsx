import React from 'react'
import { FieldProps } from 'formik'
import { TextField } from '@material-ui/core'
import { TextFieldProps } from 'material-ui'

interface Props extends FieldProps, TextFieldProps {
	label: string
}

const Input: React.FC<Props> = ({ placeholder, field, label }) => {
	return (
		<TextField
			variant="outlined"
			label={label}
			placeholder={placeholder}
			{...field}
		/>
	)
}

export default Input
