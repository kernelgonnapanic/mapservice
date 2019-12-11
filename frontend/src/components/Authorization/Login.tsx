import React, { useEffect } from 'react'
import { Field, Form, Formik } from 'formik'
import Input from '../Input'
import * as Yup from 'yup'

const Login: React.FC = () => {
	const validationSchema = Yup.object().shape({
		title: Yup.string()
			.min(2, 'Nazwa jest zbyt krótka!')
			.max(50, 'Nazwa jest zbyt długa!')
			.required('Wpisz nazwę'),
		password: Yup.string()
			.required('Proszę wpisać hasło')
			.min(8, 'Hasło musi zawierać conajmniej 8 liter')
			.matches(
				/((?=.*\d)(?=.*[a-z])(?=.*[A-Z]))/,
				'Hasło musi zawierać conajmniej 1 cyfrę oraz 1 wielką literę',
			),
	})

	const initialValues = {
		title: '',
		password: '',
	}

	const onSubmit = (values: Record<string, any>) => {
		alert('GOT IT BUD')
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
					<Field name="title" label="Login" component={Input} />
					<Field
						name="password"
						label="Password"
						type="password"
						component={Input}
					/>
					<button type="submit">Submit</button>
				</Form>
			)}
		</Formik>
	)
}

export default Login
