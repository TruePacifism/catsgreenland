import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markers: [
        { name: 'Иван Иванов', city: 'Москва' },
        { name: 'Петр Петров', city: 'Санкт-Петербург' },
        { name: 'Анна Сидорова', city: 'Новосибирск' },
      ],
    };
  }

  renderMarkers = () => {
    const { markers } = this.state;
    const geocoder = L.Control.Geocoder.nominatim();

    return markers.map((marker, index) => {
      return geocoder.geocode(marker.city, results => {
        const latlng = L.latLng(results[0].center.lat, results[0].center.lng);
        return (
          <Marker key={index} position={latlng}>
            <Popup>
              <span>{marker.name}</span>
            </Popup>
          </Marker>
        );
      });
    });
  };

  render() {
    return (
      <MapContainer center={[55.7558, 37.6173]} zoom={5}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {this.renderMarkers()}
      </MapContainer>
    );
  }
}

export default Map;
