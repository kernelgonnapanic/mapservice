import { Link, useParams } from '@reach/router'
import React, { useEffect } from 'react'
import { IconButton } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { getSinglePlace, clearSingePlace } from '../../redux/actions'
import * as S from './PlaceSingle.styles'
import DefaultPlaceImage from '../../../assets/images/default-place-image.jpg'
import { ArrowLeft } from 'react-feather'

interface Props {
	placeId?: string
}

const PlaceSingle: React.FC<Props> = ({ placeId }) => {
	const dispatch = useDispatch()
	const { placeData, loadingSinglePlace } = useSelector((state: any) => {
		return {
			placeData: state.places.place,
			loadingSinglePlace: state.places.loadingSinglePlace,
		}
	})

	useEffect(() => {
		dispatch(getSinglePlace(placeId))

		return () => {
			dispatch(clearSingePlace())
		}
	}, [dispatch])

	return (
		<>
			<S.NavigateBack to="/places/list">
				<IconButton>
					<ArrowLeft />
				</IconButton>
				<span style={{ paddingLeft: '25px' }}>Back</span>
			</S.NavigateBack>
			{!loadingSinglePlace && placeData && (
				<>
					<S.Wrapper>
						<div>
							<S.Top>
								<S.Image
									src={
										placeData.placeImage
											? placeData.placeImage
											: DefaultPlaceImage
									}
								/>
							</S.Top>
							<S.Bottom>
								<S.Element>{placeData.title}</S.Element>
								<S.Element>
									{placeData.address?.street}
									<span>{placeData.address?.number}</span>
								</S.Element>
								<S.Element>{placeData.phoneNumber}</S.Element>
								{placeData.coordinates && (
									<>
										<S.Element>{placeData.coordinates[0].lat}</S.Element>
										<S.Element>{placeData.coordinates[0].long}</S.Element>
									</>
								)}
							</S.Bottom>
						</div>
					</S.Wrapper>
					<S.Wrapper>
						<div style={{ padding: '25px 0 0 0' }}>Opis</div>
						<div style={{ padding: '25px 0 50px 0' }}>
							{placeData.description}
						</div>
					</S.Wrapper>
				</>
			)}
		</>
	)
}

export default PlaceSingle
