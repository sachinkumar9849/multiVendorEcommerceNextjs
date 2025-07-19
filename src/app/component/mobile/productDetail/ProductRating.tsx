"use client";

import { Star } from "lucide-react";

interface ProductRatingProps {
  rating: number;
  reviewCount: number;
  showReviewCount?: boolean;
}

export default function ProductRating({
  rating,
  reviewCount,
  showReviewCount = true,
}: ProductRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, index) => {
          const isFilled = index < fullStars;
          const isHalf = index === fullStars && hasHalfStar;

          return (
            <div key={index} className="relative">
              <Star
                className={`w-4 h-4 ${
                  isFilled || isHalf ? "star-filled fill-current" : "star-empty"
                }`}
              />
              {isHalf && (
                <Star
                  className="absolute top-0 left-0 w-4 h-4 star-filled fill-current"
                  style={{ clipPath: "inset(0 50% 0 0)" }}
                />
              )}
            </div>
          );
        })}
      </div>

      <span className="text-sm font-medium text-foreground">
        {rating.toFixed(1)}
      </span>

      {showReviewCount && (
        <span className="text-sm text-muted-foreground">
          ({reviewCount.toLocaleString()} reviews)
        </span>
      )}
    </div>
  );
}
