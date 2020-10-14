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
import { Button, LanguageSettings } from 'components'

import { theme } from '../../App'
import { useTranslation } from 'react-i18next'

const Navigation: FunctionComponent = () => {
	const { t } = useTranslation()
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
					<S.CenterWrapper>
						<LogoSvg />
						<S.LogoText>{t('friendlyCity')}</S.LogoText>
					</S.CenterWrapper>
					<S.CenterWrapper>
						<S.NavBarLink to="" getProps={isActive}>
							{t('main')}
						</S.NavBarLink>
						<S.NavBarLink to="/places/list" getProps={isActive}>
							{t('geoportal')}
						</S.NavBarLink>
						{isAuthenticated ? (
							<>
								<S.NavBarLink to="/addplace" getProps={isActive}>
									{t('addPlace')}
								</S.NavBarLink>
								<Logout />
							</>
						) : (
							<S.NavBarLink to="/auth/login" getProps={isActive}>
								<Button text="Login" color={theme.colors.green} />
							</S.NavBarLink>
						)}
						<LanguageSettings />
					</S.CenterWrapper>
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
