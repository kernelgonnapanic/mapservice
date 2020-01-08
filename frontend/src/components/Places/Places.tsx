import { Grid } from '@material-ui/core'
import React, { useState, FunctionComponent } from 'react'
import PlacesList from './list/PlacesList'
import PlaceSingle from './single/PlaceSingle'
import { Link, Router, RouteComponentProps } from '@reach/router'
import { Route } from '../Navigation/Navigation'
import styled from 'styled-components'



const Places: FunctionComponent = () => {
	const [selectedListElementId, setSelectedListElementId] = useState<string>(
		'',
	)

	return (
		<>
			<Grid container>
				<Grid item xs={6}>
					<div>
						<Router>
							<Route component={PlacesList} setSelectedListElementId={setSelectedListElementId} path="list" />
							<Route component={PlaceSingle} path="/list/:placeId" />
						</Router>
					</div>
				</Grid>

			</Grid>
		</>
	)
}

export default Places
