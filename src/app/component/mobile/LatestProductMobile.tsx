"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

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
    image:
      "https://opencart.smartaddons.com/themes/so_emarket/webkul_marketplace/image/cache/catalog/demo/product/funiture/8-270x270.jpg",
    rating: 4.8,
    badge: "Best Seller",
    category: "Electronics",
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    price: 249.99,
    image:
      "https://opencart.smartaddons.com/themes/so_emarket/webkul_marketplace/image/cache/catalog/demo/product/funiture/13-270x270.jpg",
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
    image:
      "https://opencart.smartaddons.com/themes/so_emarket/webkul_marketplace/image/cache/catalog/demo/product/funiture/3-270x270.jpg",
    rating: 4.6,
    badge: "Gaming",
    category: "Electronics",
  },
  {
    id: "4",
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
    id: "5",
    name: "Organic Cotton T-Shirt",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    rating: 4.4,
    badge: "Eco-Friendly",
    category: "Fashion",
    originalPrice: 0,
  },
  {
    id: "6",
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
    id: "7",
    name: "Modern Shower Caddy",
    price: 45.99,
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=400&fit=crop",
    rating: 4.3,
    category: "Bathroom",
    originalPrice: 0,
    badge: "",
  },
  {
    id: "8",
    name: "LED Bathroom Mirror",
    price: 159.99,
    originalPrice: 199.99,
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=400&h=400&fit=crop",
    rating: 4.7,
    badge: "New",
    category: "Bathroom",
  },
];

export const LatestProductMobile = () => {
  return (
    <div className="bg-gray-300 mobilePadding rounded-sm">
      <div className="mx-auto max-w-7xl md:px-0 px-4">
        <div className="flex items-center justify-between">
          <MobileTitle title="Recommendations for you" />
          <Link className="text-[#222f3e] text-[12px]" href={""}>
            See All
          </Link>
        </div>

        <div className="w-full">
          <Swiper
            modules={[Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={16}
            slidesPerView={1.5} // Default for mobile
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            scrollbar={{
              draggable: true,
              hide: true, // Hide scrollbar for cleaner mobile look
            }}
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
            className="productSwiper shadow-lg"
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
                  <ProductCard {...product} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom styles for mobile pagination */}
          <style jsx global>{`
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
                bottom: 12px !important;
              }

              .productSwiper .swiper-pagination-bullet {
                width: 8px !important;
                height: 8px !important;
                margin: 0 3px !important;
              }
              .productSwiper .swiper-pagination {
                bottom: 0px !important;
              }
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};
