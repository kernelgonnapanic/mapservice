import { Form } from 'formik'
import styled from 'styled-components'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme: Theme) =>
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


export const Container = styled.div`
	height: 100%;
	display: grid;
	grid-template-columns: 3fr 2fr;
`

export const FieldsWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	padding-right: 50px;
`

export const Item = styled.div`
	display: flex;
	flex-direction: column;
`

export const StyledForm = styled(Form)`
	width: 100%;
	padding: 100px;
`
