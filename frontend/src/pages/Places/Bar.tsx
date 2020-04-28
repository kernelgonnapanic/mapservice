import React, { useEffect } from 'react'
import * as S from './Bar.styles'
import { useDispatch, useSelector } from 'react-redux'
import { getPlaceTypeOptions } from '../redux/actions'
import { extractPlacesOptions } from '../redux/selectors/placesSelectors'
import { getPlaces } from '../redux/actions'

const Bar: React.FC = React.memo(() => {
	const dispatch = useDispatch()

	const placeCategories = useSelector((state: any) =>
		extractPlacesOptions(state),
	)

	const handleClick = (category: any) => () => {
		dispatch(getPlaces(10, 0, null, category))
	}

	useEffect(() => {
		dispatch(getPlaceTypeOptions())
	}, [])

	return (
		<S.BarWrapper>
			{placeCategories &&
				placeCategories.map((category: string) => {
					return (
						<button onClick={handleClick(category)}>
							<S.BarItem>{category}</S.BarItem>
						</button>
					)
				})}
		</S.BarWrapper>
	)
})

export default Bar
