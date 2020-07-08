import {
  cinemaIcon,
  kebabIcon,
  museumIcon,
  pizzaIcon,
  pointerIcon,
  restaurantIcon,
  statueIcon
} from "../../pages/Places/map/PlacesMapIcons";

export function getMarkerIcon(placeType: string, className?: string | undefined) {
  const getIcon = (placeType: string, className?: string | undefined) => {
    switch (placeType) {
      case 'kino':
        return pointerIcon(className);
      case 'pizzeria':
        return pizzaIcon(className);
      case 'kebab':
        return kebabIcon(className);
      case 'restaurant':
        return restaurantIcon(className);
      case 'pomnik':
        return statueIcon(className);
      case 'muzeum':
        return museumIcon(className);
      default:
        return cinemaIcon(className);
    }
  };

  return getIcon(placeType, className);
}
