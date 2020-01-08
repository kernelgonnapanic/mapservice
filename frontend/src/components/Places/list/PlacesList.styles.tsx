import styled from 'styled-components'


export const ListWrapper = styled.div`
	overflow-y: scroll;
	height: 90vh;

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
    margin: 0 10px 12px 10px;
    padding: 0;
    background-color: ${props => props.theme.colors.white};
    display: flex;
	align-items: center;
`
