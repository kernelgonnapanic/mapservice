import { AppBar } from '@material-ui/core'
import React, { FunctionComponent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddNewPlaceForm from '../AddNewPlace/AddNewPlaceForm'
import {
	default as LoginForm,
	default as LoginScreen,
} from '../Authorization/LoginScreen'
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
import { ReactComponent as LogoSvg } from 'assets/images/siedlce-logo.svg'
import {Button} from 'components'

import { theme } from '../../App'

const Navigation: FunctionComponent = () => {
	const dispatch = useDispatch()
	const isAuthenticated = useSelector(
		(state: any) => state.auth.isAuthenticated,
	)

	useEffect(() => {
		dispatch(loadUser())
	}, [])

	const isActive = ({ isCurrent }: { isCurrent: boolean }) => {
		return isCurrent
			? { style: { color: theme.textColors.darkGray, fontWeight: '700' } }
			: {}
	}

	return (
		<>
			<S.AppBar position="static">
				<S.NavBar>
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<LogoSvg />
						<S.LogoText>Miasto przyjazne</S.LogoText>
					</div>

					<div>
						<S.NavBarLink to="" getProps={isActive}>
							Main
						</S.NavBarLink>
						<S.NavBarLink to="/places/list" getProps={isActive}>
							Lista
						</S.NavBarLink>
						{isAuthenticated ?
							<>
								<S.NavBarLink to="/addplace" getProps={isActive}>
									Dodaj miejsce
								</S.NavBarLink>
								<Logout />
							</>
								: <S.NavBarLink to="/auth/login" getProps={isActive}>
									<Button
										text="Login"
										color={theme.colors.green}
									/>
									</S.NavBarLink>
						}
					</div>
				</S.NavBar>
			</S.AppBar>
			<S.CustomRouter>
				<Route component={NotFound} path="/error" default />
				<ProtectedRoute component={AddNewPlaceForm} path="/addplace" />
				<Route component={Main} path="/" />
				{!isAuthenticated && (
					<Route component={LoginScreen} path="/auth">
						<Route component={LoginForm} path="/login" />
						<Route component={RegisterForm} path="/register" />
					</Route>
				)}
				<Route component={Places} path="/places">
					<Route component={PlacesList} path="/list" />
					<Route component={PlaceSingle} path="/list/:_id" />
				</Route>
			</S.CustomRouter>
		</>
	)
}

export default Navigation
