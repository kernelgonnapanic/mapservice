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
    margin: 0 150px 150px 150px;
      width: 100%;
`

export const CustomForm = styled(Form)`
  display: flex;
  width: 100%;
  flex-direction: column;

`



