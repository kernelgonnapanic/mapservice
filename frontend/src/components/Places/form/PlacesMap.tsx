import React, { Component, createRef } from 'react'
import { Marker, Popup, TileLayer } from 'react-leaflet'
import * as S from './PlacesMap.styles'

type Position = { lat: number; lng: number }

type State = {
	center: Position
	marker: Position
	zoom: number
	draggable: boolean
}

class PlacesMap extends Component<{}, State> {
	public state = {
		center: {
			lat: 51.505,
			lng: -0.09,
		},
		marker: {
			lat: 51.505,
			lng: -0.09,
		},
		zoom: 13,
		draggable: true,
	}

	refmarker = createRef<Marker>()

	toggleDraggable = () => {
		this.setState({ draggable: !this.state.draggable })
	}

	updatePosition = () => {
		const marker = this.refmarker.current

		if (marker) {
			this.setState({
				marker: marker.leafletElement.getLatLng(),
			})
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
			<S.MapContainer
				center={position}
				zoom={this.state.zoom}
				style={{ height: '100%' }}
			>
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
					{/* <Popup minWidth={90}>
						<span onClick={this.toggleDraggable}>
							{this.state.draggable
								? 'DRAG MARKER'
								: 'MARKER FIXED'}
						</span>
					</Popup> */}
				</Marker>
			</S.MapContainer>
		)
	}
}

export default PlacesMap
