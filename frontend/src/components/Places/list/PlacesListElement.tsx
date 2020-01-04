import React, { useEffect, useCallback, memo } from 'react'
import * as S from './PlacesList.styles'
import { connect } from 'http2';

interface Props {
    // setSelectedListElementId?: (
    //     value: string | ((prevVar: string) => string),
    // ) => void
    handleClick: (e: any) => void
    placeImage: String
    title: String
    _id: string
}

const PlacesListElement: React.FC<Props> = memo(({ title, placeImage, handleClick, _id }) => {

    // const handleClick = useCallback(() => {
    //     console.log("event");
    //     console.log();
    //     setSelectedListElementId!(_id)
    // }, []);

    return (
        <S.ListElement
            onClick={() => handleClick(_id)}
        >
            {title}
            {placeImage}
        </S.ListElement>
    )
})

export default PlacesListElement
