import styled from 'styled-components'

export const BarWrapper = styled.div`
	display: flex;
	align-items: center;
	margin: 0 50px;
	height: ${(props) => props.theme.barHeight};
`

export const BarItem = styled.div<{ color: string, color2: string }>`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 15px;
	height: 50px;
      background: linear-gradient(
        -90deg, ${(props) => props.color}, ${props => props.color2}
      );
	width: 50px;
	border-radius: 50%;
`

export const Button = styled.button`
	border: none;
	background: none;
`
