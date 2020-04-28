import React, { useEffect, useState, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { extractPlaces } from '../../pages/redux/selectors/placesSelectors'
import { getPlaces } from '../../pages/redux/actions'

interface Props {
	pageNumber?: number
}

//@ts-ignore
const usePlaces: React.FC<Props> = (
	//@ts-ignore
	pageNumber = 0,
	isSearch = false,
) => {
	const dispatch = useDispatch()

	const { places, placesLoading, hasMoreData, placeType } = useSelector(
		(state: any) => {
			return {
				places: extractPlaces(state),
				placesLoading: state.places.loadingPlaces,
				placeType: state.places.placeType,
				hasMoreData: state.places.hasMoreData,
			}
		},
		shallowEqual,
	)

	useEffect(() => {
		if (hasMoreData && !isSearch) {
			dispatch(getPlaces(10, pageNumber, isSearch, placeType))
		}
	}, [pageNumber, hasMoreData])

	return [places, placesLoading, hasMoreData]
}

export default usePlaces
