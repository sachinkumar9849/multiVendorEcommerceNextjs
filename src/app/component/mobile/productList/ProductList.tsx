"use client";
import React, { useState } from "react";
import {
  Search,
  Filter,
  ArrowLeft,
  Star,
  Heart,
  ShoppingCart,
  ChevronDown,
  Home,
  Grid3X3,
  User,
  ShoppingBag,
} from "lucide-react";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  brand: string;
  inStock: boolean;
}

interface FilterState {
  priceRanges: string[];
  brands: string[];
  idealFor: string[];
  discount: string[];
  strapMaterial: string[];
  type: string[];
  dialShape: string[];
  strapColor: string[];
  dialColor: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 89.99,
    originalPrice: 129.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
    rating: 4.5,
    reviews: 234,
    category: "Electronics",
    brand: "TechPro",
    inStock: true,
  },
  {
    id: 2,
    name: "Premium Coffee Beans",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=300&fit=crop",
    rating: 4.8,
    reviews: 156,
    category: "Food",
    brand: "RoastMaster",
    inStock: true,
  },
  {
    id: 3,
    name: "Minimalist Watch",
    price: 199.99,
    originalPrice: 249.99,
    image:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=300&h=300&fit=crop",
    rating: 4.3,
    reviews: 89,
    category: "Fashion",
    brand: "TimeElite",
    inStock: false,
  },
  {
    id: 4,
    name: "Ergonomic Office Chair",
    price: 349.99,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop",
    rating: 4.6,
    reviews: 312,
    category: "Furniture",
    brand: "ComfortZone",
    inStock: true,
  },
];

const filterData = {
  priceRanges: [
    "Rs. 500 and Below",
    "Rs. 501 - Rs. 2000",
    "Rs. 2001 - Rs. 5000",
    "Rs. 5001 - Rs. 10000",
    "Rs. 10001 - Rs. 20000",
    "Rs. 20001 and Above",
  ],
  brands: ["Fastrack", "Titan", "Casio", "Fossil", "Apple", "Samsung"],
  idealFor: ["Men", "Women", "Kids", "Unisex"],
  discount: [
    "10% and above",
    "20% and above",
    "30% and above",
    "40% and above",
    "50% and above",
  ],
  strapMaterial: ["Leather", "Metal", "Silicone", "Fabric", "Rubber"],
  type: ["Analog", "Digital", "Smart Watch", "Hybrid"],
  dialShape: ["Round", "Square", "Rectangle", "Oval"],
  strapColor: ["Black", "Brown", "Silver", "Gold", "Blue", "Red"],
  dialColor: ["Black", "White", "Silver", "Gold", "Blue"],
};

