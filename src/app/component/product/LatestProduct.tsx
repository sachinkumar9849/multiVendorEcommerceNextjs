"use client";
import { Star, StarHalf } from "lucide-react";
import React, { useEffect, useState } from "react";

interface LatestProductProps {
  id: number;
  image: string;
  title: string;
  price: string;
  author: string;
}

const LatestProduct = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products: LatestProductProps[] = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/2233703/pexels-photo-2233703.jpeg",
      title: "Balltip nullaelit",
      price: "Rs 65.00",
      author: "By Peter Thomas",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg",
      title: "Balltip nullaelit",
      price: "Rs 65.00",
      author: "By Peter Thomas",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg",
      title: "Balltip nullaelit",
      price: "Rs 65.00",
      author: "By Peter Thomas",
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg",
      title: "Balltip nullaelit",
      price: "Rs 65.00",
      author: "By Peter Thomas",
    },
    {
      id: 5,
      image:
        "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg",
      title: "Balltip nullaelit",
      price: "Rs 65.00",
      author: "By Peter Thomas",
    },
    {
      id: 6,
      image:
        "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg",
      title: "Balltip nullaelit",
      price: "Rs 65.00",
      author: "By Peter Thomas",
    },
    {
      id: 7,
      image:
        "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg",
      title: "Balltip nullaelit",
      price: "Rs 65.00",
      author: "By Peter Thomas",
    },
    {
      id: 8,
      image:
        "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg",
      title: "Balltip nullaelit",
      price: "Rs 65.00",
      author: "By Peter Thomas",
    },
    {
      id: 9,
      image:
        "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg",
      title: "Balltip nullaelit",
      price: "Rs 65.00",
      author: "By Peter Thomas",
    },
    {
      id: 10,
      image:
        "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg",
      title: "Balltip nullaelit",
      price: "Rs 65.00",
      author: "By Peter Thomas",
    },
    {
      id: 11,
      image:
        "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg",
      title: "Balltip nullaelit",
      price: "Rs 65.00",
      author: "By Peter Thomas",
    },
    {
      id: 12,
      image:
        "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg",
      title: "Balltip nullaelit",
      price: "Rs 65.00",
      author: "By Peter Thomas",
    },
    {
      id: 13,
      image:
        "https://images.pexels.com/photos/2233703/pexels-photo-2233703.jpeg",
      title: "Balltip nullaelit",
      price: "Rs 65.00",
      author: "By Peter Thomas",
    },
    {
      id: 14,
      image:
        "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg",
      title: "Balltip nullaelit",
      price: "Rs 65.00",
      author: "By Peter Thomas",
    },
    {
      id: 15,
      image:
        "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg",
      title: "Balltip nullaelit",
      price: "Rs 65.00",
      author: "By Peter Thomas",
    },
    {
      id: 16,
      image:
        "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg",
      title: "Balltip nullaelit",
      price: "Rs 65.00",
      author: "By Peter Thomas",
    },
  ];

  const productsPerPage = 4;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const getCurrentPageProducts = (pageIndex: number) => {
    const start = pageIndex * productsPerPage;
    return products.slice(start, start + productsPerPage);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalPages]);

  const ProductCard = ({ product }: { product: LatestProductProps }) => (
    <div className="flex flex-row mb-6">
      <div className="flex-shrink-0">
        <img
          src={product.image}
          alt={product.title}
          className="w-20 h-20 object-cover"
        />
      </div>
      <div className="flex flex-col ml-2">
        <div className="rating flex mb-1">
          <Star className="text-yellow-400 ml-1" size={10} />
          <Star className="text-yellow-400 ml-1" size={10} />
          <Star className="text-yellow-400 ml-1" size={10} />
          <Star className="text-yellow-400 ml-1" size={10} />
          <StarHalf className="text-yellow-400 ml-1" size={10} />
        </div>
        <div className="content_price price">
          <span className="text-[#ff3c20] font-bold">{product.price}</span>
        </div>
        <div className="item-title">
          <a
            href=""
            target="_self"
            title={product.title}
            className="text-[14px] text-[#222] hover:text-[#ff3c20] transition-colors"
          >
            {product.title}
          </a>
        </div>
        <p className="text-[#666] text-sm">{product.author}</p>
      </div>
    </div>
  );

  return (
    <>
      <div className="subSection mb-4">
        <span className="text-[#222] uppercase text-[16px] font-bold">
          Latest products
        </span>
      </div>

      <div className="carousel-wrapper w-full max-w-xs mx-auto relative overflow-hidden">
        <div
          className="carousel-container flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({ length: totalPages }, (_, pageIndex) => (
            <div key={pageIndex} className="carousel-slide min-w-full px-2">
              {getCurrentPageProducts(pageIndex).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-[#ff3c20]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() =>
              setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)
            }
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <span className="text-sm text-gray-500">
            {currentIndex + 1} / {totalPages}
          </span>

          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % totalPages)}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default LatestProduct;
