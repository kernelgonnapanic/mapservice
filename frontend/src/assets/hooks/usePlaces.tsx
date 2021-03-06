import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { extractPlaces } from '../../redux/selectors/placesSelectors'
import { getPlaces } from '../../redux/actions/placesActions'

interface Props {
	pageNumber?: any
}

//@ts-ignore
const usePlaces: React.FC<Props> = (
	//@ts-ignore
	pageNumber = 0,
	isSearch = false,
) => {
	const dispatch = useDispatch()

	const {
		places,
		placesLoading,
		hasMoreData,
		placeType,
		firstPage,
	} = useSelector((state: any) => {
		return {
			places: extractPlaces(state),
			placesLoading: state.places.loadingPlaces,
			placeType: state.places.placeType,
			hasMoreData: state.places.hasMoreData,
			firstPage: state.places.firstPage,
		}
	}, shallowEqual)

	useEffect(() => {
		if (firstPage) {
			dispatch(getPlaces(10, 0, isSearch, placeType))
			return
		}

		if (hasMoreData && !isSearch) {
			dispatch(getPlaces(10, pageNumber, isSearch, placeType))
		}
	}, [pageNumber, hasMoreData, placeType])

	return [places, placesLoading, hasMoreData, placeType]
}

export default usePlaces
