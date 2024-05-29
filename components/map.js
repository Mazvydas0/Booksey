"use client";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState, useRef } from "react";
import {
  Map,
  Marker,
  NavigationControl,
  GeolocateControl,
  Popup,
} from "react-map-gl";
import PopupBubble from "./popup";

export default function MapComponent({ lat, long, zoom }) {
  const [showPopup, setShowPopup] = useState(false);
  const [viewport, setViewport] = useState({
    latitude: lat,
    longitude: long,
    zoom: zoom,
  });
  const mapRef = useRef(null);

  const handleMarkerClick = () => {
    setShowPopup(true);
    mapRef.current.flyTo({
      center: [long, lat],
      zoom: 15, // Adjust zoom level as needed
      duration: 2000, // Duration of the zoom animation in milliseconds
    });
  };

  return (
    <div className="h-full overflow-hidden">
      <Map
        ref={mapRef}
        initialViewState={viewport}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        mapStyle={process.env.NEXT_PUBLIC_MAPBOX_STYLE}
        minZoom={3}
        maxZoom={20}
      >
        <GeolocateControl position="top-left" />
        <NavigationControl position="top-left" />
        <Marker
          longitude={long}
          latitude={lat}
          anchor="bottom"
          onClick={handleMarkerClick}
        />
        {showPopup && (
          <Popup
            longitude={long}
            latitude={lat}
            closeOnClick={false}
            closeButton={false}
          >
            <PopupBubble onClose={() => setShowPopup(false)} />
          </Popup>
        )}
      </Map>
    </div>
  );
}
