import {
    GET_PLACES,
    GET_PLACES_SUCCESS,
    GET_PLACES_FAIL,
    GET_SINGLE_PLACE,
    GET_SINGLE_PLACE_SUCCESS,
    GET_SINGLE_PLACE_FAIL,
    GET_MARKERS,
    GET_MARKERS_SUCCESS,
    GET_MARKERS_FAIL,
    CLEAR_SINGLEPLACE,
    SEND_PLACES,
    SET_NOTIFICATION,
    GET_PLACETYPE_OPTIONS
} from "../types";

const initialState = {
    list: {},
    listIds: [],
    place: null,
    notification: {},
    errorPlaces: null,
    placeTypeOptions: {},
    markers: null,
    hasMoreData: true,
    byPlaceType: null,
    loadingSinglePlace: false,
    loadingPlaces: false,
};

const storeById = (data) => {
    return data.reduce((totalPlaces,place) => {
        totalPlaces[place._id] =  place;
        return totalPlaces;
    }, {});
};

const storeIds = data => {
    if(!data) return

    return data.map(item => item._id);
};

export const placesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PLACES: {
            return {
                ...state,
                list: {...state.list},
                listIds: [...state.listIds],
                loadingPlaces: true,
                hasMoreData: true,
                // placeType: null,
                // errorPlaces: null
            }
        }
        case GET_PLACES_SUCCESS:
            let places = storeById(action.payload.data.data);
            let placesIds = storeIds(action.payload.data.data);
            const { currentPage, numberOfPages, byPlaceType, placeType } = action.payload.data;
            const hasMoreData = currentPage !== numberOfPages;

            const {isSearching} = action.meta;

            const filteredStateByType = Object.values(state.list).filter(place => place.placeType === placeType) || []

            if(byPlaceType) {
              return {
                ...state,
                list: { ...storeById(filteredStateByType), ...places},
                listIds: Array.from(new Set([...storeIds(filteredStateByType), ...placesIds])),
                hasMoreData,
                loadingPlaces: false,
                placeType: placeType
              }
            }

            if (isSearching) {
              return {
                ...state,
                list: places,
                listIds: placesIds,
                hasMoreData: true,
                placeType: placeType,
                loadingPlaces: false,
              }
            }

            return {
              ...state,
              list: { ...state.list, ...places },
              listIds: Array.from(new Set([...state.listIds, ...placesIds])),
              hasMoreData,
              placeType: null,
              loadingPlaces: false,
            };


        case GET_PLACES_FAIL:
            return {
                ...state,
                loadingPlaces: false,
                hasMoreData: false,
                errorPlaces: {...action.payload},
            };
        case GET_SINGLE_PLACE:
            return {...state, loadingSinglePlace: true, errorsSinglePlace: null}
        case GET_SINGLE_PLACE_SUCCESS:
            return {...state, place: {...action.payload.data.data}, loadingSinglePlace: false, errorsSinglePlace: null};
        case GET_SINGLE_PLACE_FAIL:
            return {...state, loadingSinglePlace: false, errorsSinglePlace:  {...action.payload}};
        case CLEAR_SINGLEPLACE: {
            return {...state, loadingSinglePlace: null, errorsSinglePlace: null, place: {}};
        }
        case GET_MARKERS: {
            return {
                ...state,
                markers: [],
                loadingMarkers: true
            }
        }
        case GET_MARKERS_SUCCESS: {
            return {
                ...state,
                markers: action.payload.data.data,
                loadingMarkers: false
            }
        }
        case GET_MARKERS_FAIL: {
            return {
                ...state,
                markers: null,
                markersError: action.payload,
                loadingMarkers: false
            }
        }

        case SEND_PLACES:
            return {...state, payload: {...action.payload}};
        case SET_NOTIFICATION:
            return {...state, notification: {...action.payload}};
        case GET_PLACETYPE_OPTIONS:
            return {...state, placeTypeOptions: {...action.payload.data.data}};
        default:
            return state
    }
}
