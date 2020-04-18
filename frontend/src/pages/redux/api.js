import {api} from "../../api";
import axios from "axios";

export const getPlacesList = (perPage = 10, offset = 0, search = null) => {

    let cancel;

    console.log(cancel);

    let params = `?per_page=${perPage}&offset=${offset}`;

    if(search){
      params += `&search=${search}`
    }

    return api.get(`/places${params}`);
};
