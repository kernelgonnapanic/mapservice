import styled from 'styled-components'
import { Link, Router } from '@reach/router'
import { AppBar as Bar, Toolbar } from '@material-ui/core'

export const AppBar = styled(Bar)`
	background: ${({ theme }) => theme.colors.white};
`

export const NavBar = styled(Toolbar)`
	display: flex;
	justify-content: space-between;
`

export const NavBarLink = styled(Link)`
	color: ${({ theme }) => theme.textColors.lightGray};
	text-decoration: none;
	padding: 0 10px;

	&:not(:last-child) {
		margin-right: 10px;
	}
`

export const CenterWrapper = styled.div`
	display: flex;
	align-items: center;
`

export const CustomRouter = styled(Router)`
	height: calc(100% - ${(props) => props.theme.headerHeight});
`
export const LogoText = styled.p`
	margin-bottom: 12px;
	color: ${({ theme }) => theme.textColors.lightGray};
	font-size: ${({ theme }) => `${theme.fontSize.m}`};
`
