import { Grid } from '@material-ui/core'
import { Router } from '@reach/router'
import React, { FunctionComponent } from 'react'
import Route from '../Navigation/Route'
import Bar from './Bar'
import PlacesList from './list/PlacesList'
import PlaceSingle from './single/PlaceSingle'
import PlacesMap from './map/PlacesMap'


const Places: React.FC = () => {

	return (
		<>
			<Bar />
			<Grid container>
				<Grid item xs={6}>

					<Router>
						<Route component={PlacesList} path="list" />
						<Route component={PlaceSingle} path="/list/:placeId" />
					</Router>

				</Grid>
				<Grid item xs={6}>
					<PlacesMap />
				</Grid>
			</Grid>
		</>
	)
}

export default Places
