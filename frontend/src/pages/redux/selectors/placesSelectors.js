import { createSelector } from 'reselect'
import { compose } from 'redux'

export const extractPlacesFromState = state => state.places.list?.data?.data;

export const extractPlaces = createSelector([extractPlacesFromState], state => {

	return state
});


