import {
  cinemaIcon,
  kebabIcon,
  museumIcon,
  pizzaIcon,
  pointerIcon,
  restaurantIcon,
  statueIcon
} from "../../pages/Places/map/PlacesMapIcons";

export function getMarkerIcon(placeType: string) {
  const getIcon = (placeType: string) => {
    switch (placeType) {
      case 'kino':
        return pointerIcon;
      case 'pizzeria':
        return pizzaIcon;
      case 'kebab':
        return kebabIcon;
      case 'restaurant':
        return restaurantIcon;
      case 'pomnik':
        return statueIcon;
      case 'muzeum':
        return museumIcon;
      default:
        return cinemaIcon;
    }
  };

  return getIcon(placeType);
}
