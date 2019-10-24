import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		button: {
			margin: theme.spacing(1),
		},
		input: {
			display: 'none',
		},
	}),
)

const MButton: React.FunctionComponent<{}> = () => {
	const classes = useStyles()

	return (
		<Button variant="contained" color="primary" className={classes.button}>
			Primary
		</Button>
	)
}

export default MButton
