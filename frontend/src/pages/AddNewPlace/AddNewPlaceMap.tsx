import React, { Component, createRef } from 'react'
import { Marker, Popup, TileLayer } from 'react-leaflet'
import * as S from './styles/AddNewPlaceMap.styles'

type Position = { lat: number; lng: number }

interface Props {
	setFieldValue?: (field: string, value: any) => void
}

type State = {
	center: Position
	marker: Position
	zoom: number
	draggable: boolean
}

class AddNewPlaceMap extends Component<Props, State> {
	public state = {
		center: {
			lat: 52.163228,
			lng: 22.269012,
		},
		marker: {
			lat: 52.163228,
			lng: 22.269012,
		},
		zoom: 13,
		draggable: true,
	}

	refmarker = createRef<Marker>()

	toggleDraggable = (): void => {
		this.setState({ draggable: !this.state.draggable })
	}

	updatePosition = (): void => {
		const marker = this.refmarker.current

		if (marker) {
			this.setState({
				marker: marker.leafletElement.getLatLng(),
			})
		}

		const { setFieldValue } = this.props

		if (setFieldValue) {
			const { marker } = this.state

			setFieldValue('lat', marker.lat)
			setFieldValue('long', marker.lng)
		}
	}

	public render(): JSX.Element {
		const position: [number, number] = [
			this.state.center.lat,
			this.state.center.lng,
		]
		const markerPosition: [number, number] = [
			this.state.marker.lat,
			this.state.marker.lng,
		]

		return (
			<S.MapContainer center={position} zoom={this.state.zoom}>
				<TileLayer
					attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker
					draggable={this.state.draggable}
					ondragend={this.updatePosition}
					position={markerPosition}
					ref={this.refmarker}
				>
					<Popup minWidth={90}>
						<span onClick={this.toggleDraggable}>
							{this.state.draggable
								? 'DRAG MARKER'
								: 'MARKER FIXED'}
						</span>
					</Popup>
				</Marker>
			</S.MapContainer>
		)
	}
}

export default AddNewPlaceMap
