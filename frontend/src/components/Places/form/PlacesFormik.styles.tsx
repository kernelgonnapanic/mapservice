import { Grid } from '@material-ui/core'
import { Form } from 'formik'
import styled from 'styled-components'

export const GridItem = styled(Grid)`
	display: flex;
	flex-direction: column;
`

export const GridContainer = styled(Grid)`
	height: 100%;
`

export const StyledForm = styled(Form)`
	width: 100%;
	padding: 0 25px;
`
