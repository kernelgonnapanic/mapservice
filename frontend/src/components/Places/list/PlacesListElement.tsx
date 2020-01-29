import React, { memo } from 'react';
import * as S from './PlacesList.styles';
import DefaultPlaceImage from '../../../assets/images/default-place-image.jpg'

interface Props {
    placeImage: string
    title: String
    _id: string
}

const PlacesListElement: React.FC<Props> = memo(({ title, placeImage, _id }) => {

    return (
        <S.ListElement>
            <S.ListElementContent>
                <S.Title>
                    {title}
                </S.Title>
                <S.Description>
                    Description
                </S.Description>
            </S.ListElementContent>
            <S.Image src={placeImage ? placeImage : DefaultPlaceImage} />
        </S.ListElement>
    )
})

export default PlacesListElement
