"use client";
import React from "react";

const SearchButton = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 pr-12 border bg-white border-gray-300 rounded-lg focus:outline-none  "
        />
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#ff3b1f] hover:bg-[#ff3b1f] text-white p-2 rounded-md transition-colors duration-200">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchButton;
