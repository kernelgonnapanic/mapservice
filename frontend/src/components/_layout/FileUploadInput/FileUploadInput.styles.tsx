import styled from 'styled-components'

export const Label = styled.label`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1.5px dashed rgb(209, 196, 233);
`;

export const Input = styled.input`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
`

export const Image = styled.img`
    width: 250px;
    height: 250px;
    object-fit: cover;
`;

