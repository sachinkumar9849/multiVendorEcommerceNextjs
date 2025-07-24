"use client";
import { Star } from "lucide-react";
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
  return (
    <div className="flex relative bg-white md:rounded-lg rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[100px] max-w-[100px] min-w-[100px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="md:p-3 p-2">
        <h3 className="text-sm font-medium text-gray-900 md:mb-2 mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
          {product.name}
        </h3>

        <div className="flex items-center gap-1 md:mb-2 mb-0">
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
    image: "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg",
    rating: 4.8,

    badge: "Best Seller",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 249.99,
    image:
      "https://img.drz.lazcdn.com/static/np/p/6d4621e44c35e45e8643d152216994a5.jpg_340x340q80.jpg_.webp",
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
      "https://img.drz.lazcdn.com/static/np/p/d9c1604baf7d958846c813fa81177b5b.jpg_340x340q80.jpg_.webp",
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
      "https://img.drz.lazcdn.com/static/np/p/380b3bc4d07f22e47392b5a8a544ae58.jpg_340x340q80.jpg_.webp",
    rating: 4.6,

    badge: "New",
    category: "Fashion",
  },
  {
    id: 5,
    name: "Organic Cotton T-Shirt",
    price: 34.99,
    image:
      "https://img.drz.lazcdn.com/static/np/p/bca6b57c602ea9a62384b81f64437469.jpg_340x340q80.jpg_.webp",
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
      "https://img.drz.lazcdn.com/static/np/p/32bc1de446d7d0cf6dd4bf0aaf2c13aa.jpg_340x340q80.jpg_.webp",
    rating: 4.5,

    badge: "Eco-Friendly",
    category: "Bathroom",
  },
  {
    id: 7,
    name: "Modern Shower Caddy",
    price: 45.99,
    image:
      "https://img.drz.lazcdn.com/static/np/p/4d878554ed135d95c87ba39f3b5e5bb0.jpg_340x340q80.jpg_.webp",
    rating: 4.3,

    category: "Bathroom",
  },
  {
    id: 8,
    name: "LED Bathroom Mirror",
    price: 159.99,
    originalPrice: 199.99,
    image:
      "https://img.drz.lazcdn.com/static/np/p/eff475eb7289dd1b8c26c415fa1b6c12.jpg_340x340q80.jpg_.webp",
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
      "https://img.drz.lazcdn.com/static/np/p/4ee33e27604fce10738ed7b4bce40cdc.jpg_340x340q80.jpg_.webp",
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

const BestSellings = () => {
  const [activeTab] = useState("All");

  const filteredProducts =
    activeTab === "All"
      ? products
      : products.filter((product) => product.category === activeTab);

  return (
    <div className="pb-5">
      <div className="w-full max-w-7xl mx-auto ">
        <div className="flex items-center justify-between">
          <MobileTitle title="Best sellings" />
          <Link className="text-[#222f3e] text-[12px]" href={""}>
            See All
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {filteredProducts.slice(0, 8).map((product) => (
            <Link href="/ProductDetail" key={product.id}>
              <ProductCard key={product.id} product={product} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellings;
