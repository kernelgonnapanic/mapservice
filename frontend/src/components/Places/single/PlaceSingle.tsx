import React, { useEffect } from 'react'
import { getSinglePlace } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

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

	}



	return (

		<div>{placeData && placeData.title}</div>
	)



}

export default PlaceSingle
