"use client";

export default function MapLoading() {
  return (
    <div className="flex justify-center items-center h-full w-full0">
      <div className="spinner-border animate-spin h-12 w-12 border-4 border-gray-200 rounded-full">
        <span className="sr-only"> Loading</span>
      </div>
      <div className="text-lg font-bold text-gray-600">
        <h2>Loading</h2>
      </div>
    </div>
  );
}
