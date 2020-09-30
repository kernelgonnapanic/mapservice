import React from 'react'
import styled from 'styled-components'
import { FieldProps } from 'formik'

import {
	Select,
	FormControl,
	InputLabel,
	FormHelperText,
} from '@material-ui/core'

/*eslint-disable*/
interface Props extends FieldProps {
	options: string[]
}

const customSelect: React.FC<Props> = ({
	field,
	form: { touched, errors },
	options,
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
					<option value=""></option>
					{options &&
						options.map((optionName: string) => (
							<option value={optionName}>{optionName}</option>
						))}
				</Select>
				{touched[name] && <FormHelperText>{errors[name]}</FormHelperText>}
			</FormControl>
		</>
	)
}

export default customSelect
