import React from 'react'
import { Text, Circle, Wrapper } from './IconInfo.styles'
import { Search } from 'react-feather'

interface Props {
	icon: JSX.Element
	text?: string | number | undefined
}

const IconInfo: React.FC<Props> = ({ icon, text }) => {
	return (
		<Wrapper>
			<Circle>{icon}</Circle>
			<Text>{text}</Text>
		</Wrapper>
	)
}

export default IconInfo
