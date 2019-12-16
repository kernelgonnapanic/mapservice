import { Field, Form, Formik } from 'formik'
import React from 'react'
import styled from 'styled-components'
import { Grid, Container } from '@material-ui/core'
import Input from '../../_layout/Input'
import Select from '../../_layout/Select'
import { useDispatch } from 'react-redux'
import { sendPlace } from '../../redux/actions'
import * as Yup from 'yup'

const AddPlace: React.FC = () => {
	const dispatch = useDispatch()

	const validationSchema = Yup.object().shape({
		title: Yup.string()
			.min(2, 'Nazwa jest zbyt krótka!')
			.max(50, 'Nazwa jest zbyt długa!')
			.required('Wpisz nazwę'),
		street: Yup.string()
			.min(2, 'Nazwa ulicy jest zbyt krótka!')
			.max(50, 'Nazwa ulicy jest zbyt długa!')
			.required('Wpisz ulicę'),
		number: Yup.string()

			.max(15, 'Zbyt długi numer')
			.required('Wpisz numer'),
		placeType: Yup.string().required('Wybierz Typ miejsca'),
		lat: Yup.number().required('Podaj długość geograficzną'),
		long: Yup.number().required('Podaj szerokość geograficzną'),
		phoneNumber: Yup.number()
			.typeError('To nie wygląda jak numer telefonu')
			.positive('Mialeś na myśli +?')
			.integer('Numer telefonu nie może zawierać kropki')
			.min(8)
			.required('Podaj numer telefonu'),
	})

	const initialValues = {
		title: '',
		street: '',
		number: '',
		//IMAGE UPLOAD TO DO
		placeType: '', //SELECT FETCH FROM API
		phoneNumber: '',
		// description: '', //TEXTAREA
		lat: '', //PICKED FROM MAP
		long: '',
	}

	const onSubmit = (values: Record<string, any>) => {
		dispatch(sendPlace(values))
	}

	const GridItem = styled(Grid)`
		display: flex;
		flex-direction: column;
	`

	return (
		<Container fixed>
			<Formik
				initialValues={initialValues}
				onSubmit={onSubmit}
				validationSchema={validationSchema}
			>
				{() => (
					<Form>
						<Grid container spacing={5}>
							<GridItem item xs={6}>
								<Field
									name="title"
									label="Nazwa"
									component={Input}
								/>
								<Field
									name="street"
									label="Ulica"
									component={Input}
								/>

								<Field
									name="number"
									label="Numer"
									component={Input}
								/>
								<Field
									name="lat"
									label="Lat"
									component={Input}
								/>
							</GridItem>
							<GridItem item xs={6}>
								<Field
									name="long"
									label="Lng"
									component={Input}
								/>
								<Field
									component={Select}
									name="placeType"
									label="test"
								/>
								<Field
									name="phoneNumber"
									label="Numer Telefonu"
									component={Input}
								/>
							</GridItem>
						</Grid>
						<button type="submit">test</button>
					</Form>
				)}
			</Formik>
		</Container>
	)
}

export default AddPlace
