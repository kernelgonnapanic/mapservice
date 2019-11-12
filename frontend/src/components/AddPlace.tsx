import { Form, Formik, Field } from 'formik'
import React from 'react'
import Input from './Input'

const AddPlace: React.FC = () => {
	const initialValues = {
		title: '',
		street: '',
		number: '',
		//IMAGE UPLOAD TO DO
		// placeType: '', //SELECT FETCH FROM API
		phoneNumber: '',
		// description: '', //TEXTAREA
		// lat: '', //PICKED FROM MAP
		// long: '',
	}

	const onSubmit = (values: Object) => {
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
