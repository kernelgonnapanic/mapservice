import React from 'react'
import * as Leaflet from 'leaflet'
import { Marker, Popup } from 'react-leaflet'
import * as S from './PlacesMap.styles'
import { getMarkerIcon } from '../../../assets/helpers/getMarkerIcon'
import { updateCoordinates } from '../../../redux/actions/globalActions'
import { useDispatch } from 'react-redux'
import {getSinglePlace} from "../../../redux/actions/placesActions";
import {navigate} from "@reach/router";

interface Props {
	marker: {
		title: string
		coordinates: any
		_id: string
		address: {
			city: string
			street: string
			number: number
		}
		phoneNumber: number
		placeImage: string
		placeType: string
	}
	currentMarker?: boolean
}

const PlacesMapMarker: React.FC<Props> = ({ marker }) => {
	const dispatch = useDispatch()

	const { lat, long } = marker.coordinates[0]

	const {
		_id,
		placeType,
		phoneNumber,
		title,
		coordinates,
		address: { city, street, number },
	} = marker
	const icon = getMarkerIcon(placeType)

	const openPopUp = (e: Leaflet.LeafletMouseEvent) => e.target.openPopup()

	const closePopUp = (e: Leaflet.LeafletMouseEvent) => e.target.closePopup()

	const redirect = () => {
		const { lat, long } = coordinates[0]

		const updatedProperties = {
			lat,
			long,
			zoom: 15,
		}

		dispatch(updateCoordinates(updatedProperties))
		dispatch(getSinglePlace(_id))

		navigate(`/places/list/${_id}`)
	}

	return (
		<Marker
			onMouseOver={openPopUp}
			onMouseOut={closePopUp}
			onClick={redirect}
			icon={icon}
			key={_id}
			position={[lat, long]}
		>
			<Popup>
				<S.PopUp>
					<S.PopUpTitle>{title}</S.PopUpTitle>
					<S.PopUpAddress>
						{city} {street} {number}
					</S.PopUpAddress>
					<span> {phoneNumber}</span>
					test
				</S.PopUp>
			</Popup>
		</Marker>
	)
}

export default PlacesMapMarker
