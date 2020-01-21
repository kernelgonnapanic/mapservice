import { AppBar, IconButton } from '@material-ui/core'
import { RouteComponentProps, Router } from '@reach/router'
import React, { FunctionComponent, useEffect } from 'react'
import { Camera } from 'react-feather'
import PlacesForm from '../AddNewPlace/PlacesForm'
import LoginScreen from '../Authorization/LoginScreen'
import Main from '../MainPage/Main'
import Places from '../Places/Places'
import PlacesList from '../Places/list/PlacesList'
import PlaceSingle from '../Places/single/PlaceSingle'
import { NavBar, NavBarLink } from './Navigation.styles'
import { useDispatch } from 'react-redux'
import { loadUser } from '../redux/actions/authActions'

type Props = {
	component: React.FC,
	setSelectedListElementId?: (
		value: string | ((prevVar: string) => string),
	) => void
} & RouteComponentProps

export const Route: FunctionComponent<Props> = ({ component: Component, ...rest }) => (
	<Component {...rest} />
)

const Navigation: FunctionComponent = () => {

	const dispatch = useDispatch();

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
						<NavBarLink to="/">Dodaj miejsce</NavBarLink>
						<NavBarLink to="/places/list">Lista</NavBarLink>
						<NavBarLink to="login">Login</NavBarLink>
					</div>
				</NavBar>
			</AppBar>
			<Router >
				<Route component={PlacesForm} path="/" />
				<Route component={Main} path="/main" />
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
