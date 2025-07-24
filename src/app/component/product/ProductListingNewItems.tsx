"use client";
import { Heart, ShoppingCart, Star, Eye } from "lucide-react";
import { useState } from "react";
import SectionTitle from "../comman/SectionTitle";

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
      className="relative bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
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

        {product.badge && (
          <div
            className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold text-white rounded-full ${getBadgeColor(product.badge)}`}
          >
            {product.badge}
          </div>
        )}

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

      <div className="p-3">
        <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
          {product.name}
        </h3>

        <div className="flex items-center gap-1 mb-2">
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
          <span className="text-lg font-bold text-gray-900">
            Rs {product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
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
    image: "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg",
    rating: 4.8,

    badge: "Best Seller",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 249.99,
    image: "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg",
    rating: 4.7,

    badge: "Featured",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Wireless Gaming Mouse",
    price: 89.99,
    originalPrice: 129.99,
    image: "https://images.pexels.com/photos/2752045/pexels-photo-2752045.jpeg",
    rating: 4.6,

    badge: "Gaming",
    category: "Electronics",
  },
  // Fashion
  {
    id: 4,
    name: "Premium Leather Backpack",
    price: 189.99,
    originalPrice: 249.99,
    image: "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg",
    rating: 4.6,

    badge: "New",
    category: "Fashion",
  },
  {
    id: 5,
    name: "Organic Cotton T-Shirt",
    price: 34.99,
    image: "https://images.pexels.com/photos/1631181/pexels-photo-1631181.jpeg",
    rating: 4.4,

    badge: "Eco-Friendly",
    category: "Fashion",
  },
  {
    id: 6,
    name: "Luxury Bamboo Towel Set",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.pexels.com/photos/2010812/pexels-photo-2010812.jpeg",
    rating: 4.5,

    badge: "Eco-Friendly",
    category: "Bathroom",
  },
  {
    id: 8,
    name: "Smart Fitness Watch",
    price: 249.99,
    image: "https://images.pexels.com/photos/2233703/pexels-photo-2233703.jpeg",
    rating: 4.7,

    badge: "Featured",
    category: "Bathroom",
  },
];

const ProductListingNewItems = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    "All",
    "Bathroom",
    "Bedroom",
    "Decor",
    "Furniture",
    "Living Room",
  ];

  const filteredProducts =
    activeTab === "All"
      ? products
      : products.filter((product) => product.category === activeTab);

  return (
    <div className="w-full max-w-7xl mx-auto ">
      <div className="flex items-center ">
        <SectionTitle title="NEW ITEMS" />

        <div className="flex flex-wrap gap-2 w-full justify-end border-[#eee] border-b-2 mt-[-7px]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-[#999] text-[14px] font-normal transition-all duration-200 border-b pl-3 ${
                activeTab === tab
                  ? "text-[#ff3b1f] border-[#ff3b1f] border-b-2"
                  : "text-gray-500 border-transparent hover:text-gray-700 "
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-4" id="productLarge">
          {filteredProducts.slice(0, 1).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="col-span-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {filteredProducts.slice(1, 7).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-600">
        Showing {filteredProducts.length} products
        {activeTab !== "All" && <span> in {activeTab}</span>}
      </div>
    </div>
  );
};

export default ProductListingNewItems;
