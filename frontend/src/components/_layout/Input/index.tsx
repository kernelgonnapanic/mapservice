import React from 'react'

interface Props {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	value: string
	name: string
	placeholder: string
}

const Input: React.FunctionComponent<Props> = ({
	onChange,
	value,
	name,
	placeholder,
}) => {
	return (
		<input
			onChange={onChange}
			value={value}
			name={name}
			placeholder={placeholder}
		></input>
	)
}

export default Input
