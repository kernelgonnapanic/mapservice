import React from 'react'

import { FieldProps } from 'formik'

import {
	Select,
	FormControl,
	InputLabel,
	FormHelperText,
} from '@material-ui/core'

/*eslint-disable*/
interface Props extends FieldProps { }

const customSelect: React.FC<Props> = ({
	field,
	form: { touched, errors },
}) => {
	const { name } = field

	return (
		<>
			<FormControl
				margin="none"
				variant="outlined"
				error={touched[name] && errors[name] ? true : false}
			>
				<InputLabel htmlFor="age-native-simple">Typ</InputLabel>
				<Select native {...field}>
					<option value="" />
					<option value="restaurant">Restauracja</option>
					<option value="cinema">Kino</option>
				</Select>
				{touched[name] &&
					<FormHelperText>
						{errors[name]}
					</FormHelperText>
				}
			</FormControl>
		</>
	)
}

export default customSelect
