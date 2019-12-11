import React, { FunctionComponent } from 'react'
import { NavBar, NavBarLink } from './Navigation.styles'
import { Router, RouteComponentProps } from '@reach/router'
import AddPlace from '../AddPlace'
import Main from '../Main'
import PlacesList from '../Places/PlacesList'
import { AppBar, IconButton } from '@material-ui/core'
import { Camera } from 'react-feather'
import Login from '../Authorization/Login'

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
						<NavBarLink to="placeslist">Lista</NavBarLink>
					</div>
				</NavBar>
			</AppBar>

			<Router>
				<Route component={AddPlace} path="/" />
				<Route component={Main} path="/main" />
				<Route component={Login} path="/login" />
				<Route component={PlacesList} path="/placeslist" />
			</Router>
		</>
	)
}

export default Navigation
