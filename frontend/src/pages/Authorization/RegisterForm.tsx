import { Field, Formik, Form } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { Button, Input, GoBack } from '../../components'
import useStyles, * as S from './styles/RegisterForm.styles'
import { useDispatch } from 'react-redux'

import { SignUpUser } from '../../redux/actions/authActions'
import { Link } from '@reach/router'

const RegisterForm: React.FC = () => {
	const dispatch = useDispatch()
	const classes = useStyles()

	const initialValues = {
		login: '',
		email: '',
		password: '',
	}

	const onSubmit = (values: Record<string, any>) => {
		dispatch(SignUpUser(values))
	}

	const validationSchema = Yup.object().shape({
		login: Yup.string()
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
		email: Yup.string()
			.required('Proszę podać adres email')
			.min(5, 'Email jest zbyt krótki')
			.email('Niepoprawny email'),
	})

	return (
		<>
			<GoBack customStyle={{ margin: '25px' }} />
			<Formik
				initialValues={initialValues}
				onSubmit={onSubmit}
				validationSchema={validationSchema}
			>
				{() => (
					<S.CustomForm className={classes.root}>
						<Field name="login" label="Login" component={Input} />
						<Field name="email" label="Email" component={Input} />
						<Field
							name="password"
							label="Password"
							type="password"
							component={Input}
						/>
						<Button type="submit">Submit</Button>
					</S.CustomForm>
				)}
			</Formik>
		</>
	)
}

export default RegisterForm
