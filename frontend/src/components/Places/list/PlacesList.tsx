import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPlaces } from '../../redux/actions'
import { reducers } from '../../redux/reducers'
import * as S from './PlacesList.styles'

interface Props {
	setSelectedListElementId?: (
		value: string | ((prevVar: string) => string),
	) => void
}

const AddPlace: React.FC<Props> = ({ setSelectedListElementId }) => {
	interface PlaceValue {
		title: string
		_id: string
	}

	const dispatch = useDispatch()

	const places = useSelector(
		(state: ReturnType<typeof reducers>) => state.places.list?.data.data,
	)

	useEffect(() => {
		dispatch(getPlaces())
	}, [dispatch])

	return (
		<div>
			{places
				? places.map((place: PlaceValue) => {
						const { title, _id } = place

						return (
							<S.ListElement
								onClick={() => setSelectedListElementId!(_id)}
								key={_id}
							>
								{title}
							</S.ListElement>
						)
				  })
				: 'Loading...'}
		</div>
	)
}

export default AddPlace
