import React from 'react'
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm'
import * as S from './styles/LoginScreen.styles'
import { Router } from '@reach/router'
import Route from '../Navigation/Route'

const LoginScreen: React.FC = () => {

    return (
        <>
            <S.Container>
                <Router>
                    <Route component={LoginForm} path='/login' />
                    <Route component={RegisterForm} path='/register' />
                </Router>

            </S.Container>
        </>
    )
}

export default LoginScreen
