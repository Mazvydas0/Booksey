import MapComponent from "@/components/map";

export default async function MapPage() {

  await new Promise((resolve) => setTimeout(resolve, 1500));

  return (
    <MapComponent
      lat={process.env.LIBRARY_LAT}
      long={process.env.LIBRARY_LONG}
      zoom={10}
      height="100%"
      width="100%"
    />
  );
}