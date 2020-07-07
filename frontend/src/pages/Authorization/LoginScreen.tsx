import React from 'react'
import styled from 'styled-components'
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm'
import * as S from './styles/LoginScreen.styles'
import {Router} from '@reach/router'
import Route from '../Navigation/Route'
import LoginImage from '../../assets/images/login.svg';

const LoginScreen: React.FC = () => {

    return (
        <>
            <S.Container>
                <Router>
                    <Route component={LoginForm} path='/login'/>
                    <Route component={RegisterForm} path='/register'/>
                </Router>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <img src={LoginImage} alt="Image" width="75%" height="75%" style={{marginBottom: "200px"}}/>
                </div>
            </S.Container>
        </>
    )
}

export default LoginScreen
