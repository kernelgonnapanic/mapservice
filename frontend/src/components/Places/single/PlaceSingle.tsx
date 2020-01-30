import { Link } from '@reach/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSinglePlace } from '../../redux/actions'
import * as S from './PlaceSingle.styles'
import DefaultPlaceImage from '../../../assets/images/default-place-image.jpg'

interface Props {
	placeId?: string
}

const PlaceSingle: React.FC<Props> = ({ placeId }) => {
	const dispatch = useDispatch()
	const placeData = useSelector(
		(state: any) => state.places.place?.data.data
	)

	useEffect(() => {
		dispatch(getSinglePlace(placeId))
	}, [dispatch])


	return (<>

		<S.Wrapper>
			<Link to="/places/list">
				BACK
			</Link>
			{placeData &&
				<div>
					<S.Image src={placeData.placeImage ? placeData.placeImage : DefaultPlaceImage} />
					<div>{placeData.title}</div>
					<div>{placeData.address.street}<span>{placeData.address.number}</span></div>
					<span>{placeData.phoneNumber}</span>
					<div>{placeData.coordinates[0].lat}</div>
					<div>{placeData.coordinates[0].long}</div>
					<div>{placeData.description}</div>

				</div>
			}
		</S.Wrapper>
	</>
	)



}

export default PlaceSingle
