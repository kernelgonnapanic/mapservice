import React from 'react'
import * as S from './Button.styles'

interface Props {
	text?: string
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
	type?: 'button' | 'submit' | 'reset' | undefined
	color?: string
}

const Button: React.FC<Props> = ({
	text = 'Wyślij',
	onClick = () => {},
	type = 'button',
	color = '',
}) => {
	return (
		<S.Button
			onClick={onClick}
			type={type}
			backgroundColor={color}
		>

			{text}
		</S.Button>
	)
}

export default Button
