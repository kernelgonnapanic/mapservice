import FoodSvg from '../../../assets/mapicons/food.svg'
import CinemaSvg from "../../../assets/mapicons/cinema.svg";
import KebabSvg from "../../../assets/mapicons/kebab.svg";
import MuseumSvg from "../../../assets/mapicons/museum.svg";
import PizzaSvg from "../../../assets/mapicons/pizza-slice.svg";
import RestaurantSvg from '../../../assets/mapicons/restaurant.svg';
import StatueSvg from '../../../assets/mapicons/statue.svg';

import L from 'leaflet'

const generateIcon = (svg: any): any => {
    return {
        iconUrl: svg,
        iconRetinaUrl: svg,
        iconAnchor: [5, 55],
        popupAnchor: [10, -44],
        iconSize: [35, 55],
        shadowUrl: '../assets/marker-shadow.png',
        shadowSize: [68, 95],
        shadowAnchor: [20, 92],
    }
}

export const pointerIcon = new L.Icon(generateIcon(FoodSvg))
export const cinemaIcon = new L.Icon(generateIcon(CinemaSvg))
export const kebabIcon = new L.Icon(generateIcon(KebabSvg))
export const museumIcon = new L.Icon(generateIcon(MuseumSvg))
export const pizzaIcon = new L.Icon(generateIcon(PizzaSvg))
export const restaurantIcon = new L.Icon(generateIcon(RestaurantSvg))
export const statueIcon = new L.Icon(generateIcon(StatueSvg))