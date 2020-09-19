import styled from 'styled-components'

export const BarWrapper = styled.div`
	display: flex;
	align-items: center;
	margin: 0 50px;
	height: ${(props) => props.theme.barHeight};
`

export const BarItem = styled.div<{ color: string; color2: string }>`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 5px;
	width: 40px;
	height: 40px;
	background: linear-gradient(
		-90deg,
		${(props) => props.color},
		${(props) => props.color2}
	);

	border-radius: 50%;

	svg {
		max-width: 25px;
	}
`

export const Button = styled.button`
	border: none;
	background: none;
`
