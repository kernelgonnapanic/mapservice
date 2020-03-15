import { createSelector } from 'reselect'
import { compose } from 'redux'

export const extractPlacesFromState = state => state.places.list?.data?.data;
export const extractPlacesOptionsFromState = state => state.places.placeTypeOptions;

export const extractPlaces = createSelector([extractPlacesFromState], places => {
	return places
});

export const extractPlacesOptions = createSelector(extractPlacesOptionsFromState, options => {
	return Object.values(options)
});


