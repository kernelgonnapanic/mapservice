import { Field, Formik, Form } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { Button, Input } from '../_layout'
import useStyles, * as S from './styles/LoginForm.styles'

const RegisterForm: React.FC = () => {

    const classes = useStyles();
    const initialValues = {
        title: '',
        password: '',
    }

    const onSubmit = (values: Record<string, any>) => {
        alert('GOT IT BUD')
        console.log(values)
    }

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
        email: Yup.string()
            .email('Niepoprawny format')
    })

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {() => (
                <Form className={classes.root}>
                    <Field name="title" label="Login" component={Input} />
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
