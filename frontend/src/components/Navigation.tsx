import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Router, Link, RouteComponentProps } from '@reach/router'
import AddPlace from './AddPlace'
import Main from './Main'
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import { Camera } from 'react-feather'

type Props = { component: React.FC } & RouteComponentProps

const Route: FunctionComponent<Props> = ({ component: Component, ...rest }) => (
	<Component {...rest} />
)

const Navigation: FunctionComponent = () => {
	const NavBar = styled(Toolbar)`
		display: flex;
		justify-content: space-between;
	`

	const NavBarLink = styled(Link)`
		color: white;
		text-decoration: none;

		&:not(:last-child) {
			margin-right: 10px;
		}
	`

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
						<NavBarLink to="/">Dodaj miejsce</NavBarLink>
						<NavBarLink to="main">Main</NavBarLink>
					</div>
				</NavBar>
			</AppBar>

			<Router>
				<Route component={AddPlace} path="/" />
				<Route component={Main} path="/main" />
			</Router>
		</>
	)
}

export default Navigation
