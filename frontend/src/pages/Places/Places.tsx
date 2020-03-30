import {Grid} from '@material-ui/core'
import {RouteComponentProps, Router, useParams} from '@reach/router'

import React, {useEffect, useState} from 'react'
import Route from '../Navigation/Route'
import Bar from './Bar'
import PlacesList from './list/PlacesList'
import PlaceSingle from './single/PlaceSingle'
import PlacesMap from './map/PlacesMap'
import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux";
import {extractPlaces} from "../redux/selectors/placesSelectors";
import {getPlaces} from '../redux/actions'


//Props are used by Route component
export type PlacesRouteProps = {
    places?: any[],
    placesLoading?: boolean
}

const Places: React.FC = () => {

    const StyledGrid = styled(Grid)`
		height: calc(100vh - ${({theme}) => theme.headerHeight} - ${({theme}) => theme.barHeight});
	`;

    return (
        <>
            <Bar/>
            <Grid container>
                <Grid item xs={6}>
                    <Router>
                        <Route component={PlacesList} path="list"/>
                        <Route component={PlaceSingle} path="/list/:placeId"/>
						{/*<Route component={PlacesList} places={places} placesLoading={placesLoading} path="list"/>*/}
                        {/*<Route component={PlaceSingle} places={places} path="/list/:placeId"/>*/}
                    </Router>
                </Grid>
                <StyledGrid item xs={6}>
                    <PlacesMap 
              
                     />
                </StyledGrid>
            </Grid>
        </>
    )
}

export default Places
      //  singlePlace={singlePlace}