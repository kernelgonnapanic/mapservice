import React from 'react'

interface Props {
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
	value: string
	name: string
	label: string
}

const Textarea: React.FunctionComponent<Props> = ({
	onChange,
	value,
	name,
	label,
}) => {
	return (
		<textarea
			onChange={onChange}
			value={value}
			name={name}
			// label={label}
		></textarea>
	)
}

export default Textarea
