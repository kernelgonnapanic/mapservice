import { Field, Form, Formik } from 'formik'
import React, { useEffect } from 'react'
import Input from './Input'
import Select from './Select'
import { useDispatch, useSelector } from 'react-redux'
import { getPlaces, sendPlace } from './redux/actions'

const AddPlace: React.FC = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getPlaces())
		dispatch(sendPlace())
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
		console.log(values)

		dispatch(sendPlace(values))
	}

	return (
		<Formik initialValues={initialValues} onSubmit={onSubmit}>
			{({ values, handleChange }) => (
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
