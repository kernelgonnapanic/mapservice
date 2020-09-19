import styled from 'styled-components'

export const Button = styled.button<{ backgroundColor: string }>`
	cursor: pointer;
	background-color: #ff4081;
	color: #fff;
	-webkit-box-shadow: none;
	-moz-box-shadow: none;
	box-shadow: none;
	text-transform: none;
	font-weight: 600;
	line-height: 42px;
	font-size: ${(props) => props.theme.fontSize.s};
	background-color: ${(props) => props.backgroundColor};
	height: 45px;
	padding: 0 22px;
	border: none;
	border-radius: ${(props) => props.theme.borderRadius.medium};
`
