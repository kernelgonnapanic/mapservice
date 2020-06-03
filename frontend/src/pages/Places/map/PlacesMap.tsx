import React, {Component} from 'react'
import {TileLayer, Map, Marker, Popup} from 'react-leaflet'
import * as S from './PlacesMap.styles'
import {connect} from 'react-redux'
import {getMarkers} from '../../../redux/actions/placesActions'
import {extractMarkers, extractPlaces} from '../../../redux/selectors/placesSelectors'
import PlacesMapMarkers from "./PlacesMapMarkers";
import {defaultZoom} from "../../../assets/globalSettings/globalSettings";

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

class PlacesMap extends React.PureComponent<Props> {
    public state = {
        center: this.props.coordinates,
        zoom: this.props.zoom,
        draggable: true,
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<{}>, snapshot?: any) {
        console.log(prevProps.coordinates);
        if(prevProps.coordinates !== this.props.coordinates){
            this.setState({
                center: this.props.coordinates,
                zoom: defaultZoom
            })
        }
    }

    public render(): JSX.Element {

        const {markers} = this.props

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
                <PlacesMapMarkers
                    markers={markers}
                />

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
