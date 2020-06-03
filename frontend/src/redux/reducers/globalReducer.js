import TYPES from '../types'
import {defaultCoordinates, defaultZoom} from "../../assets/globalSettings/globalSettings";

const initialState = {
    coordinates: defaultCoordinates,
    zoom: defaultZoom
}

export const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.UPDATE_COORDINATES:

            const {lat, long, zoom} = action.payload


            return {
                ...state,
                coordinates: {
                    lat: lat,
                    lng: long,
                },
                zoom: zoom,
            }
        default:
            return state
    }
}
