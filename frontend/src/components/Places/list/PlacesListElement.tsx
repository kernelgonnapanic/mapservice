import React, { useEffect, useCallback, memo } from 'react'
import * as S from './PlacesList.styles'
import { connect } from 'http2';

interface Props {


    placeImage: string
    title: String
    _id: string
}

const PlacesListElement: React.FC<Props> = memo(({ title, placeImage, _id }) => {


    return (
        <S.ListElement>
            <S.Image src={placeImage} />
            <span>
                {title}
            </span>
        </S.ListElement>
    )
})

export default PlacesListElement
