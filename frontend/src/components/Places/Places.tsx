import { Grid } from '@material-ui/core'
import React, { useState } from 'react'
import PlacesList from './PlacesList'

const Places: React.FC = () => {
	const [selectedListElementId, setSelectedListElementId] = useState<string>(
		'',
	)

	console.log(selectedListElementId)

	return (
		<>
			<Grid container>
				<Grid item xs={6}>
					<PlacesList
						setSelectedListElementId={setSelectedListElementId}
					/>
				</Grid>
				<Grid item xs={6}>
					TEST
				</Grid>
			</Grid>
		</>
	)
}

export default Places
