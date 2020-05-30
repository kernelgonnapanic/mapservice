import styled from 'styled-components'

export const PopUp = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px;
`

export const PopUpTitle = styled.span`
	font-weight: bold;
	font-size: ${({ theme }) => theme.fontSize.m}px;
	padding-bottom: 5px;
`

export const PopUpAddress = styled.div`
	padding-bottom: 2px;
`
