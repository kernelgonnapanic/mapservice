import { Grid } from '@material-ui/core'
import React, { useState, FunctionComponent } from 'react'
import PlacesList from './list/PlacesList'
import PlaceSingle from './single/PlaceSingle'
import { Link, Router, RouteComponentProps } from '@reach/router'
import { Route } from '../Navigation/Navigation'




const Places: FunctionComponent = () => {
	const [selectedListElementId, setSelectedListElementId] = useState<string>(
		'',
	)

	return (
		<>
			<Grid container>
				<Grid item xs={6}>
					<Link to="list">TO</Link>
					<Link to="single">Place</Link>
					<div>
						<Router>
							<Route component={PlacesList} setSelectedListElementId={setSelectedListElementId} path="list" />


							<Route component={PlaceSingle} path="/single" />
						</Router>
					</div>

				</Grid>
				<Grid item xs={6}>
					<PlaceSingle />
				</Grid>
			</Grid>
		</>
	)
}

export default Places
