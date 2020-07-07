import FoodSvg from 'mapicons/food.svg'
import {ReactComponent as CinemaSvg} from "../mapicons/cinema.svg";
import {ReactComponent as KebabSvg} from "../mapicons/kebab.svg";
import {ReactComponent as MuseumSvg} from "../mapicons/museum.svg";
import {ReactComponent as PizzaSvg} from "../mapicons/pizza-slice.svg";
import {ReactComponent as RestaurantSvg} from '../mapicons/restaurant.svg';
import {ReactComponent as StatueSvg} from '../mapicons/statue.svg';


export const getMarkerSvg = (placeType: string) => {
    switch (placeType) {
        case 'kino':
            return CinemaSvg;
        case 'pizzeria':
            return PizzaSvg;
        case 'kebab':
            return KebabSvg;
        case 'restaurant':
            return RestaurantSvg;
        case 'pomnik':
            return StatueSvg;
        case 'muzeum':
            return MuseumSvg;
        default:
            return StatueSvg;
    }
}
