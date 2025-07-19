"use client";

import { ArrowLeft, Share2 } from "lucide-react";
import ProductTabs from "./ProductTabs";
import ProductActions from "./ProductActions";
import ProductVariants from "./ProductVariants";
import ProductRating from "./ProductRating";
import ProductImageGallery from "./ProductImageGallery";

const colorVariants = [
  { id: "black", name: "Midnight Black", value: "#1a1a1a", available: true },
  { id: "white", name: "Pearl White", value: "#f8f9fa", available: true },
  { id: "rose", name: "Rose Gold", value: "#e8b4cb", available: false },
  { id: "blue", name: "Ocean Blue", value: "#3b82f6", available: true },
];

const sizeVariants = [
  { id: "xs", name: "XS", value: "extra-small", available: false },
  { id: "s", name: "S", value: "small", available: true },
  { id: "m", name: "M", value: "medium", available: true },
  { id: "l", name: "L", value: "large", available: true },
];

export default function ProductDetail() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-sm border-b border-card-border">
        <div className="flex items-center justify-between p-4">
          <button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center transition-smooth hover:bg-muted">
            <ArrowLeft className="w-5 h-5" />
          </button>

          <h1 className="font-semibold">Product Details</h1>

          <button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center transition-smooth hover:bg-muted">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Product Image Gallery */}
      <ProductImageGallery />

      {/* Product Information */}
      <div className="p-6 space-y-6">
        {/* Product Title & Rating */}
        <div className="space-y-3 animate-slide-up">
          <div>
            <h1 className="text-2xl font-bold text-foreground leading-tight">
              Premium Wireless Headphones
            </h1>
            <p className="text-muted-foreground mt-1">
              Professional Grade Audio • Noise Cancelling
            </p>
          </div>

          <ProductRating rating={4.7} reviewCount={1243} />

          <div className="flex items-center space-x-2">
            <span className="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-lg">
              Best Seller
            </span>
            <span className="bg-success/10 text-success text-xs font-semibold px-2 py-1 rounded-lg">
              Free Shipping
            </span>
          </div>
        </div>

        {/* Product Variants */}
        <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <ProductVariants
            colorVariants={colorVariants}
            sizeVariants={sizeVariants}
          />
        </div>

        {/* Product Actions */}
        <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <ProductActions
            price={299.99}
            originalPrice={399.99}
            inStock={true}
          />
        </div>

        {/* Product Tabs */}
        <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <ProductTabs />
        </div>

        {/* Related Products or Recommendations */}
        {/* <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-lg font-semibold">You might also like</h3>
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {[1, 2, 3].map((item) => (
              <div key={item} className="product-card flex-shrink-0 w-40">
                <div className="w-full h-32 bg-gradient-surface rounded-2xl mb-3"></div>
                <div className="p-3 space-y-2">
                  <h4 className="font-medium text-sm line-clamp-2">
                    Related Product {item}
                  </h4>
                  <ProductRating rating={4.5} reviewCount={89} showReviewCount={false} />
                  <p className="font-bold text-primary">$199.99</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>

      {/* Bottom Safe Area */}
      <div className="h-6"></div>
    </div>
  );
}
