import styled from 'styled-components'
import { Form } from 'formik'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiTextField-root': {
                marginTop: 25,
                marginBottom: 10,
                minHeight: 76
            },
            '& .MuiFormControl-root': {
                marginTop: 25,
                marginBottom: 10,
                minHeight: 76
            },
        },
    }),
);

export default useStyles;


export const Wrapper = styled.div`
    margin: 150px
  
`

export const CustomForm = styled(Form)`
  display: flex;
  width: 100%;
  flex-direction: column;

`



