import React from 'react'
import {Marker, Popup, useLeaflet} from 'react-leaflet'
import {cinemaIcon, pointerIcon, pizzaIcon, kebabIcon, statueIcon, museumIcon, restaurantIcon} from './PlacesMapIcons'


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

const PlacesMapMarker: React.FC<Props> = ({marker}) => {
    const {lat, long} = marker.coordinates[0]
    const {_id, placeType} = marker

    const getIcon = (placeType: string): any => {
        switch (placeType) {
            case "kino":
                return pointerIcon
            case "pizzeria":
                return pizzaIcon
            case "kebab":
                return kebabIcon
            case "restaurant":
                return restaurantIcon
            case "pomnik":
                return statueIcon
            case "muzeum":
                return museumIcon

            default:
                return cinemaIcon
        }
    }

    const icon = getIcon(placeType);

    return (
        <Marker icon={icon} key={_id} position={[lat, long]}>
            <Popup>
				<span>
					A pretty CSS3 popup. <br/> Easily customizable.
				</span>
            </Popup>
        </Marker>
    )
}

export default PlacesMapMarker
