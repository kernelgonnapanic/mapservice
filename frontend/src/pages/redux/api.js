import {api} from "../../api";

export const getPlacesList = (perPage = 10, offset = 0) => {

    const params = `?per_page=${perPage}&offset=${offset}`;

    return api.get(`/places${params}`);
};