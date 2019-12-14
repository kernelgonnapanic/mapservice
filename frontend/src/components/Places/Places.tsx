import React from 'react'
import { Grid } from '@material-ui/core'
import PlacesList from './PlacesList'

interface Props {}

const Places: React.FC<Props> = () => {
	return (
		<>
			<Grid container>
				<Grid item xs={6}>
					<PlacesList />>
				</Grid>
				<Grid item xs={6}>
					TEST
				</Grid>
			</Grid>
		</>
	)
}

export default Places
