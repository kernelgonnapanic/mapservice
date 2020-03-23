import { createSelector } from 'reselect'
import { compose } from 'redux'

export const extractPlacesFromState = state => state.places.list ? state.places.list : [];
export const extractPlacesOptionsFromState = state => state.places.placeTypeOptions;

export const extractPlaces = createSelector([extractPlacesFromState], places => {
	if(!places) return [];
	return Object.values(places);
});

export const extractPlacesOptions = createSelector(extractPlacesOptionsFromState, options => {
	return Object.values(options)
});


