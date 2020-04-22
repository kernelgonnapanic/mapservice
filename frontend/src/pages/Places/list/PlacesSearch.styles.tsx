import styled from 'styled-components'
import { TextField } from '@material-ui/core'

export const SearchWrapper = styled.div`
	display: flex;
	align-items: center;
	height: ${({ theme }) => theme.searchBarHeight};
	padding: 0 45px 10px 45px;
`
