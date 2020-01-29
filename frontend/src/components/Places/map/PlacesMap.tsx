import React, { Component, createRef } from 'react'
import { Marker, Popup, TileLayer, Map } from 'react-leaflet'
import styled from 'styled-components'



interface Props {

}

type State = {

}

const StyledMap = styled(Map)`
    height: 100%;
`


class PlacesMap extends Component<Props, State> {
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

    public render(): JSX.Element {
        return (
            <StyledMap center={{ lat: 52.163228, lng: 22.269012 }} zoom={this.state.zoom}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

            </StyledMap>
        )
    }
}

export default PlacesMap
