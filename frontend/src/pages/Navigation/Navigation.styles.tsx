import styled from 'styled-components'
import { Link, Router } from '@reach/router'
import { Toolbar } from '@material-ui/core'

export const NavBar = styled(Toolbar)`
	display: flex;
	justify-content: space-between;
`

export const NavBarLink = styled(Link)`
	color: white;
	text-decoration: none;

	&:not(:last-child) {
		margin-right: 10px;
	}
`

export const CustomRouter = styled(Router)`
	height: calc(100% - ${props => props.theme.headerHeight});
`

