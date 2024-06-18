"use client";
import DescriptionPage from "@/components/description-page";
import MapPage from "@/components/map-page";
import { useState, Suspense } from "react";
import MapLoading from "@/components/map-loading";

export default function BooksShops() {
  const [viewport, setViewport] = useState({
    latitude: process.env.NEXT_PUBLIC_LIBRARY_LAT,
    longitude: process.env.NEXT_PUBLIC_LIBRARY_LONG,
    zoom: 10,
  });

  const [selectedMarker, setSelectedMarker] = useState(null);

  return (
    <div className="flex h-screen w-screen">  
      <div className="flex-1 mt-40 m-8 border p-2">
        <MapPage
          viewport={viewport}
          setViewport={setViewport}
          selectedMarker={selectedMarker}
          setSelectedMarker={setSelectedMarker}
        />
      </div>
      <div className="flex-1 mt-40 m-8 border">
        <DescriptionPage
          setViewport={setViewport}
          setSelectedMarker={setSelectedMarker}
        />
      </div>
    </div>
  );
}