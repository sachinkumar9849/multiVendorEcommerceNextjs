"use client";

import { useState } from "react";

interface Variant {
  id: string;
  name: string;
  value: string;
  available: boolean;
}

interface ProductVariantsProps {
  colorVariants: Variant[];
  sizeVariants: Variant[];
}

export default function ProductVariants({
  colorVariants,
  sizeVariants,
}: ProductVariantsProps) {
  const [selectedColor, setSelectedColor] = useState(colorVariants[0]?.id);
  const [selectedSize, setSelectedSize] = useState(sizeVariants[0]?.id);

  return (
    <div className="space-y-6">
      {/* Color Variants */}
      {colorVariants.length > 0 && (
        <div className="space-y-3">
          <label className="text-sm font-medium text-foreground">
            Color: {colorVariants.find((c) => c.id === selectedColor)?.name}
          </label>
          <div className="flex space-x-3 overflow-x-auto">
            {colorVariants.map((color) => (
              <button
                key={color.id}
                onClick={() => color.available && setSelectedColor(color.id)}
                disabled={!color.available}
                className={`flex-shrink-0 w-10 h-10 rounded-md border-2 transition-smooth ${
                  selectedColor === color.id
                    ? "border-[#ff3b1f] bg-[#ff3b1f] text-white shadow-glow"
                    : "border-card-border"
                } ${
                  !color.available
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:scale-105"
                }`}
                style={{ backgroundColor: color.value }}
                title={color.name}
              >
                {!color.available && (
                  <div className="w-full h-full rounded-lg bg-destructive/20 flex items-center justify-center">
                    <span className="text-xs text-destructive font-bold">
                      ✕
                    </span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Size Variants */}
      {sizeVariants.length > 0 && (
        <div className="space-y-3">
          <label className="text-sm font-medium text-foreground">
            Size: {sizeVariants.find((s) => s.id === selectedSize)?.name}
          </label>
          <div className="flex">
            {sizeVariants.map((size) => (
              <button
                key={size.id}
                onClick={() => size.available && setSelectedSize(size.id)}
                disabled={!size.available}
                className={`py-1 px-4 mr-2  rounded-lg border-2 font-medium transition-smooth ${
                  selectedSize === size.id
                    ? "border-[#ff3b1f] bg-[#ff3b1f] text-white shadow-glow"
                    : "border-card-border bg-card hover:border-primary/50"
                } ${
                  !size.available
                    ? "opacity-50 cursor-not-allowed line-through"
                    : "hover:scale-105"
                }`}
              >
                {size.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
