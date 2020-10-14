import CinemaSvg from 'assets/mapicons/cinema.svg'
import KebabSvg from 'assets/mapicons/kebab.svg'
import MuseumSvg from 'assets/mapicons/museum.svg'
import RestaurantSvg from 'assets/mapicons/restaurant.svg'
import StatueSvg from 'assets/mapicons/statue.svg'
import CafeSvg from 'assets/mapicons/cafe.svg'
import ClubSvg from 'assets/mapicons/club.svg'
import BarSvg from 'assets/mapicons/bar.svg'
import PizzaSvg from 'assets/mapicons/pizza-slice.svg'

import { iconGradientColors } from 'assets/helpers/iconGradientColors'

import L from 'leaflet'

const generateStyle = (placeType: string): string => {
	// @ts-ignore
	const { color, color2 } = iconGradientColors[placeType] || {
		color: 'red',
		color2: 'green',
	}

	//Animation styles for active marker are in App.js
	return `
    display: flex;
    z-index: 1100;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
	width: 40px;
	height: 40px;
    background: linear-gradient(
        -90deg, ${color}, ${color2}
    );
	border-radius: 50%;
	`
}

const generateDivIcon = (
	svg: string,
	placeType: string,
	className?: string | undefined,
): object => {
	return {
		html: `<div class="${className}" style="${generateStyle(placeType)}">
          <img src=${svg} alt=${placeType} />
          </div>`,
		iconAnchor: [12, 32],
		popupAnchor: [0, -28],
		className: className,
	}
}

export const pointerIcon = (
	placeType: string,
	className?: string | undefined,
) => new L.DivIcon(generateDivIcon(CinemaSvg, placeType, className))

export const cinemaIcon = (placeType: string, className?: string | undefined) =>
	new L.DivIcon(generateDivIcon(CinemaSvg, placeType, className))

export const kebabIcon = (placeType: string, className?: string | undefined) =>
	new L.DivIcon(generateDivIcon(KebabSvg, placeType, className))

export const museumIcon = (placeType: string, className?: string | undefined) =>
	new L.DivIcon(generateDivIcon(MuseumSvg, placeType, className))

export const pizzaIcon = (placeType: string, className?: string | undefined) =>
	new L.DivIcon(generateDivIcon(PizzaSvg, placeType, className))

export const restaurantIcon = (
	placeType: string,
	className?: string | undefined,
) => new L.DivIcon(generateDivIcon(RestaurantSvg, placeType, className))

export const statueIcon = (placeType: string, className?: string | undefined) =>
	new L.DivIcon(generateDivIcon(StatueSvg, placeType, className))

export const clubIcon = (placeType: string, className?: string | undefined) =>
	new L.DivIcon(generateDivIcon(ClubSvg, placeType, className))

export const cafeIcon = (placeType: string, className?: string | undefined) =>
	new L.DivIcon(generateDivIcon(CafeSvg, placeType, className))

export const barIcon = (placeType: string, className?: string | undefined) =>
	new L.DivIcon(generateDivIcon(BarSvg, placeType, className))
