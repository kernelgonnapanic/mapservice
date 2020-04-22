import { TextField, CircularProgress } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPlaces } from '../../redux/actions'
import { Search } from 'react-feather'
import * as S from './PlacesSearch.styles'
import { useSelector } from 'react-redux'
import { cancelGetPlacesRequest } from '../../redux/api'

interface Props {
	setIsSearching: (value: boolean | ((prevVar: boolean) => boolean)) => void
}

const PlacesSearch: React.FC<Props> = ({ setIsSearching }) => {
	const dispatch = useDispatch()

	const [searchValue, setSearchValue] = useState('')

	const { placesLoading } = useSelector((state: any) => {
		return {
			placesLoading: state.places.loadingPlaces,
		}
	})

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(searchValue)
		const { value } = e.target

		cancelGetPlacesRequest()

		if (!value.length) {
			setIsSearching(false)

			dispatch(getPlaces(10, 0, null))

			return
		}

		setIsSearching(true)
		dispatch(getPlaces(10, 0, value))
	}

	return (
		<S.SearchWrapper>
			<Search style={{ marginRight: '25px' }} />
			<TextField
				id="search"
				name="search"
				type="search"
				onInput={handleChange}
			/>
			{placesLoading && (
				<CircularProgress
					size={24}
					thickness={4}
					disableShrink
					style={{ marginLeft: '15px' }}
				/>
			)}
		</S.SearchWrapper>
	)
}

export default PlacesSearch
