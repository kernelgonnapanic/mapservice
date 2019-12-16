import { AppBar, IconButton } from '@material-ui/core'
import { RouteComponentProps, Router } from '@reach/router'
import React, { FunctionComponent } from 'react'
import { Camera } from 'react-feather'
import PlacesForm from '../Places/form/PlacesForm'
import Login from '../Authorization/Login'
import Main from '../Main'
import Places from '../Places/Places'
import PlacesList from '../Places/list/PlacesList'
import { NavBar, NavBarLink } from './Navigation.styles'

type Props = { component: React.FC } & RouteComponentProps

const Route: FunctionComponent<Props> = ({ component: Component, ...rest }) => (
	<Component {...rest} />
)

const Navigation: FunctionComponent = () => {
	return (
		<>
			<AppBar position="static">
				<NavBar>
					<IconButton
						edge="start"
						// className={classes.menuButton}
						color="inherit"
						aria-label="menu"
					>
						<Camera />
					</IconButton>
					<div>
						<NavBarLink to="login">Login</NavBarLink>
						<NavBarLink to="/">Dodaj miejsce</NavBarLink>
						<NavBarLink to="main">Main</NavBarLink>
						<NavBarLink to="places">Lista</NavBarLink>
					</div>
				</NavBar>
			</AppBar>
			<Router>
				<Route component={PlacesForm} path="/" />
				<Route component={Main} path="/main" />
				<Route component={Login} path="/login" />
				<Route component={Places} path="/places" />
				<Route component={PlacesList} path="/placeslist" />
			</Router>
		</>
	)
}

export default Navigation
