import { AppBar, IconButton } from '@material-ui/core'
import { RouteComponentProps, Router } from '@reach/router'
import React, { FunctionComponent, useEffect } from 'react'
import { Camera } from 'react-feather'
import PlacesForm from '../AddNewPlace/PlacesForm'
import LoginScreen from '../Authorization/LoginScreen'
import Main from '../MainPage/Main'
import Places from '../Places/Places'
import NotFound from '../NotFound/NotFound'
import PlacesList from '../Places/list/PlacesList'
import PlaceSingle from '../Places/single/PlaceSingle'
import { NavBar, NavBarLink } from './Navigation.styles'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from '../redux/actions/authActions'
import Logout from '../Authorization/Logout'
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
			<AppBar position="static">
				<NavBar>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="menu"
					>
						<Camera />
					</IconButton>
					<div>
						<NavBarLink to="main">Main</NavBarLink>
						<NavBarLink to="/places/list">Lista</NavBarLink>
						{
							isAuthenticated ?
								<>
									<NavBarLink to="/addplace">Dodaj miejsce</NavBarLink>
									<Logout />
								</>
								: <NavBarLink to="login">Login</NavBarLink>
						}
					</div>
				</NavBar>
			</AppBar>
			<Router >
				<Route component={NotFound} path="/error" default />
				<ProtectedRoute component={PlacesForm} path="/addplace" />
				<Route component={Main} path="/" />
				<Route component={LoginScreen} path="/login" />
				<Route component={Places} path="/places" >
					<Route component={PlacesList} path="/list" />
					<Route component={PlaceSingle} path="/single" />
				</Route>
			</Router>
		</>
	)
}

export default Navigation
