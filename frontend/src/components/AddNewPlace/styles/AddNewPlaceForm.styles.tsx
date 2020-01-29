import { Form } from 'formik'
import styled from 'styled-components'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			'& .MuiTextField-root': {
				marginBottom: 10,
				minHeight: 76
			},
			'& .MuiFormControl-root': {
				marginBottom: 10,
				minHeight: 76
			},
		},
	}),
);

export default useStyles;

export const Container = styled.div`
	height: 100%;
	display: grid;
	grid-template-columns: 2fr 2fr;
`

export const FieldsWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	padding-right: 50px;

`

export const Item = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 50px;
`

export const StyledForm = styled(Form)`
	width: 100%;
	padding: 100px;
`

