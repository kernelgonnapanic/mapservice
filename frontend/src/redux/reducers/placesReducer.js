import TYPES from '../types'

const initialState = {
	list: {},
	listIds: [],
	place: null,
	notification: null,
	errorPlaces: null,
	placeTypeOptions: {},
	placeType: null,
	markers: null,
	hasMoreData: true,
	byPlaceType: null,
	loadingSinglePlace: false,
	loadingPlaces: false,
}

const storeById = (data) => {
	return data.reduce((totalPlaces, place) => {
		totalPlaces[place._id] = place
		return totalPlaces
	}, {})
}

const storeIds = (data) => {
	if (!data) return

	return data.map((item) => item._id)
}

export const placesReducer = (state = initialState, action) => {
	switch (action.type) {
		case TYPES.GET_PLACES: {
			return {
				...state,
				list: { ...state.list },
				listIds: [...state.listIds],
				loadingPlaces: true,
				hasMoreData: true,
				firstPage: false,
			}
		}
		case TYPES.GET_PLACES_SUCCESS:
			let places = storeById(action.payload.data.data)
			let placesIds = storeIds(action.payload.data.data)
			const {
				currentPage,
				numberOfPages,
				byPlaceType,
				placeType,
			} = action.payload.data
			const hasMoreData =
				currentPage !== numberOfPages && currentPage < numberOfPages

			const { isSearching } = action.meta

			const filteredStateByType =
				Object.values(state.list).filter(
					(place) => place.placeType === placeType,
				) || []

			if ((isSearching && placeType) || isSearching) {
				return {
					...state,
					list: places,
					listIds: placesIds,
					hasMoreData: true,
					placeType: placeType ? placeType : null,
					loadingPlaces: false,
				}
			}

			if (byPlaceType && placeType) {
				return {
					...state,
					list: { ...storeById(filteredStateByType), ...places },
					listIds: Array.from(
						new Set([...storeIds(filteredStateByType), ...placesIds]),
					),
					hasMoreData,
					loadingPlaces: false,
					placeType: placeType,
				}
			}

			return {
				...state,
				list: { ...state.list, ...places },
				listIds: Array.from(new Set([...state.listIds, ...placesIds])),
				hasMoreData,
				placeType: null,
				loadingPlaces: false,
				byPlaceType: false,
			}

		case TYPES.GET_PLACES_FAIL:
			return {
				...state,
				loadingPlaces: false,
				hasMoreData: false,
				errorPlaces: { ...action.payload },
			}
		case TYPES.UPDATE_PLACE_TYPE:
			return {
				...state,
				placeType: action.payload,
				hasMoreData: true,
				firstPage: true,
			}
		case TYPES.GET_SINGLE_PLACE:
			return { ...state, loadingSinglePlace: true, errorsSinglePlace: null }
		case TYPES.GET_SINGLE_PLACE_SUCCESS:
			return {
				...state,
				place: action.payload.data.data,
				loadingSinglePlace: false,
				errorsSinglePlace: null,
			}
		case TYPES.GET_SINGLE_PLACE_FAIL:
			return {
				...state,
				loadingSinglePlace: false,
				errorsSinglePlace: { ...action.payload },
			}
		case TYPES.CLEAR_SINGLEPLACE: {
			return {
				...state,
				loadingSinglePlace: null,
				errorsSinglePlace: null,
				place: {},
			}
		}
		case TYPES.GET_MARKERS: {
			return {
				...state,
				markers: [],
				loadingMarkers: true,
			}
		}
		case TYPES.GET_MARKERS_SUCCESS: {
			return {
				...state,
				markers: action.payload.data.data,
				loadingMarkers: false,
			}
		}
		case TYPES.GET_MARKERS_FAIL: {
			return {
				...state,
				markers: null,
				markersError: action.payload,
				loadingMarkers: false,
			}
		}

		case TYPES.SEND_PLACES:
			return { ...state, payload: { ...action.payload } }
		case TYPES.GET_PLACETYPE_OPTIONS:
			return { ...state, placeTypeOptions: { ...action.payload.data.data } }
		default:
			return state
	}
}
