import React from 'react'
import PlacesFormik from './PlacesFormik'
import { Grid } from '@material-ui/core'
import PlacesMap from './PlacesMap'

interface Props {}

const PlacesForm: React.FC<Props> = () => {
	return (
		<>
			<Grid container>
				<Grid item xs={8}>
					<PlacesFormik />
				</Grid>
				<Grid item xs={4}>
					<PlacesMap />
				</Grid>
			</Grid>
		</>
	)
}

export default PlacesForm
