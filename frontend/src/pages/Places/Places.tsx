import { Grid } from '@material-ui/core'
import { Router, useParams } from '@reach/router'

import React from 'react'
import Route from '../Navigation/Route'
import Bar from './Bar'
import PlacesList from './list/PlacesList'
import PlaceSingle from './single/PlaceSingle'
import PlacesMap from './map/PlacesMap'
import styled from 'styled-components'



//Props are used by Route component
export type PlacesRouteProps = {
    places?: any[]
    placesLoading?: boolean
}


const StyledGrid = styled(Grid)`
		height: calc(
			100vh - ${({ theme }) => theme.headerHeight} -
				${({ theme }) => theme.barHeight}
		);
	`

const Places: React.FC = React.memo(() => {

    return (
        <>
            <Bar />
            <Grid container>
                <Grid item xs={5}>
                    <Router>
                        <Route component={PlacesList} path="list" />
                        <Route component={PlaceSingle} path="/list/:placeId" />
                    </Router>
                </Grid>
                <StyledGrid item xs={7}>
                    <PlacesMap />
                </StyledGrid>
            </Grid>
        </>
    )
})

export default Places
