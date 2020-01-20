import React from 'react'
import LoginForm from './LoginForm';
import * as S from './styles/LoginScreen.styles'

const LoginScreen: React.FC = () => {

    return (
        <>
            <S.Container>
                <LoginForm />
                <div>Screen</div>
            </S.Container>
        </>
    )
}

export default LoginScreen
