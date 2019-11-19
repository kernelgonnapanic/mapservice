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
	}

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
		>
			{({ values, handleChange, errors, touched }) => (
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
