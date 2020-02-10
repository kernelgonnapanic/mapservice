import { Link } from '@reach/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPlaces } from '../../redux/actions/placesActions'
import * as S from './PlacesList.styles'
import PlacesListElement from './PlacesListElement'
import { getIt } from '../../redux/selectors/placesSelectors'

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
		(state: any) => getIt(state),
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
							<Link to={_id} style={{ textDecoration: "none" }} >
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
