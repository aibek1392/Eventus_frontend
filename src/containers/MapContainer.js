

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'

export class MapContainer extends Component {
    render() {
        return (
            <Map 
            google={this.props.google}
            zoom={14}
            style={style}
            initialCenter={{
                lat: 40.854885,
                lng: -88.081807
            }}
            zoom={15}
            onClick={this.onMapClicked}
            >
                <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        )
    }

}

export default GoogleApiWrapper({
    apiKey: (AIzaSyBdJbIOyrkeTAVOMiao_ka5JQjExTwf7F8)
})(MapContainer)