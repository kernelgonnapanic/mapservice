import React, {useEffect} from 'react'
import * as S from './Bar.styles'
import {useDispatch, useSelector} from 'react-redux'
import {getPlaceTypeOptions, updatePlaceType} from '../../redux/actions/placesActions'
import {extractPlacesOptions} from '../../redux/selectors/placesSelectors'
import {navigate, useLocation} from '@reach/router'
import {getMarkerSvg} from "../../assets/helpers/getMarkerSvg";
import {Tooltip} from "@material-ui/core";
import PlaceNavItem from "../../components/PlaceNavItem/PlaceNavItem";

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
                <S.BarItem color="red" color2="blue">All</S.BarItem>
            </S.Button>
            {placeCategories &&
            placeCategories.map((category: string) => {

                const Icon = getMarkerSvg(category)

                return <PlaceNavItem
                    icon={<Icon width={35} height={35}/>}
                    category={category}
                    handleClick={handleClick}
                />
            })}
        </S.BarWrapper>
    )
})

export default Bar
