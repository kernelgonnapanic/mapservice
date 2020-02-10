import { createSelector } from 'reselect'
import { compose } from 'redux'

export const getPlacesFromState = state => state.places.list?.data?.data

export const getIt = createSelector([getPlacesFromState], state => {
	return state
})
