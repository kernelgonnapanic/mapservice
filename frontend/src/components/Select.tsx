import React, { useRef } from 'react'
import { FieldProps } from 'formik'
import { MenuItem, Select, FormControl, InputLabel } from '@material-ui/core'

/*eslint-disable*/
interface Props extends FieldProps {}

const customSelect: React.FC<Props> = ({ field }) => {
	const inputLabel = React.useRef<HTMLLabelElement>(null)

	return (
		<FormControl variant="outlined">
			<InputLabel htmlFor="age-native-simple">Age</InputLabel>
			<Select native {...field}>
				<option value="" />
				<option value="restaurant">Restauracja</option>
				<option value="cinema">Kino</option>
			</Select>
		</FormControl>
	)
}

export default customSelect
