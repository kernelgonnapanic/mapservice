import { navigate } from '@reach/router'
import * as Leaflet from 'leaflet'
import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import { useDispatch } from 'react-redux'
import { getMarkerIcon } from '../../../assets/helpers/getMarkerIcon'
import { updateCoordinates } from '../../../redux/actions/globalActions'
import { getSinglePlace } from '../../../redux/actions/placesActions'
import * as S from './PlacesMap.styles'

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
	activeMarker?: boolean
}

const PlacesMapMarker: React.FC<Props> = React.memo(
	({ marker, activeMarker = false }) => {
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

		const className = activeMarker ? 'active-marker' : ''

		const icon = getMarkerIcon(placeType, className)

		const openPopUp = (e: Leaflet.LeafletMouseEvent): void =>
			e.target.openPopup()

		const closePopUp = (e: Leaflet.LeafletMouseEvent): void =>
			e.target.closePopup()

		const redirect = (): void => {
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
			//ts-ignore
			<Marker
				onMouseOver={openPopUp}
				onMouseOut={closePopUp}
				onClick={redirect}
				icon={icon}
				activeMarker={activeMarker}
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
	},
)

export default PlacesMapMarker
