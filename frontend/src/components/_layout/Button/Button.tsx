import React from 'react'
import * as S from './Button.styles'

interface Props {
    text?: string
}

const Button: React.FC<Props> = ({ text = 'Wyślij' }) => {
    return <S.Button type="submit">{text}</S.Button>
}

export default Button
