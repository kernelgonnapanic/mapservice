import { ReactComponent as CinemaSvg } from '../mapicons/cinema.svg'
import { ReactComponent as KebabSvg } from '../mapicons/kebab.svg'
import { ReactComponent as MuseumSvg } from '../mapicons/museum.svg'
import { ReactComponent as PizzaSvg } from '../mapicons/pizza-slice.svg'
import { ReactComponent as RestaurantSvg } from '../mapicons/restaurant.svg'
import { ReactComponent as StatueSvg } from '../mapicons/statue.svg'
import { ReactComponent as ClubSvg } from '../mapicons/club.svg'
import { ReactComponent as BarSvg } from '../mapicons/bar.svg'
import { ReactComponent as CafeSvg } from '../mapicons/cafe.svg'

export const getMarkerSvg = (placeType: string): any => {
	switch (placeType) {
		case 'cinema':
			return CinemaSvg
		case 'pizzeria':
			return PizzaSvg
		case 'kebab':
			return KebabSvg
		case 'restaurant':
			return RestaurantSvg
		case 'pomnik':
			return StatueSvg
		case 'museum':
			return MuseumSvg
		case 'club':
			return ClubSvg
		case 'bar':
			return BarSvg
		case 'cafe':
			return CafeSvg
		default:
			return StatueSvg
	}
}
