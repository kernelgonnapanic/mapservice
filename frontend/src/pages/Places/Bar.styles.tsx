import styled from 'styled-components'

export const BarWrapper = styled.div`
	display: flex;
	align-items: center;
	margin: 0 50px;
	height: ${props => props.theme.barHeight};
`

export const BarItem = styled.div`
	margin: 0 15px;
`