export default function ProductList() {
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilterCategory, setActiveFilterCategory] = useState("Price");
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [filters, setFilters] = useState<FilterState>({
    priceRanges: [],
    brands: [],
    idealFor: [],
    discount: [],
    strapMaterial: [],
    type: [],
    dialShape: [],
    strapColor: [],
    dialColor: [],
  });

  const toggleFavorite = (productId: number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  const handleFilterToggle = (filterType: keyof FilterState, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter((item) => item !== value)
        : [...prev[filterType], value],
    }));
  };

  const clearFilters = () => {
    setFilters({
      priceRanges: [],
      brands: [],
      idealFor: [],
      discount: [],
      strapMaterial: [],
      type: [],
      dialShape: [],
      strapColor: [],
      dialColor: [],
    });
  };

  const getActiveFiltersCount = () => {
    return Object.values(filters).reduce(
      (count, filterArray) => count + filterArray.length,
      0,
    );
  };

  const filteredProducts = products.filter((product) => {
    if (
      searchQuery &&
      !product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false;
    return true;
  });

  if (showFilters) {
    return (
      <div className="max-w-sm mx-auto bg-white min-h-screen flex">
        {/* Sidebar */}
        <div className="w-32 bg-gray-100 border-r border-gray-200">
          <div className="sticky top-0 bg-gray-100">
            <div className="p-4 border-b border-gray-200">
              <button
                onClick={() => setShowFilters(false)}
                className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            <div className="py-2">
              {[
                { key: "Price", label: "Price", count: null },
                { key: "F-Assured", label: "F-Assured", count: null },
                { key: "Brand", label: "Brand", count: 45 },
                { key: "IdealFor", label: "Ideal for", count: 1 },
                { key: "Discount", label: "Discount", count: null },
                { key: "StrapMaterial", label: "Strap Material", count: null },
                { key: "Type", label: "Type", count: null },
                { key: "DialShape", label: "Dial Shape", count: null },
                { key: "StrapColor", label: "Strap Color", count: null },
                { key: "DialColor", label: "Dial Color", count: null },
              ].map((item) => (
                <div
                  key={item.key}
                  onClick={() => setActiveFilterCategory(item.key)}
                  className={`px-3 py-2 cursor-pointer transition-colors flex items-center justify-between ${
                    activeFilterCategory === item.key
                      ? "bg-blue-50 border-r-2 border-blue-500"
                      : "hover:bg-gray-200"
                  }`}
                >
                  <span
                    className={`text-sm ${
                      activeFilterCategory === item.key
                        ? "font-medium text-[#222f3e]"
                        : "text-gray-700"
                    }`}
                  >
                    {item.label}
                  </span>
                  {item.count && (
                    <span className="text-xs bg-[#ff3b1f] text-white px-1.5 py-0.5 rounded-full">
                      {item.count}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Filter Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
            <button
              onClick={clearFilters}
              className="text-sm text-[#222f3e] hover:text-blue-800 font-medium"
            >
              Clear Filters
            </button>
          </div>

          {/* Filter Options */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-4">
              {activeFilterCategory === "Price" &&
                filterData.priceRanges.map((range, index) => (
                  <label
                    key={range}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={filters.priceRanges.includes(range)}
                      onChange={() => handleFilterToggle("priceRanges", range)}
                      className="w-5 h-5 text-[#222f3e] border-2 border-gray-300 rounded focus:ring-blue-500"
                      disabled={index === 5}
                    />
                    <span
                      className={`text-sm ${index === 5 ? "text-gray-400" : "text-gray-900"}`}
                    >
                      {range}
                    </span>
                  </label>
                ))}

              {activeFilterCategory === "Brand" &&
                filterData.brands.map((brand) => (
                  <label
                    key={brand}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={filters.brands.includes(brand)}
                      onChange={() => handleFilterToggle("brands", brand)}
                      className="w-5 h-5 text-[#222f3e] border-2 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-900">{brand}</span>
                  </label>
                ))}

              {activeFilterCategory === "IdealFor" &&
                filterData.idealFor.map((item) => (
                  <label
                    key={item}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={filters.idealFor.includes(item)}
                      onChange={() => handleFilterToggle("idealFor", item)}
                      className="w-5 h-5 text-[#222f3e] border-2 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-900">{item}</span>
                  </label>
                ))}

              {activeFilterCategory === "Discount" &&
                filterData.discount.map((item) => (
                  <label
                    key={item}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={filters.discount.includes(item)}
                      onChange={() => handleFilterToggle("discount", item)}
                      className="w-5 h-5 text-[#222f3e] border-2 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-900">{item}</span>
                  </label>
                ))}

              {activeFilterCategory === "StrapMaterial" &&
                filterData.strapMaterial.map((item) => (
                  <label
                    key={item}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={filters.strapMaterial.includes(item)}
                      onChange={() => handleFilterToggle("strapMaterial", item)}
                      className="w-5 h-5 text-[#222f3e] border-2 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-900">{item}</span>
                  </label>
                ))}

              {activeFilterCategory === "Type" &&
                filterData.type.map((item) => (
                  <label
                    key={item}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={filters.type.includes(item)}
                      onChange={() => handleFilterToggle("type", item)}
                      className="w-5 h-5 text-[#222f3e] border-2 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-900">{item}</span>
                  </label>
                ))}

              {activeFilterCategory === "DialShape" &&
                filterData.dialShape.map((item) => (
                  <label
                    key={item}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={filters.dialShape.includes(item)}
                      onChange={() => handleFilterToggle("dialShape", item)}
                      className="w-5 h-5 text-[#222f3e] border-2 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-900">{item}</span>
                  </label>
                ))}

              {activeFilterCategory === "StrapColor" &&
                filterData.strapColor.map((item) => (
                  <label
                    key={item}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={filters.strapColor.includes(item)}
                      onChange={() => handleFilterToggle("strapColor", item)}
                      className="w-5 h-5 text-[#222f3e] border-2 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-900">{item}</span>
                  </label>
                ))}

              {activeFilterCategory === "DialColor" &&
                filterData.dialColor.map((item) => (
                  <label
                    key={item}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={filters.dialColor.includes(item)}
                      onChange={() => handleFilterToggle("dialColor", item)}
                      className="w-5 h-5 text-[#222f3e] border-2 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-900">{item}</span>
                  </label>
                ))}

              {activeFilterCategory === "F-Assured" && (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">✓</span>
                  </div>
                  <p className="text-gray-600">
                    F-Assured products coming soon!
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="bg-white border-t border-gray-200 p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-lg font-semibold text-gray-900">
                  6,464
                </span>
                <span className="text-sm text-gray-500 ml-1">
                  products found
                </span>
              </div>
            </div>

            <button
              onClick={() => setShowFilters(false)}
              className="w-full bg-[#ff3b1f] hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              Apply
            </button>
          </div>

          {/* Bottom Navigation */}
          <div className="bg-white border-t border-gray-200 px-4 py-2">
            <div className="flex justify-around items-center">
              <div className="flex flex-col items-center">
                <Home className="w-6 h-6 text-blue-500" />
                <span className="text-xs text-blue-500 mt-1">Home</span>
              </div>
              <div className="flex flex-col items-center">
                <Grid3X3 className="w-6 h-6 text-gray-400" />
                <span className="text-xs text-gray-500 mt-1">Categories</span>
              </div>
              <div className="flex flex-col items-center">
                <User className="w-6 h-6 text-gray-400" />
                <span className="text-xs text-gray-500 mt-1">Account</span>
              </div>
              <div className="flex flex-col items-center">
                <ShoppingBag className="w-6 h-6 text-gray-400" />
                <span className="text-xs text-gray-500 mt-1">Cart</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-sm mx-auto bg-gray-50 min-h-screen relative overflow-hidden">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="px-4 py-3">
          <div className="flex items-center gap-3 mb-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-100 rounded-xl border-0 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
              />
            </div>
            <button
              onClick={() => setShowFilters(true)}
              className="p-2.5 rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all relative"
            >
              <Filter className="w-5 h-5" />
              {getActiveFiltersCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                  {getActiveFiltersCount()}
                </span>
              )}
            </button>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">
              {filteredProducts.length} products found
            </span>
            <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
              <span>Sort by</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="p-4 pb-20">
        <div className="grid grid-cols-2 gap-3">
          {filteredProducts.map((product) => (
            <Link
              href="/ProductDetail"
              key={product.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 object-cover"
                />
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className={`absolute top-2 right-2 p-1.5 rounded-full transition-all ${
                    favorites.has(product.id)
                      ? "bg-red-500 text-white shadow-lg"
                      : "bg-white/80 text-gray-600 hover:bg-white"
                  }`}
                >
                  <Heart
                    className={`w-3 h-3 ${favorites.has(product.id) ? "fill-current" : ""}`}
                  />
                </button>
                {product.originalPrice && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold">
                    -
                    {Math.round(
                      (1 - product.price / product.originalPrice) * 100,
                    )}
                    %
                  </div>
                )}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="bg-white text-gray-800 px-2 py-1 rounded-full text-xs font-semibold">
                      Out of Stock
                    </span>
                  </div>
                )}
              </div>

              <div className="p-3">
                <h3 className="font-medium text-gray-800 text-sm mb-1 line-clamp-2 leading-tight">
                  {product.name}
                </h3>

                <div className="flex items-center gap-1 mb-2">
                  <div className="flex items-center">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs text-gray-600 ml-1">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-gray-800">
                      Rs {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-gray-500 line-through">
                        Rs {product.originalPrice}
                      </span>
                    )}
                  </div>
                  <button
                    disabled={!product.inStock}
                    className={`p-1.5 rounded-full transition-all ${
                      product.inStock
                        ? "bg-[#ff3b1f] text-white hover:bg-blue-600 shadow-md hover:shadow-lg"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    <ShoppingCart className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around items-center">
          <div className="flex flex-col items-center">
            <Home className="w-6 h-6 text-blue-500" />
            <span className="text-xs text-blue-500 mt-1">Home</span>
          </div>
          <div className="flex flex-col items-center">
            <Grid3X3 className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-500 mt-1">Categories</span>
          </div>
          <div className="flex flex-col items-center">
            <User className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-500 mt-1">Account</span>
          </div>
          <div className="flex flex-col items-center">
            <ShoppingBag className="w-6 h-6 text-gray-400" />
            <span className="text-xs text-gray-500 mt-1">Cart</span>
          </div>
        </div>
      </div>
    </div>
  );
}
