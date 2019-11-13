import { Field, Form, Formik } from 'formik'
import React, { useEffect } from 'react'
import Input from './Input'
import Select from './Select'
import { useDispatch } from 'react-redux'
import { getPlaces } from './redux/actions'

const AddPlace: React.FC = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getPlaces())
	})

	const initialValues = {
		title: '',
		street: '',
		number: '',
		//IMAGE UPLOAD TO DO
		placeType: '', //SELECT FETCH FROM API
		phoneNumber: '',
		// description: '', //TEXTAREA
		// lat: '', //PICKED FROM MAP
		// long: '',
	}

	const onSubmit = (values: Record<string, any>) => {
		console.log(values)
	}

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={values => console.log(values)}
		>
			{({ values, handleChange }) => (
				<Form>
					<Field name="title" label="Nazwa" component={Input} />
					<Field name="street" label="Ulica" component={Input} />
					<Field name="number" label="Numer" component={Input} />
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
