"use client";
import { Heart, ShoppingCart, Star, Eye, BarChart3 } from "lucide-react";
// import { Product } from "@/types/product";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  badge?: string;
  category: "Electronics" | "Fashion" | "Bathroom" | "Bedroom" | "Decor" | "Furniture" | "Living Room";
}


const ProductCard = ({ product }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Best Seller":
        return "bg-gradient-to-r from-orange-500 to-red-500";
      case "New":
        return "bg-gradient-to-r from-green-500 to-emerald-500";
      case "Featured":
        return "bg-gradient-to-r from-purple-500 to-pink-500";
      case "Eco-Friendly":
        return "bg-gradient-to-r from-green-600 to-teal-600";
      case "Pro Choice":
        return "bg-gradient-to-r from-blue-600 to-indigo-600";
      case "Gaming":
        return "bg-gradient-to-r from-red-600 to-purple-600";
      default:
        return "bg-gradient-to-r from-gray-500 to-gray-600";
    }
  };

  return (
    <div 
      className="relative bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badge */}
        {product.badge && (
          <div className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold text-white rounded-full ${getBadgeColor(product.badge)}`}>
            {product.badge}
          </div>
        )}
        
        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-1.5 py-0.5 text-xs font-bold rounded-full">
            -{discountPercentage}%
          </div>
        )}
        
        {/* Hover Action Icons */}
        <div className={`absolute inset-0 flex items-center justify-center gap-2 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`p-2 rounded-full backdrop-blur-sm transition-all duration-200 ${
              isLiked 
                ? 'bg-red-500 text-white' 
                : 'bg-white/90 text-gray-700 hover:bg-white'
            }`}
            title="Add to Wishlist"
          >
            <Heart size={14} className={isLiked ? 'fill-current' : ''} />
          </button>
          
          <button
            className="p-2 rounded-full bg-white/90 text-gray-700 hover:bg-white transition-all duration-200"
            title="Compare"
          >
            <BarChart3 size={14} />
          </button>
          
          <button
            className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200"
            title="Add to Cart"
          >
            <ShoppingCart size={14} />
          </button>
          
          <button
            className="p-2 rounded-full bg-white/90 text-gray-700 hover:bg-white transition-all duration-200"
            title="Quick View"
          >
            <Eye size={14} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-3">
        {/* Product Name */}
        <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={10}
                className={`${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-600">{product.rating}</span>
          <span className="text-xs text-gray-400">({product.reviewCount})</span>
        </div>
        
        {/* Price */}
        <div className="flex items-center gap-1">
          <span className="text-lg font-bold text-gray-900">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;