import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const fetchCoordinates = async (address) => {
    const apiKey = 'YOUR_OPENCAGE_API_KEY'; // Replace with your OpenCage API key
    const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(address)}&key=${apiKey}`);
    const data = await response.json();
    
    if (data.results.length > 0) {
      const { lat, lng } = data.results[0].geometry;
      return { latitude: lat, longitude: lng };
    } else {
      throw new Error('Location not found');
    }
  };

const MapComponent = ({ address }) => {
  const [position, setPosition] = useState([51.505, -0.09]); // Default position if address is not found
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCoordinates = async () => {
      try {
        const { latitude, longitude } = await fetchCoordinates(address);
        setPosition([latitude, longitude]);
        setError(null);
      } catch (err) {
        setError(err.message);
      }
    };

    if (address) {
      getCoordinates();
    }
  }, [address]);

  return (
    <div>
      {error && <p>{error}</p>}
      <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={new L.Icon({
          iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
          shadowSize: [41, 41]
        })}>
          <Popup>
            Address: {address}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
