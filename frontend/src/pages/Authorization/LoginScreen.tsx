import React from 'react'
import styled from 'styled-components'
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm'
import * as S from './styles/LoginScreen.styles'
import { Router } from '@reach/router'
import Route from '../Navigation/Route'

const LoginScreen: React.FC = () => {

    const StyledRouter = styled(Router)`

        height: '100%'

    `

    return (
        <>
            <S.Container>
                <StyledRouter>
                    <Route component={LoginForm} path='/login' />
                    <Route component={RegisterForm} path='/register' />
                </StyledRouter>

            </S.Container>
        </>
    )
}

export default LoginScreen
