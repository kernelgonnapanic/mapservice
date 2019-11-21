import { Field, Form, Formik } from 'formik'
import React, { useEffect } from 'react'
import Input from './Input'
import Select from './Select'
import { useDispatch, useSelector } from 'react-redux'
import { getPlaces, sendPlace } from './redux/actions'
import * as Yup from 'yup'

const AddPlace: React.FC = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getPlaces())
	})

	const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

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
		alert('GOT IT BUD')
		// dispatch(sendPlace(values))
		console.log(values)
	}

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
		>
			{() => (
				<Form>
					<Field name="title" label="Nazwa" component={Input} />
					<Field name="street" label="Ulica" component={Input} />
					<Field name="number" label="Numer" component={Input} />
					<Field name="lat" label="Lat" component={Input} />
					<Field name="long" label="Lng" component={Input} />
					<Field component={Select} name="placeType" label="test" />
					<Field
						name="phoneNumber"
						label="Numer Telefonu"
						component={Input}
					/>
					<button type="submit">test</button>
				</Form>
			)}
		</Formik>
	)
}

export default AddPlace
