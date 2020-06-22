import {Link, useParams} from '@reach/router'
import React, {useEffect} from 'react'
import {IconButton} from '@material-ui/core'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {
    getSinglePlace,
    clearSingePlace,
} from '../../../redux/actions/placesActions'
import * as S from './PlaceSingle.styles'
import DefaultPlaceImage from '../../../assets/images/default-place-image.jpg'
import {ArrowLeft} from 'react-feather'
import {updateCoordinates} from "../../../redux/actions/globalActions";

interface Props {
    placeId?: string
}

interface State {
    places: {
        place: {
            address: {
                city: string,
                street: string,
                number: number
            },
            coordinates: [
                {
                    _id: string,
                    lat: number,
                    long: number
                }
            ],
            createdAt: string,
            description: string,
            phoneNumber: number,
            placeImage: "",
            placeType: string,
            title: string,
            updatedAt: string,
            _id: string
        },
        loadingSinglePlace: boolean
    },
}

const PlaceSingle: React.FC<Props> = ({placeId}) => {
    const dispatch = useDispatch()

    const {placeData, loadingSinglePlace} = useSelector((state: State) => {
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
        //@ts-ignore
        if (placeData ) {
            //@ts-ignore
            // const {coordinates: {lat, long}} = placeData || {};

            console.log(placeData);
            // console.log(lat);
            // console.log(long)
            // dispatch(updateCoordinates({lat: placeData.lat, long: placeData.long}))
        }
    }, [placeData])

    return (
        <>
            <S.NavigateBack to="/places/list">
                <IconButton>
                    <ArrowLeft/>
                </IconButton>
                <span style={{paddingLeft: '25px'}}>Back</span>
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
                        <div style={{padding: '25px 0 0 0'}}>Opis</div>
                        <div style={{padding: '25px 0 50px 0'}}>
                            {placeData.description}
                        </div>
                    </S.Wrapper>
                </>
            )}
        </>
    )
}

export default PlaceSingle
