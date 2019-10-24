import React from 'react'
import clsx from 'clsx'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			display: 'flex',
			flexWrap: 'wrap',
		},
		textField: {
			marginLeft: theme.spacing(1),
			marginRight: theme.spacing(1),
		},
		dense: {
			marginTop: theme.spacing(2),
		},
	}),
)

interface Props {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	value: string
	name: string
	label: string
}

const Input: React.FunctionComponent<Props> = ({
	onChange,
	value,
	name,
	label,
}) => {
	return (
		<TextField
			label={label}
			variant="outlined"
			onChange={onChange}
			value={value}
			name={name}
		/>
	)
}

export default Input
