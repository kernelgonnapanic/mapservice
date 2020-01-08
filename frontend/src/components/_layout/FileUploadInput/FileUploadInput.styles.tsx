import styled from 'styled-components'

export const Label = styled.label`
    position: relative;
    display: flex;
    height: 250px;
    width: 75%;
    justify-content: center;
    align-items: center;
    border: 1.5px dashed rgb(209, 196, 233);
`;

export const Input = styled.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
`

export const Image = styled.img`
    position: absolute;
    width: 100%;
    padding: 25px;
    padding: 25px 25px 50px 25px;
    height: 100%;
    object-fit: cover;
`;

export const FileTitle = styled.p`
    position: absolute;
    bottom: 25px;
    margin: 0;
`

export const Button = styled.button`
    position: absolute;
    bottom: 10px;
    right: 0;
    background: none;
    border: none;
   
`

