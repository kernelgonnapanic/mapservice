import React, {useEffect} from 'react'
import * as S from './Bar.styles'
import {useDispatch, useSelector} from 'react-redux'
import {getPlaceTypeOptions} from '../../redux/actions/placesActions'
import {extractPlacesOptions} from '../../redux/selectors/placesSelectors'
import {updatePlaceType} from '../../redux/actions/placesActions'
import {useLocation, useParams, navigate} from '@reach/router'
import {getMarkerIcon} from "../../assets/helpers/getMarkerIcon";
import {getMarkerSvg} from "../../assets/helpers/getMarkerSvg";
import PizzaSvg from '../../assets/mapicons/pizza-slice.svg'
import {Tooltip} from "@material-ui/core";

const Bar: React.FC = React.memo(() => {
    const dispatch = useDispatch()
    const {pathname} = useLocation()

    const placeCategories = useSelector((state: any) =>
        extractPlacesOptions(state),
    )

    const handleClick = (category: any) => () => {
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
            <S.Button onClick={handleClick('')}>
                <S.BarItem>All</S.BarItem>
            </S.Button>
            {placeCategories &&
            placeCategories.map((category: string) => {

                const Icon = getMarkerSvg(category)

                return (
                    <S.Button key={category} onClick={handleClick(category)}>
                        <Tooltip title={category}>
                            <S.BarItem>
                                <Icon height={35} width={35}/>
                            </S.BarItem>
                        </Tooltip>
                    </S.Button>
                )
            })}
        </S.BarWrapper>
    )
})

export default Bar
