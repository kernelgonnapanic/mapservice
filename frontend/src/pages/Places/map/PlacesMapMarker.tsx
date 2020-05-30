import React, { MouseEvent } from 'react'
import * as Leaflet from 'leaflet'
import { Marker, Popup } from 'react-leaflet'
import * as S from './PlacesMap.styles'
import { useMarkerIcon } from '../../../assets/hooks/useMarkerIcon'
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
	const { lat, long } = marker.coordinates[0]
	const {
		_id,
		placeType,
		phoneNumber,
		title,
		address: { city, street, number },
	} = marker
	const icon = useMarkerIcon(placeType)

	const openPopUp = (e: Leaflet.LeafletMouseEvent) => e.target.openPopup()

	const closePopUp = (e: Leaflet.LeafletMouseEvent) => e.target.closePopup()
	return (
		<Marker
			onMouseOver={openPopUp}
			onMouseOut={closePopUp}
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
				</S.PopUp>
			</Popup>
		</Marker>
	)
}

export default PlacesMapMarker
