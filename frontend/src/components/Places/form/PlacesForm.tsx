import React, { useState } from 'react'
import PlacesFormik from './PlacesFormik'
import PlacesMap from './PlacesMap'
import * as S from './PlacesForm.styles'

interface Props { }

const PlacesForm: React.FC<Props> = () => {
	return (
		<>
			<S.Container>
				<S.FormikWrapper>
					<PlacesFormik />
				</S.FormikWrapper>
				<S.MapWrapper></S.MapWrapper>
			</S.Container>
		</>
	)
}

export default PlacesForm
