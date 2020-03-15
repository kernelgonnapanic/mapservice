import styled from 'styled-components'


export const ListWrapper = styled.div`
	overflow-y: scroll;
	height: calc(100vh - ${({ theme }) => theme.headerHeight} - ${({ theme }) => theme.barHeight});
       padding: 0 50px;
`

export const Image = styled.img`
	width: 50px;
	height: 50px;
	object-fit: cover;
`

export const ListElement = styled.div`
	cursor: pointer;
    border-radius:  ${props => props.theme.borderRadius.small + 'px'};
    box-shadow: ${props => props.theme.boxshadow};
    height: 75px;
    margin: 25px 10px 12px 10px;
    padding: 0 25px;
    background-color: ${props => props.theme.colors.white};
    display: flex;
    justify-content: space-between;
	align-items: center;
`

export const ListElementContent = styled.div`
    display: flex;
    flex-direction: column;
`

export const Title = styled.div`
    color: ${({theme}) => theme.colors.black}
    text-decoration:none
`

export const Description = styled.div`
    color: ${({theme}) => theme.colors.gray}
    text-decoration: none;

`
