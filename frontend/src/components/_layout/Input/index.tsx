import React from 'react'
import clsx from 'clsx'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'

const currencies = [
	{
		value: 'USD',
		label: '$',
	},
	{
		value: 'EUR',
		label: '€',
	},
	{
		value: 'BTC',
		label: '฿',
	},
	{
		value: 'JPY',
		label: '¥',
	},
]

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
		menu: {
			width: 200,
		},
	}),
)

interface State {
	name: string
	age: string
	multiline: string
	currency: string
}

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
			id="outlined-email-input"
			label={label}
			type="email"
			autoComplete="email"
			margin="normal"
			variant="outlined"
			onChange={onChange}
			value={value}
			name={name}
		/>
	)
}

export default Input
