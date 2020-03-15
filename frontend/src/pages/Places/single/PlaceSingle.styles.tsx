import styled from 'styled-components'


export const Wrapper = styled.div`
    margin: 25px 50px;
    padding: 0 50px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius:  ${({ theme }) => theme.borderRadius.small + 'px'};
    box-shadow: ${({ theme }) => theme.boxshadow};
`;

export const Image = styled.img`
    width: 50px; 
    height: 50px;
    padding: 0 50px;
`;

export const Top = styled.div`
    padding: 25px 0 75px 0;
    border-bottom: 1px solid ${({theme}) => theme.colors.gray};  
`;

export const Bottom = styled.div`
      display: flex;
      flex-direction: column;
      padding-bottom: 50px;
`;

export const Element = styled.span`
    padding: 10px 0;
    
`;

