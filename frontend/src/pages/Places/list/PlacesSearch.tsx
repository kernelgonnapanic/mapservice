import { CircularProgress, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { Search } from 'react-feather'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getPlaces } from '../../../redux/actions/placesActions'
import { cancelGetPlacesRequest } from '../../../redux/api'
import * as S from './PlacesSearch.styles'

interface Props {
	setIsSearching: (value: boolean | ((prevVar: boolean) => boolean)) => void
}

const PlacesSearch: React.FC<Props> = ({ setIsSearching }) => {
	const dispatch = useDispatch()

	const [searchValue, setSearchValue] = useState('')

	const { placesLoading, placeType } = useSelector((state: any) => {
		return {
			placesLoading: state.places.loadingPlaces,
			placeType: state.places.placeType,
		}
	}, shallowEqual)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(searchValue)
		const { value } = e.target

		cancelGetPlacesRequest()

		if (!value.length) {
			setIsSearching(false)

			dispatch(getPlaces(10, 0, null, placeType))

			return
		}

		setIsSearching(true)
		dispatch(getPlaces(10, 0, value, placeType))
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
