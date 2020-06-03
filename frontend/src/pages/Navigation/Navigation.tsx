import { AppBar, IconButton } from '@material-ui/core'
import React, { FunctionComponent, useEffect } from 'react'
import { Camera } from 'react-feather'
import { useDispatch, useSelector } from 'react-redux'
import AddNewPlaceForm from '../AddNewPlace/AddNewPlaceForm'
import { default as LoginForm, default as LoginScreen } from '../Authorization/LoginScreen'
import Logout from '../Authorization/Logout'
import RegisterForm from '../Authorization/RegisterForm'
import Main from '../MainPage/Main'
import NotFound from '../NotFound/NotFound'
import PlacesList from '../Places/list/PlacesList'
import Places from '../Places/Places'
import PlaceSingle from '../Places/single/PlaceSingle'
import { loadUser } from '../../redux/actions/authActions'
import * as S from './Navigation.styles'
import ProtectedRoute from './ProtectedRoute'
import Route from './Route'

const Navigation: FunctionComponent = () => {

	const dispatch = useDispatch();
	const isAuthenticated = useSelector(
		(state: any) => state.auth.isAuthenticated
	)

	useEffect(() => {
		dispatch(loadUser())
	}, []);

	return (
		<>
			<AppBar position="static" >
				<S.NavBar>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="menu"
					>
						<Camera />
					</IconButton>
					<div>
						<S.NavBarLink to="">Main</S.NavBarLink>
						<S.NavBarLink to="/places/list">Lista</S.NavBarLink>
						{
							isAuthenticated ?
								<>
									<S.NavBarLink to="/addplace">Dodaj miejsce</S.NavBarLink>
									<Logout />
								</>
								: <S.NavBarLink to="/auth/login">Login</S.NavBarLink>
						}
					</div>
				</S.NavBar>
			</AppBar>
			<S.CustomRouter >
				<Route component={NotFound} path="/error" default />
				<ProtectedRoute component={AddNewPlaceForm} path="/addplace" />
				<Route component={Main} path="/" />
				{!isAuthenticated &&
					<Route component={LoginScreen} path="/auth">
						<Route component={LoginForm} path='/login' />
						<Route component={RegisterForm} path='/register' />
					</Route>

				}
				<Route component={Places} path="/places" >
					<Route component={PlacesList} path="/list/" />
					<Route component={PlaceSingle} path="/single" />
				</Route>
			</S.CustomRouter>
		</>
	)
}

export default Navigation
