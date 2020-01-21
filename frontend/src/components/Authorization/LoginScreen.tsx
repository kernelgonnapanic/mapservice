import React from 'react'
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm'
import * as S from './styles/LoginScreen.styles'

const LoginScreen: React.FC = () => {

    return (
        <>
            <S.Container>
                <LoginForm />
                <RegisterForm />
            </S.Container>
        </>
    )
}

export default LoginScreen
