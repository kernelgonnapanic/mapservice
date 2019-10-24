import React, { useReducer } from 'react'
import { Input, Textarea } from './_layout'

const AddPlace: React.FC = () => {
	const [inputsValue, setInputsValue] = useReducer(
		(state, newState) => ({ ...state, ...newState }),
		{
			title: '',
			street: '',
			number: '',
			//IMAGE UPLOAD TO DO
			placeType: '', //SELECT
			phoneNumber: '',
			description: '', //TEXTAREA
			lat: '',
			long: '',
		},
	)

	const handleSubmit = (e: React.SyntheticEvent): void => {
		e.preventDefault()
		console.log(inputsValue)
	}

	const handleInputChange = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>,
	): void => {
		setInputsValue({
			[e.target.name]: e.target.value,
		})
	}

	const {
		title,
		street,
		number,
		placeType,
		phoneNumber,
		description,
		lat,
		long,
	} = inputsValue

	return (
		<div>
			<h1>Dodaj placówkę</h1>
			<form onSubmit={handleSubmit}>
				<Input
					onChange={handleInputChange}
					value={title}
					name="title"
					label="Nazwa"
				/>
				<Input
					onChange={handleInputChange}
					value={street}
					name="street"
					label="Ulica"
				/>
				<Input
					onChange={handleInputChange}
					value={number}
					name="number"
					label="Numer mieszkania"
				/>
				<Input
					onChange={handleInputChange}
					value={phoneNumber}
					name="phoneNumber"
					label="Numer telefonu"
				/>
				<Input
					onChange={handleInputChange}
					value={lat}
					name="lat"
					label="Szerkość geograficzna"
				/>
				<Input
					onChange={handleInputChange}
					value={long}
					name="long"
					label="Długość geograficzna"
				/>
				<Textarea
					onChange={handleInputChange}
					value={description}
					name="description"
					label="Opis"
				/>
				<button>Submit</button>
			</form>
		</div>
	)
}

export default AddPlace
