import React, { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Heart,
  ShoppingCart,
} from "lucide-react";
import MobileTitle from "../../comman/MobileTitle";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  discount?: number;
  badge?: string;
  inStock: boolean;
}

const similarProducts: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 129.99,
    originalPrice: 179.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 342,
    discount: 28,

    inStock: true,
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 249.99,
    originalPrice: 299.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 189,
    discount: 17,
    inStock: true,
  },
  {
    id: 3,
    name: "Bluetooth Speaker Pro",
    price: 89.99,
    originalPrice: 119.99,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 256,
    discount: 25,
    badge: "Limited Time",
    inStock: true,
  },
  {
    id: 4,
    name: "Gaming Mouse RGB",
    price: 59.99,
    originalPrice: 79.99,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 98,
    discount: 25,
    inStock: true,
  },
  {
    id: 5,
    name: "USB-C Power Bank",
    price: 39.99,
    originalPrice: 59.99,
    image:
      "https://images.unsplash.com/photo-1609592043149-ad81b5158aca?w=400&h=400&fit=crop",
    rating: 4.4,
    reviews: 167,
    discount: 33,
    inStock: false,
  },
  {
    id: 6,
    name: "Laptop Stand Aluminum",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1527239441953-caffd968d952?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 89,
    badge: "New Arrival",
    inStock: true,
  },
];

export default function SimilarProductsCarousel() {
  const [favorites, setFavorites] = useState<Set<number>>(new Set([1, 3]));
  const [viewedProducts, setViewedProducts] = useState<Set<number>>(new Set());
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollability();
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", checkScrollability);
      return () =>
        scrollElement.removeEventListener("scroll", checkScrollability);
    }
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const cardWidth = 180; // Width of one card plus margin
      scrollRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const cardWidth = 180; // Width of one card plus margin
      scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  const toggleFavorite = (productId: number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  const handleProductView = (productId: number) => {
    setViewedProducts((prev) => new Set([...prev, productId]));
  };

  const addToCart = (productId: number) => {
    // Add to cart logic here
    console.log(`Added product ${productId} to cart`);
  };

  return (
    <div className="max-w-sm mx-auto bg-gray-50 ">
      {/* Header Section */}
      <div className="bg-white ">
        <div className="px-4 pb-4 pt-0">
          <div className="flex items-center justify-between mt-4">
            <MobileTitle title="Similar Products" />
            <div className="flex items-center gap-2">
              <button
                onClick={scrollLeft}
                disabled={!canScrollLeft}
                className={`p-2 rounded-full border transition-all ${
                  canScrollLeft
                    ? "border-gray-300 hover:border-blue-500 hover:text-blue-600 text-gray-600"
                    : "border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={scrollRight}
                disabled={!canScrollRight}
                className={`p-2 rounded-full border transition-all ${
                  canScrollRight
                    ? "border-gray-300 hover:border-blue-500 hover:text-blue-600 text-gray-600"
                    : "border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="py-4 mb-5">
        <div
          ref={scrollRef}
          className="flex gap-3 px-4 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {similarProducts.map((product) => (
            <div
              key={product.id}
              className="flex-none w-40 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden group"
              onClick={() => handleProductView(product.id)}
            >
              {/* Product Image */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Badges */}
                <div className="absolute top-2 left-2 flex flex-col gap-1">
                  {product.discount && (
                    <span className="bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded">
                      -{product.discount}%
                    </span>
                  )}
                  {product.badge && (
                    <span className="bg-orange-500 text-white text-xs font-medium px-1.5 py-0.5 rounded">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="absolute top-2 right-2 flex flex-col gap-1">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(product.id);
                    }}
                    className={`p-1.5 rounded-full backdrop-blur-sm transition-all ${
                      favorites.has(product.id)
                        ? "bg-red-500 text-white shadow-lg"
                        : "bg-white/80 text-gray-600 hover:bg-white hover:text-red-500"
                    }`}
                  >
                    <Heart
                      className={`w-3 h-3 ${favorites.has(product.id) ? "fill-current" : ""}`}
                    />
                  </button>
                </div>

                {/* Stock Status */}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="bg-white text-gray-800 px-2 py-1 rounded text-xs font-semibold">
                      Out of Stock
                    </span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-3">
                <h3 className="font-medium text-gray-800 text-sm mb-1 line-clamp-2 leading-tight h-8">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex items-center">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs text-gray-600 ml-1">
                      {product.rating}
                    </span>
                  </div>
                  <span className="text-xs text-gray-400">
                    ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-900 text-sm">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product.id);
                  }}
                  disabled={!product.inStock}
                  className={`w-full py-2 px-3 rounded-lg text-xs font-medium transition-all flex items-center justify-center gap-1 ${
                    product.inStock
                      ? "bg-[#ff3b1f] text-white hover:bg-[#ff3d1fd6] shadow-sm hover:shadow-md"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  <ShoppingCart className="w-3 h-3" />
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </button>
              </div>

              {/* Viewed Indicator */}
              {viewedProducts.has(product.id) && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              )}
            </div>
          ))}
        </div>

        {/* Scroll Indicators */}
      </div>

      {/* Quick Actions */}

      {/* Bottom CTA */}

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
