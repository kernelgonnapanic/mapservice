import React from 'react'
import { Marker, Popup, useLeaflet } from 'react-leaflet'
import icons from './PlacesMapIcons'

interface Props {
	marker: {
		title: string
		coordinates: any
		_id: string
		address: {
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
	const { _id } = marker

	return (
		<Marker icon={icons.pointerIcon} key={_id} position={[lat, long]}>
			<Popup>
				<span>
					A pretty CSS3 popup. <br /> Easily customizable.
				</span>
			</Popup>
		</Marker>
	)
}

export default PlacesMapMarker
