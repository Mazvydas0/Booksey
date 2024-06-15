import MapComponent from "@/components/map";

export default function MapPage({viewport, setViewport, selectedMarker, setSelectedMarker}) {
  return (
    <MapComponent
      viewport={viewport}
      setViewport={setViewport}
      selectedMarker={selectedMarker}
      setSelectedMarker={setSelectedMarker}
    />
  );
}
