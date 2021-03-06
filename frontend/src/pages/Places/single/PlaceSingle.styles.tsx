import styled from 'styled-components'
import { Link } from '@reach/router'

export const Wrapper = styled.div`
	margin: 25px 50px;
	padding: 0;
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: ${({ theme }) => theme.borderRadius.small + 'px'};
	box-shadow: ${({ theme }) => theme.boxshadow};
	overflow: hidden;
`

export const Image = styled.img`
	width: 50px;
	height: 50px;
	padding: 0 50px;
`

export const Top = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	min-height: 170px;
	padding: 0 100px 0 50px;
`

export const TopPlaceType = styled.div`
	position: absolute;
	right: 5px;
	color: ${({ theme }) => theme.colors.white};
	bottom: 5px;
`

export const HeaderTitle = styled.h2`
	color: ${({ theme }) => theme.colors.white};
`

export const Bottom = styled.div`
	display: flex;
	padding: 25px 50px;
	flex-direction: column;
`

export const NavigateBack = styled(Link)`
	text-decoration: none;
	margin-left: 35px;
	display: flex;
	height: ${({ theme }) => theme.searchBarHeight};
	align-items: center;
`

export const DescriptionHeader = styled.div`
	font-weight: bold;
	color: ${({ theme }) => theme.colors.gray};
	margin: 25px 50px;
`

export const Description = styled.div`
	color: ${({ theme }) => theme.colors.gray};
	margin: 0 50px 50px 50px;
`
