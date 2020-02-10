import styled from 'styled-components'


export const ListWrapper = styled.div`
	overflow-y: scroll;
	height: calc(100vh - ${({ theme }) => theme.headerHeight} - ${({ theme }) => theme.barHeight});

`

export const Image = styled.img`
	width: 50px;
	height: 50px;
	object-fit: cover;
`

export const ListElement = styled.div`
	cursor: pointer;
    border-bottom: 2px solid ${props => props.theme.colors.gray};
    height: 100px;
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
    color: ${props => props.theme.colors.mainDark};
    font-size: ${props => props.theme.fontSize.l};
    font-weight: 700;
    margin-bottom: 20px;
`

export const Description = styled.div`
  color: ${props => props.theme.colors.mediumGray};

`
