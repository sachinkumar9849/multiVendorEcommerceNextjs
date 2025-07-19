"use client";

import { useState } from "react";
import { Minus, Plus, ShoppingBag, Share2 } from "lucide-react";
// import { useToast } from '@/hooks/use-toast';

interface ProductActionsProps {
  price: number;
  originalPrice?: number;
  inStock: boolean;
}

export default function ProductActions({
  price,
  originalPrice,
  inStock,
}: ProductActionsProps) {
  const [quantity, setQuantity] = useState(1);
  //   const { toast } = useToast();

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  const handleAddToCart = () => {
    // toast({
    //   title: "Added to cart!",
    //   description: `${quantity} item${quantity > 1 ? 's' : ''} added to your cart.`,
    // });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check out this product!",
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      //   toast({
      //     title: "Link copied!",
      //     description: "Product link copied to clipboard.",
      //   });
    }
  };

  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <div className="space-y-6">
      {/* Price Section */}
      <div className="space-y-2">
        <div className="flex items-baseline space-x-3">
          <span className="text-3xl font-bold text-foreground">
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-lg text-muted-foreground line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
          {discount > 0 && (
            <span className="bg-[#ff3b1f] text-white text-sm font-semibold px-2 py-1 rounded-lg">
              -{discount}%
            </span>
          )}
        </div>
        {inStock ? (
          <p className="text-success font-medium">✓ In Stock</p>
        ) : (
          <p className="text-destructive font-medium">Out of Stock</p>
        )}
      </div>

      {/* Quantity Selector */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-foreground">Quantity</label>
        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-secondary rounded-xl overflow-hidden">
            <button
              onClick={decrementQuantity}
              disabled={quantity <= 1}
              className="p-3  transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="px-4 py-3 font-semibold min-w-[3rem] text-center">
              {quantity}
            </span>
            <button
              onClick={incrementQuantity}
              className="p-3  transition-smooth"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <span className="text-sm text-muted-foreground">
            Total: ${(price * quantity).toFixed(2)}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button
          onClick={handleAddToCart}
          disabled={!inStock}
          className="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ShoppingBag className="w-5 h-5" />
          <span>Add to Cart</span>
        </button>

        <div className="flex space-x-3">
          <button className="flex-1 bg-[#ff3b1f] text-white  font-semibold py-3 px-4 rounded-xl transition-smooth ">
            Buy Now
          </button>
          <button
            onClick={handleShare}
            className="bg-secondary text-[#ff3b1f] p-3 rounded-xl transition-smooth"
          >
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
