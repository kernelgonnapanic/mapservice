import { amber, green } from '@material-ui/core/colors';
import { makeStyles, Theme } from '@material-ui/core/styles';


export const useStyles1 = makeStyles((theme: Theme) => ({
    success: {
        backgroundColor: green[600],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    info: {
        backgroundColor: theme.palette.primary.main,
    },
    warning: {
        backgroundColor: amber[700],
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
}));


export const useStyles2 = makeStyles((theme: Theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));