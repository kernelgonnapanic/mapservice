import { Link } from '@reach/router'
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPlaces } from '../../redux/actions'
import PlacesListElement from './PlacesListElement'
import * as S from './PlacesList.styles'

interface Props {
	setSelectedListElementId?: (
		value: string | ((prevVar: string) => string),
	) => void
}

const PlacesList: React.FC<Props> = ({ setSelectedListElementId }) => {
	interface PlaceValue {
		title: string
		_id: string
		placeImage: string
	}

	const dispatch = useDispatch()

	const places = useSelector(
		(state: any) => state.places.list?.data.data,
	)

	useEffect(() => {
		dispatch(getPlaces())
	}, [dispatch])


	const handleClick = useCallback((id) => {
		setSelectedListElementId!(id);
	}, [])


	return (
		<S.ListWrapper>
			LISTA
			{places
				? places.map((place: PlaceValue) => {
					const { title, _id, placeImage } = place

					return (
						<>
							<Link to="single">
								<PlacesListElement handleClick={handleClick} key={_id} _id={_id} title={title} placeImage={placeImage} />
							</Link>
						</>

					)
				})
				: 'Loading...'}
		</S.ListWrapper>
	)
}

export default PlacesList
