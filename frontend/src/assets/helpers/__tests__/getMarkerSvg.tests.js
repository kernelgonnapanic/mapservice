import { getMarkerSvg } from '../getMarkerSvg'
import { ReactComponent as PizzaSvg } from 'assets/mapicons/pizza-slice.svg'
import { ReactComponent as CinemaSvg } from 'assets/mapicons/cinema.svg'
import { ReactComponent as KebabSvg } from 'assets/mapicons/kebab.svg'
import { ReactComponent as MuseumSvg } from 'assets/mapicons/museum.svg'
import { ReactComponent as RestaurantSvg } from 'assets/mapicons/restaurant.svg'
import { ReactComponent as StatueSvg } from 'assets/mapicons/statue.svg'
import { ReactComponent as ClubSvg } from 'assets/mapicons/club.svg'
import { ReactComponent as BarSvg } from 'assets/mapicons/bar.svg'
import { ReactComponent as CafeSvg } from 'assets/mapicons/cafe.svg'

test('renders correct icon', () => {
	expect(getMarkerSvg('cinema')).toEqual(CinemaSvg)
	expect(getMarkerSvg('pizzeria')).toEqual(PizzaSvg)
	expect(getMarkerSvg('kebab')).toEqual(KebabSvg)
	expect(getMarkerSvg('restaurant')).toEqual(RestaurantSvg)
	expect(getMarkerSvg('pomnik')).toEqual(StatueSvg)
	expect(getMarkerSvg('museum')).toEqual(MuseumSvg)
	expect(getMarkerSvg('club')).toEqual(ClubSvg)
	expect(getMarkerSvg('bar')).toEqual(BarSvg)
	expect(getMarkerSvg('cafe')).toEqual(CafeSvg)
	expect(getMarkerSvg('test')).toEqual(StatueSvg)
})
