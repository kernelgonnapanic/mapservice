import React, { useEffect } from 'react'
import { IconButton } from '@material-ui/core'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { clearSingePlace, getSinglePlace } from 'redux/actions/placesActions'
import * as S from './PlaceSingle.styles'
import DefaultPlaceImage from 'assets/images/default-place-image.jpg'
import { ArrowLeft, Home, Phone } from 'react-feather'
import { updateCoordinates } from 'redux/actions/globalActions'
import { IconInfo } from 'components'
import { useTranslation } from 'react-i18next'

interface Props {
	placeId?: string
}

interface State {
	places: {
		place: {
			address: {
				city: string
				street: string
				number: number
			}
			coordinates: [
				{
					_id: string
					lat: number
					long: number
				},
			]
			createdAt: string
			description: string
			phoneNumber: number
			placeImage: ''
			placeType: string
			title: string
			updatedAt: string
			_id: string
		}
		loadingSinglePlace: boolean
	}
}

const PlaceSingle: React.FC<Props> = ({ placeId }) => {
	const { t } = useTranslation()
	const dispatch = useDispatch()

	const { placeData, loadingSinglePlace } = useSelector((state: State) => {
		return {
			placeData: state.places.place,
			loadingSinglePlace: state.places.loadingSinglePlace,
		}
	}, shallowEqual)

	useEffect(() => {
		const res = dispatch(getSinglePlace(placeId))

		return () => {
			dispatch(clearSingePlace())
		}
	}, [placeId])

	useEffect(() => {
		if (placeData) {
			if (placeData.coordinates && placeData.coordinates[0]) {
				dispatch(
					updateCoordinates({
						lat: placeData.coordinates[0].lat,
						long: placeData.coordinates[0].long,
						zoom: 8,
					}),
				)
			}
		}
	}, [placeData])

	const { title, address, phoneNumber, description, placeType, placeImage } =
		placeData || {}

	console.log(placeData)

	return (
		<>
			<S.NavigateBack to="/places/list">
				<IconButton>
					<ArrowLeft />
				</IconButton>
				<span style={{ paddingLeft: '25px' }}>{t('back')}</span>
			</S.NavigateBack>
			{!loadingSinglePlace && placeData && (
				<>
					<S.Wrapper>
						<S.Top className={`background-${placeType}`}>
							<S.Image src={placeImage ? placeImage : DefaultPlaceImage} />
							<S.HeaderTitle>{title}</S.HeaderTitle>
							<S.TopPlaceType>
								{t(`placeCategorySingle.${placeType}`)}
							</S.TopPlaceType>
						</S.Top>
						<S.Bottom>
							<IconInfo
								icon={<Home width="25" height="20" />}
								text={`${address?.street} ${address?.number}`}
							/>
							<IconInfo
								icon={<Phone width="25" height="20" />}
								text={phoneNumber}
							/>
						</S.Bottom>
					</S.Wrapper>
					<S.Wrapper>
						<S.DescriptionHeader>{t('description')}</S.DescriptionHeader>
						<S.Description>{description}</S.Description>
					</S.Wrapper>
				</>
			)}
		</>
	)
}

export default PlaceSingle
