import { useState, useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-routing-machine";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import "./LiveLocationMap.css"; // Import the CSS file for fullscreen styles

// Fix for missing default icon issue in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Geocode function to get coordinates from a text address
const getGeocode = async (address) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        address
      )}`
    );
    const data = await response.json();
    console.log(data);
    if (data && data.length > 0) {
      return {
        lat: parseFloat(data[0].lat),
        lon: parseFloat(data[0].lon),
      };
    }
    throw new Error("Location not found");
  } catch (error) {
    console.error("Error during geocoding:", error);
    return null;
  }
};

// Routing component to add the route to the map
const RoutingMachine = ({ currentPosition, destinationPosition }) => {
  const map = useMap();

  useEffect(() => {
    if (currentPosition && destinationPosition) {
      const routingControl = L.Routing.control({
        waypoints: [
          L.latLng(currentPosition.lat, currentPosition.lon),
          L.latLng(destinationPosition.lat, destinationPosition.lon),
        ],
        routeWhileDragging: true,
        lineOptions: {
          styles: [{ color: "blue", weight: 4 }],
        },
        show: true,
        // addWaypoints: false,
      }).addTo(map);

      return () => map.removeControl(routingControl);
    }
  }, [map, currentPosition, destinationPosition]);

  return null;
};

const DirectionMap = ({ address: destinationPosition }) => {
  const [currentPosition, setCurrentPosition] = useState(null);
  //   const [destinationAddress, setDestinationAddress] = useState('');
  // const [destinationPosition, setDestinationPosition] = useState(null);
  // const [loading, setLoading] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false); // State to manage full-screen toggle
  // useEffect(() => {
  //     if(address){
  //         setDestination(address)
  //     }
  // }, [address])
  // console.log(address)
  // const setDestination = async (address) => {
  //     setLoading(true);
  //     const destinationCoords = await getGeocode(address);
  //     if (destinationCoords) {
  //       setDestinationPosition(destinationCoords);
  //     } else {
  //       alert('Location not found!');
  //     }
  //     setLoading(false);
  // }
  // Get the user's current location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setCurrentPosition({ lat: latitude, lon: longitude });
      },
      (err) => console.error("Error fetching location:", err)
    );
  }, []);

  // console.log(currentPosition)

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };
  console.log(currentPosition, destinationPosition);
  return (
    <div>
      <div
        className={isFullScreen ? "map-container full-screen" : "map-container"}
      >
        <MapContainer
          center={
            currentPosition
              ? [currentPosition.lat, currentPosition.lon]
              : [51.505, -0.09]
          }
          zoom={13}
          style={{ height: "100%", width: "100%" }}
          onClick={toggleFullScreen} // Toggle full screen on click
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {currentPosition && destinationPosition && (
            <RoutingMachine
              currentPosition={currentPosition}
              destinationPosition={destinationPosition}
            />
          )}
        </MapContainer>

        {/* Button to toggle full screen */}
        <button onClick={toggleFullScreen} className="fullscreen-button">
          {isFullScreen ? "Exit Full Screen" : "Full Screen"}
        </button>
      </div>
    </div>
  );
};

export default DirectionMap;
