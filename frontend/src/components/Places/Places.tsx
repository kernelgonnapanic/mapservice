import { Grid } from '@material-ui/core'
import React, { useState } from 'react'
import PlacesList from './list/PlacesList'
import PlaceSingle from './single/PlaceSingle'

const Places: React.FC = () => {
	const [selectedListElementId, setSelectedListElementId] = useState<string>(
		'',
	)

	return (
		<>
			<Grid container>
				<Grid item xs={6}>
					<PlacesList
						setSelectedListElementId={setSelectedListElementId}
					/>
				</Grid>
				<Grid item xs={6}>
					<PlaceSingle />
				</Grid>
			</Grid>
		</>
	)
}

export default Places
