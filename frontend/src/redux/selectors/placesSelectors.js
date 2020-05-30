import { createSelector } from 'reselect'
import { compose } from 'redux'

export const extractPlacesFromState = state => state.places.list ? state.places.list : [];
export const extractMarkersFromState = state => state.places.markers ? state.places.markers : [];
export const extractPlacesIds = state => state.places.listIds ? state.places.listIds : [];
export const extractPlacesOptionsFromState = state => state.places.placeTypeOptions;

export const extractPlaces = createSelector(
	extractPlacesFromState,
	extractPlacesIds,
	(places, ids) => {

	if(!places || !ids) return [];

	return ids.map(id => places[id])
});

export const extractMarkers = createSelector(
	extractMarkersFromState,
	markers => {
		if(!markers) return []

		return markers;
	}
);


export const extractPlacesOptions = createSelector(extractPlacesOptionsFromState, options => {
	return Object.values(options)
});


