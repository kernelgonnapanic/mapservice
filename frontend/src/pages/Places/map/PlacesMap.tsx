import React from 'react'
import { TileLayer } from 'react-leaflet'
import * as S from './PlacesMap.styles'
import { connect } from 'react-redux'
import PlacesMapMarkers from './PlacesMapMarkers'
import { defaultZoom } from '../../../assets/globalSettings/globalSettings'

interface Props {
	singlePlace?: any
	coordinates: {
		lat: number
		long: number
	}
	zoom: number
}

class PlacesMap extends React.PureComponent<Props> {
	public state = {
		center: this.props.coordinates,
		zoom: this.props.zoom,
		draggable: true,
	}

	componentDidUpdate(
		prevProps: Readonly<Props>,
		prevState: Readonly<{}>,
		snapshot?: any,
	) {
		if (prevProps.coordinates !== this.props.coordinates) {
			this.setState({
				center: this.props.coordinates,
				zoom: defaultZoom,
			})
		}
	}

	public render(): JSX.Element {
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
				<PlacesMapMarkers />
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
	coordinates: state.global.coordinates,
	zoom: state.global.zoom,
})

//@ts-ignore
const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(PlacesMap)
