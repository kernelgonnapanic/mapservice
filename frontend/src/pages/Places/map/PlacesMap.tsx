import React, { Component } from 'react'
import { TileLayer, Map, Marker, Popup } from 'react-leaflet'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {getPlaces} from '../../redux/actions'
import {extractPlaces} from '../../redux/selectors/placesSelectors'

interface Props {
    places?: [],
    singlePlace?: any
}


const StyledMap = styled(Map)`
    height: 100%;
`;

interface PlaceValue {
    title: string
    coordinates: any,
    _id: string
}

class PlacesMap extends Component<Props> {
    public state = {
        center: {
            lat: 52.163228,
            lng: 22.269012,
        },
        zoom: 12,
        draggable: true,
    };

    componentDidMount(): void {
        if(this.props.singlePlace && this.props.singlePlace.coordinates){

            this.setState({
                center: {
                    lat: this.props.singlePlace.coordinates[0].lat,
                    lng: this.props.singlePlace.coordinates[0].long,

                },
                zoom: 14
            });
        }

        getPlaces(1000, 0);
    }


    public render(): JSX.Element {
        const {  places } = this.props;

        return (
            <StyledMap animate={true}
                       center={this.state.center} zoom={this.state.zoom}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {places && places.map((place: PlaceValue) => {
                  const {lat, long } = place.coordinates[0];
                   const {_id} = place

                     if(place && lat && long){
                                return <Marker key={_id} position={[lat,  long]}>
                                    <Popup>
                                        <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
                                    </Popup>
                                </Marker>
                            }
                        }
                )} 
            </StyledMap>
        )
    }
}


interface RootState {
    singlePlace: {
        places: {
            place: {}
        }
    },
    places: {
        place: {}
    }

}

const mapStateToProps = (state: RootState) => {

    // console.log(state.places.place);

    return {
        places: extractPlaces(state)
        // singlePlace: state.places.place
    }
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PlacesMap)
