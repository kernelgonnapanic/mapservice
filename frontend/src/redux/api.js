import {api} from "../api";
import axios from 'axios'

const CancelToken = axios.CancelToken;

export let cancelGetPlacesRequest;

export const getPlacesList = (perPage = 10, offset = 0, search, type = null) => {

    let params = `?per_page=${perPage}&offset=${offset}`;

    if(search){
      params += `&search=${search}`
    }

    if(type){
      params += `&type=${type}`
    }

    return api.get(`/places${params}`, {
      cancelToken: new CancelToken(function executor(cancelFunction) {
        cancelGetPlacesRequest = cancelFunction;
      })
    })
};


export const getSinglePlaceById = id => api.get(`/place/${id}`)
