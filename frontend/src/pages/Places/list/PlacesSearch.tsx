import { TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPlaces } from '../../redux/actions'

interface Props {
	setSearching: () => void
}

//@ts-ignore
const PlacesSearch: React.FC<Props> = ({ setIsSearching }) => {
	const dispatch = useDispatch()

	const [searchValue, setSearchValue] = useState('')

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(searchValue)

		if (!e.target.value.length) {
			setIsSearching(false)

			dispatch(getPlaces(10, 0, null))

			return
		}

		setIsSearching(true)

		dispatch(getPlaces(10, 0, e.target.value))
	}

	return (
		<TextField
			variant="outlined"
			id="email"
			name="email"
			type="email"
			style={{ marginRight: '25px' }}
			onChange={handleChange}
		/>
	)
}

export default PlacesSearch
