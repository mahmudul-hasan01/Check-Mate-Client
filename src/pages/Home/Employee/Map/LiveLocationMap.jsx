import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Import Leaflet marker icons
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix for missing default icon issue in Leaflet
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Component to update map view based on user's location
const MyLocationMarker = ({ position }) => {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.setView(position, 13); // Center the map on the user's location
    }
  }, [position, map]);

  return position === null ? null : <Marker position={position} />;
};

const LiveLocationMap = () => {
  const [position, setPosition] = useState(null);

  // Use the Geolocation API to get the user's current position
  useEffect(() => {
    const geoId = navigator.geolocation.watchPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setPosition([latitude, longitude]);
      },
      (err) => {
        console.error('Error fetching location:', err);
      },
      {
        enableHighAccuracy: true, // Enable high accuracy for better results
        maximumAge: 0,
        timeout: 10000,
      }
    );

    // Cleanup watcher when component is unmounted
    return () => {
      navigator.geolocation.clearWatch(geoId);
    };
  }, []);

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '300px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {position && <MyLocationMarker position={position} />}
    </MapContainer>
  );
};

export default LiveLocationMap;
