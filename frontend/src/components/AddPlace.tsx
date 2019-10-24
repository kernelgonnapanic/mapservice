import React, { useReducer } from 'react'
import { Input, Textarea, Button } from './_layout'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		paper: {
			padding: theme.spacing(2),
			textAlign: 'center',
			color: theme.palette.text.secondary,
		},
	}),
)

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
				<Grid container spacing={1}>
					<Grid item xs={2}>
						<Input
							onChange={handleInputChange}
							value={title}
							name="title"
							label="Nazwa"
						/>
					</Grid>
					<Grid item xs={2}>
						<Input
							onChange={handleInputChange}
							value={street}
							name="street"
							label="Ulica"
						/>
					</Grid>
					<Grid item xs={2}>
						<Input
							onChange={handleInputChange}
							value={number}
							name="number"
							label="Numer mieszkania"
						/>
					</Grid>
					<Grid item xs={2}>
						<Input
							onChange={handleInputChange}
							value={phoneNumber}
							name="phoneNumber"
							label="Numer telefonu"
						/>
					</Grid>
					<Grid item xs={2}>
						<Input
							onChange={handleInputChange}
							value={lat}
							name="lat"
							label="Szerkość geograficzna"
						/>
					</Grid>
					<Grid item xs={2}>
						<Input
							onChange={handleInputChange}
							value={long}
							name="long"
							label="Długość geograficzna"
						/>
					</Grid>
					<Grid item xs={4}>
						<Textarea
							onChange={handleInputChange}
							value={description}
							name="description"
							label="Opis"
						/>
					</Grid>
					<Grid item xs={12}>
						<Button>Submit</Button>
					</Grid>
				</Grid>
			</form>
		</div>
	)
}

export default AddPlace
