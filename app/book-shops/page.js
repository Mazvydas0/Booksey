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
    <>
      <div className="flex flex-col items-center justify-center">
          <h1 className="pt-8">Booksey stores near me</h1>
        <div className="flex h-screen w-screen">
          <div className="flex-1 mx-8 mb-8 mt-10 border p-2">
            <MapPage
              viewport={viewport}
              setViewport={setViewport}
              selectedMarker={selectedMarker}
              setSelectedMarker={setSelectedMarker}
            />
          </div>
          <div className="flex-1 mx-8 mb-8 mt-10 border">
            <DescriptionPage
              setViewport={setViewport}
              setSelectedMarker={setSelectedMarker}
            />
          </div>
        </div>
      </div>
    </>
  );
}
