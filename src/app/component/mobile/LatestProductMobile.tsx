"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { ProductCard } from "../product/ProductCard";
import MobileTitle from "../comman/MobileTitle";
import Link from "next/link";

interface FeaturesProductProps {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  badge: string;
  category: string;
}

export const products: FeaturesProductProps[] = [
  {
    id: "1",
    name: "Wireless Noise-Canceling Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg",
    rating: 4.8,
    badge: "Best Seller",
    category: "Electronics",
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    price: 249.99,
    image: "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg",
    rating: 4.7,
    badge: "Featured",
    category: "Electronics",
    originalPrice: 0,
  },
  {
    id: "3",
    name: "Wireless Gaming Mouse",
    price: 89.99,
    originalPrice: 129.99,
    image: "https://images.pexels.com/photos/2752045/pexels-photo-2752045.jpeg",
    rating: 4.6,
    badge: "Gaming",
    category: "Electronics",
  },
  {
    id: "4",
    name: "Premium Leather Backpack",
    price: 189.99,
    originalPrice: 249.99,
    image: "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg",
    rating: 4.6,
    badge: "New",
    category: "Fashion",
  },
  {
    id: "5",
    name: "Organic Cotton T-Shirt",
    price: 34.99,
    image: "https://images.pexels.com/photos/1631181/pexels-photo-1631181.jpeg",
    rating: 4.4,
    badge: "Eco-Friendly",
    category: "Fashion",
    originalPrice: 0,
  },
];

export const LatestProductMobile = () => {
  return (
    <div className="newArrivals mobilePadding rounded-sm">
      <div className="mx-auto max-w-7xl md:px-0 px-4 z-10 relative">
        <div className="flex items-center justify-between">
          <MobileTitle title="New Arrivals" />
          <Link className="text-[#222f3e] text-[12px]" href="/product-list">
            See All
          </Link>
        </div>

        <div className="w-full">
          <Swiper
            modules={[Pagination, A11y, Autoplay]} // Removed Scrollbar module
            spaceBetween={16}
            slidesPerView={1.5} // Default for mobile
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            // Removed scrollbar config completely
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            speed={600}
            grabCursor={true}
            centeredSlides={false}
            className="productSwiper no-scrollbar"
            breakpoints={{
              // Mobile (default): 1.5 slides
              320: {
                slidesPerView: 1.5,
                spaceBetween: 12,
              },
              // Small tablets: 2 slides
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              // Medium tablets: 2.5 slides
              768: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              // Large tablets/Desktop: 4 slides (full width)
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
          >
            {products.map((product, index) => (
              <SwiperSlide key={product.id}>
                <div
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Link href="/ProductDetail">
                    <ProductCard {...product} />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom styles for mobile pagination and hide all scrollbars */}
          <style jsx global>{`
            /* Hide all scrollbars globally */
            .no-scrollbar::-webkit-scrollbar {
              display: none !important;
              width: 0 !important;
              height: 0 !important;
            }

            .no-scrollbar {
              -ms-overflow-style: none !important;
              scrollbar-width: none !important;
            }

            /* Hide swiper scrollbars specifically */
            .productSwiper .swiper-scrollbar {
              display: none !important;
            }

            .productSwiper .swiper-scrollbar-drag {
              display: none !important;
            }

            /* Hide any container scrollbars */
            .productSwiper,
            .productSwiper .swiper-container,
            .productSwiper .swiper-wrapper {
              -ms-overflow-style: none !important;
              scrollbar-width: none !important;
            }

            .productSwiper::-webkit-scrollbar,
            .productSwiper .swiper-container::-webkit-scrollbar,
            .productSwiper .swiper-wrapper::-webkit-scrollbar {
              display: none !important;
            }

            /* Pagination styles */
            .productSwiper .swiper-pagination {
              bottom: -44px !important;
            }

            .productSwiper .swiper-pagination-bullet {
              background: #fd3c2d !important;
              opacity: 1 !important;
            }

            .productSwiper .swiper-pagination-bullet-active {
              background: #fd3c2d !important;
              width: 10px;
            }

            @media (max-width: 768px) {
              .productSwiper .swiper-pagination {
                bottom: 0px !important;
              }

              .productSwiper .swiper-pagination-bullet {
                width: 8px !important;
                height: 8px !important;
                margin: 0 3px !important;
              }
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};
