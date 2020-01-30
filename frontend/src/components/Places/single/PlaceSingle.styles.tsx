import styled from 'styled-components'


export const Wrapper = styled.div`
    margin: 0 100px;
    padding: 50px 50px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius:  ${({ theme }) => theme.borderRadius.small + 'px'};
    box-shadow: ${({ theme }) => theme.boxshadow};
`

export const Image = styled.img`
    width: 50px; height: 50px;
`