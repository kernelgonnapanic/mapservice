import React, { Component, useEffect } from 'react';
import PlacesMapMarker from "./PlacesMapMarker";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getMarkers } from "../../../redux/actions/placesActions";
import { extractMarkers } from "../../../redux/selectors/placesSelectors";


interface MarkerValue {
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

interface Props {
    markers?: any
}

const PlacesMapMarkers: React.FC<Props> = React.memo(() => {
    const dispatch = useDispatch()

    const placeType = useSelector((state: any) => state.places.placeType)
    const markers = useSelector((state: any) => extractMarkers(state), shallowEqual)
    const place = useSelector((state: any) => state.places.place)


    const activePlaceId = place && place._id;


    useEffect(() => {
        dispatch(getMarkers(1000, undefined, undefined, placeType))
    }, [placeType])

    return <>
        {markers &&
            markers.map((marker: MarkerValue) => {
                const { lat, long } = marker.coordinates[0]
                const { _id } = marker

                if (_id === activePlaceId) {
                    return <PlacesMapMarker marker={marker} key={_id} activeMarker />
                }

                if (marker && lat && long) {
                    return <PlacesMapMarker marker={marker} key={_id} />
                }
            })}
    </>
});

export default PlacesMapMarkers;
