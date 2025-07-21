"use client";
import { useState } from "react";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onToggleFavorite: (productId: string) => void;
  isFavorite: boolean;
}

export const ProductCard = ({
  product,
  onAddToCart,
  onToggleFavorite,
  isFavorite,
}: ProductCardProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const discountPercent = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : 0;

  return (
    <div className="group relative bg-gradient-card rounded-2xl p-3 shadow-card hover:shadow-card-hover transition-all duration-300 ease-smooth hover:-translate-y-1">
      {/* Badges */}
      <div className="absolute top-5 left-5 z-10 flex flex-col gap-2">
        {product.isNew && (
          <span className="bg-gradient-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-full">
            New
          </span>
        )}
        {product.isSale && discountPercent > 0 && (
          <span className="bg-gradient-accent text-accent-foreground text-xs font-medium px-2 py-1 rounded-full">
            -{discountPercent}%
          </span>
        )}
      </div>

      {/* Favorite Button */}
      <button
        onClick={() => onToggleFavorite(product.id)}
        className="absolute top-5 right-5 z-10 p-2 rounded-full bg-card/80 backdrop-blur-sm shadow-card hover:shadow-card-hover transition-all duration-200 hover:scale-110"
      >
        <Heart
          size={16}
          className={cn(
            "transition-colors duration-200",
            isFavorite
              ? "fill-primary text-primary"
              : "text-muted-foreground hover:text-primary",
          )}
        />
      </button>

      {/* Product Image */}
      <div className="relative aspect-square rounded-xl overflow-hidden bg-muted/30 mb-4">
        <img
          src={product.image}
          alt={product.name}
          onLoad={() => setIsImageLoaded(true)}
          className={cn(
            "w-full h-full object-cover transition-all duration-500 group-hover:scale-105",
            isImageLoaded ? "opacity-100" : "opacity-0",
          )}
        />
        {!isImageLoaded && (
          <div className="absolute inset-0 bg-muted animate-pulse rounded-xl" />
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-3">
        {/* Category */}
        <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
          {product.category}
        </span>

        {/* Product Name */}
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                className={cn(
                  "transition-colors duration-200",
                  i < Math.floor(product.rating)
                    ? "fill-accent text-accent"
                    : "text-muted-foreground/30",
                )}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-foreground">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={() => onAddToCart(product)}
          variant="outline"
          size="sm"
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-200"
        >
          <ShoppingCart size={14} className="mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};
