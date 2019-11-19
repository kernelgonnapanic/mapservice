import React from 'react'
import { FieldProps } from 'formik'
import { TextField } from '@material-ui/core'
import { TextFieldProps } from 'material-ui'

interface Props extends FieldProps, TextFieldProps {
	label: string
}

const Input: React.FC<Props> = ({
	field,
	form: { touched, errors },
	label,
}) => {
	const { name } = field

	return (
		<>
			<TextField variant="outlined" label={label} {...field} />
			{touched[name] && errors[name] && (
				<div className="error">{errors[name]}</div>
			)}
		</>
	)
}

export default Input
