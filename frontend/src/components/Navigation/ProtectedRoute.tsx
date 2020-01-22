import { RouteComponentProps, Redirect } from '@reach/router'
import React from 'react'
import { useSelector } from 'react-redux'

type Props = {
	component: React.FC,

} & RouteComponentProps

const ProtectedRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
	const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated)

	return isAuthenticated ? <Component {...rest} /> : <Redirect to="/error" noThrow />
}

export default ProtectedRoute


