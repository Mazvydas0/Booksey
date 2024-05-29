import { useState } from "react";

export default function PopupBubble({
  onClose,
}) {
  return (
    <div className="relative">
      <button
        className="absolute top-0 right-0 p-1 text-gray-500 hover:text-gray-700"
        onClick={onClose}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <h2 className="text-sm font-semibold text-gray-800 pr-8">
        National Library of Mazvydas
      </h2>
      <p className="text-xs text-gray-600">
        Here you can find our book store
      </p>
      <div className="mt-1">
        <h3 className="text-xs font-semibold text-gray-800">Address:</h3>
        <p className="text-xs text-gray-600">Gedimino pr. 51, Vilnius</p>
      </div>
      <div className="mt-1">
        <h3 className="text-xs font-semibold text-gray-800">Working Hours:</h3>
        <p className="text-xs text-gray-600">Mon-Fri: 9 AM - 6 PM</p>
      </div>
    </div>
  );
}
