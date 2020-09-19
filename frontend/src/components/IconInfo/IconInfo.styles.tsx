import styled from "styled-components";

export const Text = styled.span`
    display: flex;
    align-items: center;
    margin-left: 25px;
    color: ${({theme}) => theme.colors.gray}
`

export const Circle = styled.div`
     display: flex;
     color: ${({theme}) => theme.colors.white}};
     justify-content: center;
     align-items: center;
     width: 35px;
     height: 35px;
     border-radius: 25px;
     background-color: ${({theme}) => theme.colors.lightGray}    
`

export const Wrapper = styled.div`
    display: flex;
    margin: 10px
    
`