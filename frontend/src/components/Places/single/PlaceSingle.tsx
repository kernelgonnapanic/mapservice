import React, { useEffect } from 'react'
import { getSinglePlace } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from '@reach/router'

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


	if (placeData) {
		console.log(placeData.placeType);
	}

	return (<>
		<Link to="/places/list">
			BUDD
		</Link>
		<div>{placeData &&



			<>
				{placeData.placeImage}
				<div>{placeData.title}</div>
				<div>{placeData.address.street}<span>{placeData.address.number}</span></div>
				<span>{placeData.phoneNumber}</span>
				<div>{placeData.coordinates[0].lat}</div>
				<div>{placeData.coordinates[0].long}</div>
				<div>{placeData.description}</div>

			</>
		}
		</div>
	</>
	)



}

export default PlaceSingle
