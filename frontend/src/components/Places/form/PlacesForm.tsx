import { Field, Formik } from 'formik'
import React from 'react'
import PlacesMap from './PlacesMap'
import { useDispatch } from 'react-redux'
import * as S from './PlacesForm.styles'
import { useStyles } from './PlacesForm.styles'
import * as Yup from 'yup'
import { sendPlace } from '../../redux/actions'
import { Input, Select, Button, FileUploadInput } from '../../_layout'


const AddPlace: React.FC = () => {
	const dispatch = useDispatch()
	const classes = useStyles();

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
		placeType: '', //SELECT FETCH FROM API
		phoneNumber: '',
		description: '',
		lat: '',
		long: '',
		placeImage: ''
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
			{({ setFieldValue }) => (
				<>
					<S.StyledForm className={classes.root}>
						<S.Container>
							<S.FieldsWrapper>
								<S.Item >
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
								</S.Item>
								<S.Item>
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
									<Field
										name="description"
										label="Opis"
										multiline={true}
										rows={4}
										component={Input}
									/>
								</S.Item>
								<FileUploadInput setFieldValue={setFieldValue} />
								<Button />
							</S.FieldsWrapper>
							<PlacesMap setFieldValue={setFieldValue} />
						</S.Container>
					</S.StyledForm>
				</>
			)
			}
		</Formik >
	)
}

export default AddPlace
