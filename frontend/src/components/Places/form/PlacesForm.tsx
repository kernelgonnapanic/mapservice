import React from 'react'
import PlacesFormik from './PlacesFormik'
import PlacesMap from './PlacesMap'

interface Props {}

const PlacesForm: React.FC<Props> = () => {
	return (
		<div>
			<PlacesFormik />
			<PlacesMap />
		</div>
	)
}

export default PlacesForm
