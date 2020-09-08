import Snackbar from '@material-ui/core/Snackbar'
import React, { SyntheticEvent } from 'react'
import SnackbarContentWrapper from './SnackbarContentWrapper'

interface CustomizedSnackbarProps {
	isSnackbarOpened: boolean
	notification: any
	setSnackbarOpened: (value: boolean) => void
}

const CustomizedSnackbar: React.FC<CustomizedSnackbarProps> = ({
	isSnackbarOpened,
	setSnackbarOpened,
	notification = {},
}) => {
	const handleClose = (event?: SyntheticEvent, reason?: string) => {
		if (reason === 'clickaway') {
			return
		}

		setSnackbarOpened(false)
	}

	const { sentStatus, message } = notification

	return (
		<div>
			<Snackbar
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				open={isSnackbarOpened}
				autoHideDuration={6000}
				onClose={handleClose}
			>
				<SnackbarContentWrapper
					onClose={handleClose}
					variant={sentStatus === 'ERROR' ? 'error' : 'success'}
					message={message}
				/>
			</Snackbar>
		</div>
	)
}

export default CustomizedSnackbar
