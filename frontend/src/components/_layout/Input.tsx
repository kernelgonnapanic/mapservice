import React from 'react'
import { FieldProps } from 'formik'
import { TextField } from '@material-ui/core'
import { TextFieldProps } from 'material-ui'

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
		<>
			<TextField
				type={type}
				variant="outlined"
				label={label}
				{...field}
				error={touched[name] && errors[name] ? true : false}
				helperText={touched[name] && errors[name] && errors[name]}
				InputProps={{
					style: {
						color: 'red',
					},
				}}
			/>
		</>
	)
}

export default Input
