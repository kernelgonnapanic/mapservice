import { Field, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { Button, Input } from '../../components'
import useStyles, * as S from './styles/LoginForm.styles'
import { useDispatch } from 'react-redux'
import { SignIn } from '../../redux/actions/authActions'
import { Link } from '@reach/router'

const LoginForm: React.FC = () => {
	const dispatch = useDispatch();

	const classes = useStyles();
	const initialValues = {
		login: '',
		password: '',
	}

	const onSubmit = (values: Record<string, any>) => {
		dispatch(SignIn(values))
	}

	const validationSchema = Yup.object().shape({
		login: Yup.string()
			.min(2, 'Nazwa jest zbyt krótka!')
			.max(50, 'Nazwa jest zbyt długa!')
			.required('Wpisz nazwę'),
		password: Yup.string()
			.required('Proszę wpisać hasło')
	})

	return (

		<S.Wrapper>
			<Formik
				initialValues={initialValues}
				onSubmit={onSubmit}
				validationSchema={validationSchema}
			>
				{() => (

					<S.CustomForm className={classes.root}>
						<Field name="login" label="Login" component={Input} />
						<Field
							name="password"
							label="Password"
							type="password"
							component={Input}
						/>
						<Button>Submit</Button>
					</S.CustomForm>


				)}
			</Formik>
			<p>
				Nie posiadasz konta?
				<Link to="/auth/register">Zarejestruj się</Link>
			</p>
		</S.Wrapper>

	)
}

export default LoginForm
