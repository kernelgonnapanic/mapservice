import React, { useState } from 'react'
import PlacesFormik from './PlacesFormik'
import PlacesMap from './PlacesMap'
import * as S from './PlacesForm.styles'

interface Props {}

const PlacesForm: React.FC<Props> = () => {
	const [selectedLatLng, setSelectedLatLng] = useState<{}>({})

	return (
		<>
			<S.Container>
				<div>
					<PlacesFormik selectedLatLng={selectedLatLng} />
				</div>
				<S.MapWrapper>
					<PlacesMap setSelectedLatLng={setSelectedLatLng} />
				</S.MapWrapper>
			</S.Container>
		</>
	)
}

export default PlacesForm
