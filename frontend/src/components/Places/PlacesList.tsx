import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPlaces } from '../redux/actions'
import { reducers } from '../redux/reducers'

const AddPlace: React.FC = () => {
	const dispatch = useDispatch()

	const places = useSelector(
		(state: ReturnType<typeof reducers>) => state.places.data,
	)

	useEffect(() => {
		dispatch(getPlaces())
	}, [dispatch])

	interface PlaceValue {
		title: string
	}

	return (
		<div>
			TEST
			{places &&
				places.map((place: PlaceValue) => {
					return `<div>${place.title}</div>>`
				})}
		</div>
	)
}

export default AddPlace
