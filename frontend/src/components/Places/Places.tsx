import { Grid } from '@material-ui/core'
import { Router } from '@reach/router'
import React, { FunctionComponent, useState } from 'react'
import { Route } from '../Navigation/Navigation'
import PlacesList from './list/PlacesList'
import PlaceSingle from './single/PlaceSingle'
import Bar from './Bar'


const Places: FunctionComponent = () => {

	return (
		<>
			<Grid container>
				<Bar />
				<Grid item xs={6}>
					<div>
						<Router>
							<Route component={PlacesList} path="list" />
							<Route component={PlaceSingle} path="/list/:placeId" />
						</Router>
					</div>
				</Grid>
				<div>
					test</div>
			</Grid>
		</>
	)
}

export default Places
