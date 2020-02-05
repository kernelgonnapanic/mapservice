import styled from 'styled-components'

export const BarWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 0 25px;
    height: ${props => props.theme.barHeight};
    border-bottom: 1px solid #000000;  
`