"use client";
import { Heart, ShoppingCart, Star, Eye } from "lucide-react";
import { useState } from "react";
import MobileTitle from "../comman/MobileTitle";
import Link from "next/link";

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;

  badge?: string;
  category:
    | "Electronics"
    | "Fashion"
    | "Bathroom"
    | "Bedroom"
    | "Decor"
    | "Furniture"
    | "Living Room";
}

const ProductCard = ({ product }: { product: Product }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative bg-white md:rounded-lg rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* {product.badge && (
          <div
            className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold text-white rounded-full ${getBadgeColor(product.badge)}`}
          >
            {product.badge}
          </div>
        )} */}

        <div
          className={`absolute inset-0 flex items-center justify-center gap-2 transition-all duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
        >
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`p-2 rounded-full backdrop-blur-sm transition-all duration-200 ${
              isLiked
                ? "bg-red-500 text-white"
                : "bg-white/90 text-gray-700 hover:bg-white"
            }`}
            title="Add to Wishlist"
          >
            <Heart size={14} className={isLiked ? "fill-current" : ""} />
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

      <div className="md:p-3 p-2">
        <h3 className="text-sm font-medium text-gray-900 md:mb-2 mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
          {product.name.slice(0, 18)}
        </h3>

        <div className="flex items-center gap-1 md:mb-2 mb-1">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={10}
                className={`${
                  i < Math.floor(product.rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-600">{product.rating}</span>
        </div>

        <div className="flex items-center gap-1">
          <span className="md:text-lg text-md font-bold text-gray-900">
            Rs {product.price}
          </span>
          {product.originalPrice && (
            <span className="md:text-sm text-[10px] text-gray-500 line-through">
              Rs {product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const products: Product[] = [
  {
    id: 1,
    name: "Wireless Noise-Canceling Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image:
      "https://opencart.smartaddons.com/themes/so_emarket/webkul_marketplace/image/cache/catalog/demo/product/funiture/8-270x270.jpg",
    rating: 4.8,

    badge: "Best Seller",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 249.99,
    image:
      "https://opencart.smartaddons.com/themes/so_emarket/webkul_marketplace/image/cache/catalog/demo/product/funiture/13-270x270.jpg",
    rating: 4.7,

    badge: "Featured",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Wireless Gaming Mouse",
    price: 89.99,
    originalPrice: 129.99,
    image:
      "https://opencart.smartaddons.com/themes/so_emarket/webkul_marketplace/image/cache/catalog/demo/product/funiture/3-270x270.jpg",
    rating: 4.6,

    badge: "Gaming",
    category: "Electronics",
  },

  {
    id: 4,
    name: "Premium Leather Backpack",
    price: 189.99,
    originalPrice: 249.99,
    image:
      "https://opencart.smartaddons.com/themes/so_emarket/webkul_marketplace/image/cache/catalog/demo/product/funiture/20-270x270.jpg",
    rating: 4.6,

    badge: "New",
    category: "Fashion",
  },
  {
    id: 5,
    name: "Organic Cotton T-Shirt",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    rating: 4.4,

    badge: "Eco-Friendly",
    category: "Fashion",
  },

  {
    id: 6,
    name: "Luxury Bamboo Towel Set",
    price: 79.99,
    originalPrice: 99.99,
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=400&h=400&fit=crop",
    rating: 4.5,

    badge: "Eco-Friendly",
    category: "Bathroom",
  },
  {
    id: 7,
    name: "Modern Shower Caddy",
    price: 45.99,
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=400&fit=crop",
    rating: 4.3,

    category: "Bathroom",
  },
  {
    id: 8,
    name: "LED Bathroom Mirror",
    price: 159.99,
    originalPrice: 199.99,
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=400&h=400&fit=crop",
    rating: 4.7,

    badge: "New",
    category: "Bathroom",
  },

  {
    id: 9,
    name: "Memory Foam Pillow",
    price: 59.99,
    originalPrice: 79.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    rating: 4.6,

    badge: "Best Seller",
    category: "Bedroom",
  },
  {
    id: 10,
    name: "Silk Bedsheet Set",
    price: 199.99,
    originalPrice: 299.99,
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=400&h=400&fit=crop",
    rating: 4.8,

    badge: "Featured",
    category: "Bedroom",
  },
];

const TrendingMobile = () => {
  const [activeTab] = useState("All");

  const filteredProducts =
    activeTab === "All"
      ? products
      : products.filter((product) => product.category === activeTab);

  return (
    <div className="mobilePadding ">
      <div className="w-full max-w-7xl mx-auto ">
        <div className="flex items-center justify-between">
          <MobileTitle title="Trending items" />
          <Link className="text-[#222f3e] text-[12px]" href={""}>
            See All
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {filteredProducts.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingMobile;
