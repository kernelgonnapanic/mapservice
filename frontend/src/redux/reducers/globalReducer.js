import TYPES from '../types'

const initialState = {
	coordinates: {
		lat: 52.163228,
    lng: 22.269012,
  },
   zoom: 12
}

export const globalReducer = (state = initialState, action) => {
	switch (action.type) {
		case TYPES.UPDATE_COORDINATES:

    const { lat, long, zoom } = action.payload



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
