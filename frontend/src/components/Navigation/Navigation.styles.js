import styled from 'styled-components'
import { Link } from '@reach/router'
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
