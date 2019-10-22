import React from 'react'
import * as Yup from 'yup'
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik'

interface FormValues {
	title: string
	password: string
}

const InnerForm = (props: FormikProps<FormValues>) => {
	const { touched, errors, isSubmitting } = props
	return (
		<Form>
			<Field type="text" name="title" placeholder="Nazwa" />
			<Field type="text" name="street" placeholder="Ulica" />

			<button type="submit" disabled={isSubmitting}>
				Submit
			</button>
		</Form>
	)
}

interface MyFormProps {
	initialEmail?: string
	message: string
}

const MyForm = withFormik<MyFormProps, FormValues>({
	mapPropsToValues: props => {
		return {
			email: props.initialEmail || '',
			password: '',
		}
	},

	handleSubmit: values => {
		console.log(values)
	},
})(InnerForm)

const addPlace = () => <MyForm message="Sign up" />

export default addPlace
