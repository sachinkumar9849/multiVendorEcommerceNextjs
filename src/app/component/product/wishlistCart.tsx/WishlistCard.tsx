"use client";
import { useState } from "react";
import { Heart, Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  category: string;
  inStock: boolean;
}

interface WishlistCardProps {
  product: Product;
  isWishlisted: boolean;
  onWishlistToggle: (productId: string) => void;
  onAddToCart: (productId: string) => void;
}

export function WishlistCard({
  product,
  isWishlisted,
  onWishlistToggle,
  onAddToCart,
}: WishlistCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : 0;

  return (
    <Card
      className={cn(
        "group overflow-hidden bg-gradient-card border-border transition-all duration-300 hover:shadow-elegant hover:scale-[1.02] animate-fade-in",
        !product.inStock && "opacity-75",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        {/* Product Image */}
        <div className="relative overflow-hidden bg-muted/30">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Wishlist Button */}
          <Button
            style={{ backgroundColor: "#ff3b1f" }}
            size="icon"
            className={cn(
              "absolute top-3 right-3 bg-[#ff3b1f] backdrop-blur-sm border border-border transition-all duration-300",
              isWishlisted && "bg-accent text-accent-foreground",
              isHovered && "scale-110 shadow-glow",
            )}
            onClick={() => onWishlistToggle(product.id)}
          >
            <Heart
              className={cn(
                "h-4 w-4 transition-all duration-300 text-white",
                isWishlisted && "fill-current",
              )}
            />
          </Button>
          {/* Discount Badge */}
          {discount > 0 && (
            <Badge className="absolute  top-3 left-3 bg-gradient-accent text-accent-foreground animate-pulse-glow">
              -{discount}%
            </Badge>
          )}

          {/* Stock Status */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-card/80 backdrop-blur-sm flex items-center justify-center">
              <Badge variant="destructive" className="text-lg px-4 py-2">
                Out of Stock
              </Badge>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-3">
          {/* Category & Rating */}
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="text-xs text-muted-foreground">
              {product.category}
            </Badge>
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs text-muted-foreground">
                {product.rating}
              </span>
            </div>
          </div>

          {/* Product Name */}
          <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-300">
            {product.name}
          </h3>

          {/* Pricing */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Add to Cart Button */}
          <Button
            className="w-full "
            disabled={!product.inStock}
            onClick={() => onAddToCart(product.id)}
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
