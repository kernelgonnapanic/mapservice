import React, { useEffect } from 'react'
import * as S from './Bar.styles'
import { useDispatch, useSelector } from 'react-redux'
import {
	getPlaceTypeOptions,
	updatePlaceType,
} from '../../redux/actions/placesActions'
import { extractPlacesOptions } from '../../redux/selectors/placesSelectors'
import { navigate, useLocation } from '@reach/router'
import { getMarkerSvg } from '../../assets/helpers/getMarkerSvg'
import PlaceNavItem from '../../components/PlaceNavItem/PlaceNavItem'
import { theme } from '../../App'
import { Button } from 'components'
import { useTranslation } from 'react-i18next'

const Bar: React.FC = React.memo(() => {
	const dispatch = useDispatch()
	const { pathname } = useLocation()
	const { t } = useTranslation()

	const placeCategories = useSelector((state: any) =>
		extractPlacesOptions(state),
	)

	const handleClick = (category: string) => () => {
		if (pathname !== '/places/list') {
			navigate(`/places/list`)
		}

		dispatch(updatePlaceType(category))
	}

	useEffect(() => {
		dispatch(getPlaceTypeOptions())
	}, [])

	return (
		<S.BarWrapper>
			<Button
				text={t('noFilter')}
				color={theme.colors.green}
				onClick={handleClick('')}
			/>
			{placeCategories &&
				placeCategories.map((category: string) => {
					const Icon = getMarkerSvg(category)

					return (
						<PlaceNavItem
							key={category}
							icon={<Icon width={35} height={35} />}
							category={category}
							handleClick={handleClick}
						/>
					)
				})}
		</S.BarWrapper>
	)
})

export default Bar
