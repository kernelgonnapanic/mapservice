import React, { FunctionComponent } from 'react'
import { Router, Link, RouteComponentProps } from '@reach/router'
import AddPlace from './AddPlace'
import Main from './Main'

type Props = { component: React.FC } & RouteComponentProps

const Route: FunctionComponent<Props> = ({ component: Component, ...rest }) => (
	<Component {...rest} />
)

const Navigation: FunctionComponent = () => {
	return (
		<>
			<Link to="/">Dodaj miejsce</Link>
			<Link to="main">Main</Link>
			<Router>
				<Route component={AddPlace} path="/" />
				<Route component={Main} path="/main" />
			</Router>
		</>
	)
}

export default Navigation
