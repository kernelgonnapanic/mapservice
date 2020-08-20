import React from 'react'
import * as S from './Button.styles'

interface Props {
    text?: string,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
    type?: "button" | "submit" | "reset" | undefined
}


const Button: React.FC<Props> = ( {
                                     text= "Wyślij",
                                     onClick = () => {},
                                     type= "button"
                                 }) => {

    return <S.Button
        onClick={onClick}
        type={type}
    >
        {text}
    </S.Button>
}

export default Button
