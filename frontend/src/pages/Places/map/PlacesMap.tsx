import React, { Component } from 'react'
import { TileLayer, Map, Marker, Popup } from 'react-leaflet'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { getMarkers } from '../../redux/actions'
import { extractMarkers } from '../../redux/selectors/placesSelectors'
import PlacesMapMarker from './PlacesMapMarker'

interface Props {
	markers?: []
	singlePlace?: any
	getMarkers: (perPage: number) => void
}

const StyledMap = styled(Map)`
	height: 100%;
`

interface MarkerValue {
	title: string
	coordinates: any
	_id: string
	address: {
		street: string
		number: number
	}
	phoneNumber: number
	placeImage: string
	placeType: string
}

class PlacesMap extends Component<Props> {
	public state = {
		center: {
			lat: 52.163228,
			lng: 22.269012,
		},
		zoom: 12,
		draggable: true,
	}

	componentDidMount(): void {
		if (this.props.singlePlace && this.props.singlePlace.coordinates) {
			this.setState({
				center: {
					lat: this.props.singlePlace.coordinates[0].lat,
					lng: this.props.singlePlace.coordinates[0].long,
				},
				zoom: 14,
			})
		}

		this.props.getMarkers(1000)
	}

	public render(): JSX.Element {
		const { markers } = this.props

		return (
			<StyledMap
				animate={true}
				center={this.state.center}
				zoom={this.state.zoom}
			>
				<TileLayer
					attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{markers &&
					markers.map((marker: MarkerValue) => {
						const { lat, long } = marker.coordinates[0]
						const { _id } = marker

						if (marker && lat && long) {
							return <PlacesMapMarker marker={marker} key={_id} />
						}
					})}
			</StyledMap>
		)
	}
}

interface RootState {
	singlePlace: {
		places: {
			place: {}
		}
	}
}

const mapStateToProps = (state: RootState) => ({
	markers: extractMarkers(state),
	// singlePlace: state.places.place
})

//@ts-ignore
const mapDispatchToProps = dispatch => ({
	getMarkers: (perPage: number) => dispatch(getMarkers(perPage)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PlacesMap)
