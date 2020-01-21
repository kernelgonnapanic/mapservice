import { Field, Formik, Form } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { Button, Input } from '../_layout'
import useStyles, * as S from './styles/LoginForm.styles'
import { useDispatch } from 'react-redux'
import { SignUpUser } from '../redux/actions/authActions'

const RegisterForm: React.FC = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const initialValues = {
        login: '',
        email: '',
        password: '',
    }

    const onSubmit = (values: Record<string, any>) => {
        console.log(values)
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
            .email('Niepoprawny email')
    })

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {() => (
                <Form className={classes.root}>
                    <Field name="login" label="Login" component={Input} />
                    <Field name="email" label="Email" component={Input} />
                    <Field
                        name="password"
                        label="Password"
                        type="password"
                        component={Input}
                    />
                    <Button>Submit</Button>
                </Form>
            )}
        </Formik>
    )
}

export default RegisterForm
