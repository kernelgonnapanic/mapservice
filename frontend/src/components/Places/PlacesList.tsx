import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPlaces } from '../redux/actions'
import { reducers } from '../redux/reducers'
import { ListElement } from './PlacesList.styles'

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
		_id: string
	}

	return (
		<div>
			{places
				? places.map((place: PlaceValue) => {
						return (
							<ListElement
								onClick={() => {
									console.log('click')
								}}
								key={place._id}
							>
								{place.title}
							</ListElement>
						)
				  })
				: 'Loading...'}
		</div>
	)
}

export default AddPlace
