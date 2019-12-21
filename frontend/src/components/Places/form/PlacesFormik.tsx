import { Field, Form, Formik } from 'formik'
import React, { useEffect } from 'react'
import PlacesMap from './PlacesMap'
import { useDispatch } from 'react-redux'
import * as S from './PlacesFormik.styles'
import * as Yup from 'yup'
import { sendPlace } from '../../redux/actions'
import Input from '../../_layout/Input'
import Select from '../../_layout/Select'

interface Props { }

const AddPlace: React.FC<Props> = () => {
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
		lat: '',
		long: '',
	}

	const onSubmit = (values: Record<string, any>): void => {
		dispatch(sendPlace(values))
	}

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
		>
			{({ setFieldValue }) => {
				return (
					<S.StyledForm>
						<S.GridContainer container spacing={5}>
							<S.GridItem item xs={6}>
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
									value="rofl"
									component={Input}
								/>
								<Field
									name="phoneNumber"
									label="Numer Telefonu"
									component={Input}
								/>
							</S.GridItem>
							<S.GridItem item xs={6}>
								<Field
									component={Select}
									name="placeType"
									label="test"
								/>
								<Field
									name="lat"
									label="Lat"
									component={Input}
								/>
								<Field
									name="long"
									label="Lng"
									component={Input}
								/>
							</S.GridItem>
						</S.GridContainer>
						<button type="submit">test</button>
						<PlacesMap setFieldValue={setFieldValue} />
					</S.StyledForm>
				)
			}}
		</Formik>
	)
}

export default AddPlace
