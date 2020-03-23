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
    place: null,
    notification: {},
    errorPlaces: null,
    placeTypeOptions: {},

    loadingSinglePlace: false,
    loadingPlaces: false,
};


export const placesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PLACES: {
            return {
                ...state,
                loadingPlaces: true,
                // errorPlaces: null
            }
        }
        case GET_PLACES_SUCCESS:


            console.log(Object.values(state.list));
            console.log(action.payload.data.data)

            console.log({...Object.values(state.list), ...action.payload.data.data});

            //store them by Id because they are overwritng themselves.

            return {
                ...state,
                list: {...Object.values(state.list), ...action.payload.data.data},
                loadingPlaces: false,
            };
        case GET_PLACES_FAIL:
            return {
                ...state,
                loadingPlaces: false,
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
