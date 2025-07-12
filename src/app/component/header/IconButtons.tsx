"use client";
import React, { useState } from "react";

const IconButtons = () => {
  const [refreshCount, setRefreshCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const handleRefresh = () => {
    setRefreshCount(refreshCount + 1);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="flex items-center space-x-6 justify-end">
      {/* Refresh Button */}
      <button
        onClick={handleRefresh}
        className="text-white hover:text-gray-300 transition-colors duration-200 p-2 hover:bg-gray-700 rounded-lg"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      </button>

      {/* Heart/Like Button */}
      <button
        onClick={handleLike}
        className="text-white hover:text-red-400 transition-colors duration-200 p-2 hover:bg-gray-700 rounded-lg"
      >
        <svg
          className="w-8 h-8"
          fill={isLiked ? "currentColor" : "none"}
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>

      {/* Shopping Bag Button with Badge */}
      <div className="relative">
        <button
          onClick={handleCart}
          className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-colors duration-200 shadow-lg"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z"
            />
          </svg>
        </button>

        {/* Badge */}
        <div className="absolute -top-2 -right-2 bg-white text-gray-800 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-gray-800">
          {cartCount}
        </div>
      </div>
    </div>
  );
};

export default IconButtons;
