import {
	cinemaIcon,
	kebabIcon,
	museumIcon,
	pizzaIcon,
	pointerIcon,
	restaurantIcon,
	statueIcon,
	clubIcon,
	cafeIcon,
	barIcon,
} from '../../pages/Places/map/PlacesMapIcons'

export function getMarkerIcon(
	placeType: string,
	className?: string | undefined,
) {
	const getIcon = (placeType: string, className?: string | undefined) => {
		switch (placeType) {
			case 'cinema':
				return pointerIcon(placeType, className)
			case 'pizzeria':
				return pizzaIcon(placeType, className)
			case 'kebab':
				return kebabIcon(placeType, className)
			case 'restaurant':
				return restaurantIcon(placeType, className)
			case 'statue':
				return statueIcon(placeType, className)
			case 'museum':
				return museumIcon(placeType, className)
			case 'cafe':
				return cafeIcon(placeType, className)
			case 'club':
				return clubIcon(placeType, className)
			case 'bar':
				return barIcon(placeType, className)
			default:
				return cinemaIcon(placeType, className)
		}
	}

	return getIcon(placeType, className)
}
