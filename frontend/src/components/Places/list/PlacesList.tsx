import { Link } from '@reach/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPlaces } from '../../redux/actions'
import * as S from './PlacesList.styles'
import PlacesListElement from './PlacesListElement'

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


	return (
		<S.ListWrapper>

			{places
				? places.map((place: PlaceValue) => {
					const { title, _id, placeImage } = place

					return (
						<>
							<Link to={_id} >
								<PlacesListElement key={_id} _id={_id} title={title} placeImage={placeImage} />
							</Link>
						</>

					)
				})
				: 'Loading...'}
		</S.ListWrapper>
	)
}

export default PlacesList
