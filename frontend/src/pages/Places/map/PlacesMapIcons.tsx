import FoodSvg from '../../../assets/mapicons/food.svg'
import CinemaSvg from "../../../assets/mapicons/cinema.svg";
import KebabSvg from "../../../assets/mapicons/kebab.svg";
import MuseumSvg from "../../../assets/mapicons/museum.svg";
import PizzaSvg from "../../../assets/mapicons/pizza-slice.svg";
import RestaurantSvg from '../../../assets/mapicons/restaurant.svg';
import StatueSvg from '../../../assets/mapicons/statue.svg';

import L from 'leaflet'

const generateIcon = (svg: any, className?: string | undefined): any => {

    return {
        iconUrl: svg,
        iconRetinaUrl: svg,
        iconAnchor: [5, 55],
        popupAnchor: [10, -44],
        iconSize: [35, 55],
        shadowUrl: '../assets/marker-shadow.png',
        shadowSize: [68, 95],
        shadowAnchor: [20, 92],
        className: className

    }
}

export const pointerIcon = (className?: string | undefined) => new L.Icon(generateIcon(FoodSvg, className))
export const cinemaIcon = (className?: string | undefined) => new L.Icon(generateIcon(CinemaSvg, className))
export const kebabIcon = (className?: string | undefined) => new L.Icon(generateIcon(KebabSvg, className))
export const museumIcon = (className?: string | undefined) => new L.Icon(generateIcon(MuseumSvg, className))
export const pizzaIcon = (className?: string | undefined) => new L.Icon(generateIcon(PizzaSvg, className))
export const restaurantIcon = (className?: string | undefined) => new L.Icon(generateIcon(RestaurantSvg, className))
export const statueIcon = (className?: string | undefined) => new L.Icon(generateIcon(StatueSvg, className))