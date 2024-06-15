import DetailCard from "@/components/detail-card";
import { markers } from "./map";

export default function DescriptionPage({ setViewport, setSelectedMarker }) {
  const handleCardClick = (marker) => {
    setViewport({
      latitude: marker.latitude,
      longitude: marker.longitude,
      zoom: 15,
    });
    setSelectedMarker(marker);
  };

  return (
    <>
      {markers.map((marker, index) => (
        <DetailCard
          key={index}
          name={marker.name}
          address={marker.address}
          hours={marker.hours}
          onClick={() => handleCardClick(marker)}
        />
      ))}
    </>
  );
}