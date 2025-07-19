"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
// import productHero from '@/assets/product-hero.jpg';
// import productDetail1 from '@/assets/product-detail-1.jpg';
// import productDetail1 from '@/assets/product-detail-2.jpg';

const productHero =
  "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/NI_CATALOG/IMAGES/CIW/2025/2/11/2a6f9999-41e1-4c51-b54a-4b5fb14fb4d9_560379_1.png";
const productDetail1 =
  "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/NI_CATALOG/IMAGES/CIW/2025/1/28/f9e294ae-6905-4de6-804a-9cd9cb6a0579_355946_1.png";
const productDetail2 =
  "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/NI_CATALOG/IMAGES/CIW/2025/3/20/aed01105-38e2-4456-b3bc-a289afd8f0c7_637581_1.png";

const images = [productHero, productDetail1, productDetail2];

export default function ProductImageGallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full bg-gradient-surface">
      {/* Main Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={images[currentImage]}
          alt="Product"
          className="w-full h-full object-cover transition-smooth"
        />

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-smooth hover:bg-card hover:scale-110"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>

        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-smooth hover:bg-card hover:scale-110"
        >
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>

        {/* Wishlist Button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 w-10 h-10 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-bounce hover:scale-110"
        >
          <Heart
            className={`w-5 h-5 transition-smooth ${
              isLiked ? "text-accent fill-accent" : "text-muted-foreground"
            }`}
          />
        </button>

        {/* Image Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-2 h-2 rounded-full transition-smooth ${
                currentImage === index
                  ? "bg-primary shadow-glow"
                  : "bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="flex space-x-3 p-4 overflow-x-auto">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-smooth ${
              currentImage === index
                ? "border-primary shadow-lg"
                : "border-card-border"
            }`}
          >
            <img
              src={image}
              alt="Product"
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
