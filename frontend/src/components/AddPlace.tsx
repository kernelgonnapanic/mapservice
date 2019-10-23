import React, { useReducer } from 'react'
import Input from './_layout/Input/index'
import { any } from 'prop-types'

const AddPlace: React.FC = () => {
	const [inputValue, setInputsValue] = useReducer(
		(state, newState) => ({ ...state, ...newState }),
		{
			title: '',
			address: '',
		},
	)

	const handleSubmit = (e: React.SyntheticEvent): void => {
		e.preventDefault()
		console.log(inputValue)
	}

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement>,
	): void => {
		setInputsValue({
			[e.target.name]: e.target.value,
		})
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<Input
					onChange={handleInputChange}
					value={inputValue.title}
					name="title"
					placeholder="title"
				/>
				<Input
					onChange={handleInputChange}
					value={inputValue.address}
					name="address"
					placeholder="address"
				/>
				<button>Submit</button>
			</form>
		</div>
	)
}

export default AddPlace
