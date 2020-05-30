import React, { Component } from 'react'
import { TileLayer, Map, Marker, Popup } from 'react-leaflet'
import * as S from './PlacesMap.styles'
import { connect } from 'react-redux'
import { getMarkers } from '../../../redux/actions/placesActions'
import { extractMarkers } from '../../../redux/selectors/placesSelectors'
import PlacesMapMarker from './PlacesMapMarker'

interface Props {
	markers?: []
	singlePlace?: any
	getMarkers: (perPage: number) => void
	coordinates: {
		lat: number
		long: number
	}
	zoom: number
}

interface MarkerValue {
	title: string
	coordinates: any
	_id: string
	address: {
		city: string
		street: string
		number: number
	}
	phoneNumber: number
	placeImage: string
	placeType: string
}
class PlacesMap extends Component<Props> {
	public state = {
		center: this.props.coordinates,
		zoom: this.props.zoom,
		draggable: true,
	}

	componentDidMount(): void {
		this.props.getMarkers(1000)
	}

	public render(): JSX.Element {
		const { markers } = this.props

		return (
			<S.StyledMap
				animate={true}
				//@ts-ignore
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
			</S.StyledMap>
		)
	}
}
interface RootState {
	singlePlace: {
		places: {
			place: {}
		}
	}
	global: {
		coordinates: {
			lat: number
			long: number
		}
		zoom: number
	}
}

const mapStateToProps = (state: RootState) => ({
	markers: extractMarkers(state),
	coordinates: state.global.coordinates,
	zoom: state.global.zoom,
})

//@ts-ignore
const mapDispatchToProps = (dispatch) => ({
	getMarkers: (perPage: number) => dispatch(getMarkers(perPage)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PlacesMap)
