import React from 'react';
import clsx from 'clsx';
import { useStyles1 } from './Snackbar.styles'
import IconButton from '@material-ui/core/IconButton';
import SnackbarContent from '@material-ui/core/SnackbarContent';


const variantIcon = {
    success: 'CheckCircleIcon',
    error: 'ErrorIcon',
};

export interface Props {
    className?: string;
    message?: string;
    onClose?: () => void;
    variant: keyof typeof variantIcon;
}

function SnackbarContentWrapper(props: Props) {
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




export default SnackbarContentWrapper;