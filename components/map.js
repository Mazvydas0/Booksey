"use client";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState, useRef, useEffect } from "react";
import {
  Map,
  Marker,
  NavigationControl,
  GeolocateControl,
  Popup,
} from "react-map-gl";
import PopupBubble from "./popup";

export const markers = [
  {
    latitude: process.env.NEXT_PUBLIC_LIBRARY_LAT,
    longitude: process.env.NEXT_PUBLIC_LIBRARY_LONG,
    name: "National Library of Mazvydas",
    description: "Here you can find our book store",
    address: "Gedimino pr. 51, Vilnius",
    hours: "Mon-Fri: 9 AM - 6 PM",
  },
  {
    latitude: process.env.NEXT_PUBLIC_VU_LIBRARY_LAT,
    longitude: process.env.NEXT_PUBLIC_VU_LIBRARY_LONG,
    name: "Library of Vilnius University",
    description: "This is the library of Vilnius University",
    address: "Universiteto g. 3, Vilnius",
    hours: "Mon-Fri: 9 AM - 9 PM Sat: 9AM - 4PM",
  },
];

export default function MapComponent({ viewport, setViewport, selectedMarker, setSelectedMarker}) {
  const [showPopup, setShowPopup] = useState(false);
  const mapRef = useRef(null);

  const handleMarkerClick = () => {
    setShowPopup(true);
    setViewport((prevViewport) => ({ ...prevViewport, zoom: 15 }));
    mapRef.current.flyTo({
      center: [viewport.longitude, viewport.latitude],
      zoom: 15, // Adjust zoom level as needed
      duration: 2000, // Duration of the zoom animation in milliseconds
    });
  };

  useEffect(() => {
    if (mapRef.current && selectedMarker) {
      mapRef.current.flyTo({
        center: [selectedMarker.longitude, selectedMarker.latitude],
        zoom: 15,
        duration: 2000,
      });
    }
  }, [selectedMarker]);

  return (
    <div className="h-full overflow-hidden">
      <Map
        ref={mapRef}
        initialViewState={viewport}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        mapStyle={process.env.NEXT_PUBLIC_MAPBOX_STYLE}
        minZoom={3}
        maxZoom={20}
        // onMove={(evt) => setViewport(evt.viewState)}
      >
        <GeolocateControl position="top-left" />
        <NavigationControl position="top-left" />
        {markers.map((marker, index) => (
          <Marker
            key={index}
            longitude={marker.longitude}
            latitude={marker.latitude}
            anchor="bottom"
            onClick={() => setSelectedMarker(marker)}
          />
        ))}
        {selectedMarker && (
          <Popup
            longitude={selectedMarker.longitude}
            latitude={selectedMarker.latitude}
            closeOnClick={false}
            closeButton={false}
            onClose={() => setSelectedMarker(null)}
          >
            <PopupBubble
              name={selectedMarker.name}
              description={selectedMarker.description}
              address={selectedMarker.address}
              hours={selectedMarker.hours}
              onClose={() => setSelectedMarker(null)}
            />
          </Popup>
        )}
      </Map>
    </div>
  );
}
