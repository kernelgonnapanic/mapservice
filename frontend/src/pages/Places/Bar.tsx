import React, { useEffect } from 'react'
import * as S from './Bar.styles'
import { useDispatch, useSelector } from 'react-redux'
import { getPlaceTypeOptions } from '../redux/actions'
import { extractPlacesOptions } from '../redux/selectors/placesSelectors'

interface Props {}

const Bar: React.FC<Props> = React.memo(() => {
	const dispatch = useDispatch()

	const placeCategories = useSelector((state: any) =>
		extractPlacesOptions(state),
	)

	useEffect(() => {
		dispatch(getPlaceTypeOptions())
	}, [])

	return (
		<S.BarWrapper>
			{placeCategories &&
				placeCategories.map((category: any) => {
					return <div>{category}</div>
				})}
			;
		</S.BarWrapper>
	)
})

export default Bar
