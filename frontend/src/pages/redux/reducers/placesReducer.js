import {
    GET_PLACES,
    GET_PLACES_SUCCESS,
    GET_PLACES_FAIL,
    GET_SINGLE_PLACE,
    GET_SINGLE_PLACE_SUCCESS,
    GET_SINGLE_PLACE_FAIL,
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
    hasMoreData: null,
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
                // errorPlaces: null
            }
        }
        case GET_PLACES_SUCCESS:
            const places = storeById(action.payload.data.data);
            const placesIds = storeIds(action.payload.data.data);

            const hasMoreData = action.payload.data.data.length > 0;

            return {
                ...state,
                list: {...state.list, ...places },
                listIds: [...state.listIds, ...placesIds ],
                hasMoreData,
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
