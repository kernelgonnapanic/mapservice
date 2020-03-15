import {Link, RouteComponentProps} from '@reach/router'
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getPlaces} from '../../redux/actions'
import * as S from './PlacesList.styles'
import PlacesListElement from './PlacesListElement'
import {extractPlaces} from '../../redux/selectors/placesSelectors'
import {CircularProgress} from "@material-ui/core";

interface Props extends RouteComponentProps <{
    places?: [],
    placesLoading?: boolean
    id: string
}> {}

const PlacesList: React.FC<Props> = React.memo(({
										 places,
                                         placesLoading
                                     }) => {
    interface PlaceValue {
        title: string
        _id: string
        placeImage: string,
        placeType: string
    }

    return (
        <S.ListWrapper>
            {!placesLoading && places ?
                 places.map((place: PlaceValue) => {
                    const {title, _id, placeImage, placeType} = place

                    return (
                        <>
                            <Link style={{textDecoration: "none"}} to={_id}>
                                <PlacesListElement key={_id} _id={_id} title={title} placeImage={placeImage} placeType={placeType}/>
                            </Link>
                        </>

                    )
                })
                : <div style={{display: "flex", justifyContent: "center"}}>
                    <CircularProgress/>
                </div>}
        </S.ListWrapper>
    )
})

export default PlacesList
