import { AppBar, IconButton } from '@material-ui/core'
import { RouteComponentProps, Router } from '@reach/router'
import React, { FunctionComponent } from 'react'
import { Camera } from 'react-feather'
import PlacesForm from '../Places/AddNewPlace/PlacesForm'
import Login from '../Authorization/Login'
import Main from '../MainPage/Main'
import Places from '../Places/Places'
import PlacesList from '../Places/list/PlacesList'
import PlaceSingle from '../Places/single/PlaceSingle'
import { NavBar, NavBarLink } from './Navigation.styles'

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
						<NavBarLink to="login">Login</NavBarLink>
						<NavBarLink to="/">Dodaj miejsce</NavBarLink>
						<NavBarLink to="main">Main</NavBarLink>
						<NavBarLink to="/places/list">Lista</NavBarLink>
					</div>
				</NavBar>
			</AppBar>
			<Router >
				<Route component={PlacesForm} path="/" />
				<Route component={Main} path="/main" />
				<Route component={Login} path="/login" />
				<Route component={Places} path="/places" >
					<Route component={PlacesList} path="/list" />
					<Route component={PlaceSingle} path="/single" />
				</Route>
			</Router>
		</>
	)
}

export default Navigation
