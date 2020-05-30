import TYPES from '../types'

export const updateCoordinates = (coordinates) => {
					return { type: TYPES.UPDATE_COORDINATES, payload: coordinates }
				}

