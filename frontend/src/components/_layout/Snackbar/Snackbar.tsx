import React, { SyntheticEvent } from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { useStyles1, useStyles2 } from './Snackbar.styles'
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { makeStyles, Theme } from '@material-ui/core/styles';

const variantIcon = {
    success: 'CheckCircleIcon',
    warning: 'WarningIcon',
    error: 'ErrorIcon',
    info: 'InfoIcon',
};

export interface Props {
    className?: string;
    message?: string;
    onClose?: () => void;
    variant: keyof typeof variantIcon;
}

function MySnackbarContentWrapper(props: Props) {
    const classes = useStyles1();
    const { className, message, onClose, variant, ...other } = props;
    const Icon = variantIcon[variant];

    return (
        <SnackbarContent
            className={clsx(classes[variant], className)}
            aria-describedby="client-snackbar"
            message={
                <span id="client-snackbar" className={classes.message}>
                    {message}
                </span>
            }
            action={[
                <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
                    CLOSE
                </IconButton>,
            ]}
            {...other}
        />
    );
}



function CustomizedSnackbars() {
    const classes = useStyles2();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event?: SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" className={classes.margin} onClick={handleClick}>
                Open success snackbar
            </Button>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <MySnackbarContentWrapper
                    onClose={handleClose}
                    variant="error"
                    message="This is an error message!"
                />
            </Snackbar>
        </div>
    );
}

export default CustomizedSnackbars;