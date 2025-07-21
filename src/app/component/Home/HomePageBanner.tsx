"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules"; // Removed Scrollbar module

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Removed scrollbar CSS import
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import type { SlideProps } from "@/app/Types/other";
import Link from "next/link";

const HomePageBanner = () => {
  const slides: SlideProps[] = [
    {
      id: 1,
      image:
        "https://opencart.smartaddons.com/themes/so_emarket/webkul_marketplace/image/cache/catalog/slideshow/home1/slider-3-950x450.jpg",
    },
    {
      id: 2,
      image:
        "https://opencart.smartaddons.com/themes/so_emarket/webkul_marketplace/image/cache/catalog/slideshow/home1/slider-2-950x450.jpg",
    },
    {
      id: 3,
      image:
        "https://opencart.smartaddons.com/themes/so_emarket/webkul_marketplace/image/cache/catalog/slideshow/home1/slider-1-950x450.jpg",
    },
  ];

  return (
    <div className="w-full">
      <Swiper
        modules={[Pagination, A11y, Autoplay]} // Removed Scrollbar module
        spaceBetween={16}
        slidesPerView={1.5} // Default for mobile
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        // Removed scrollbar configuration completely
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
        className="mySwiper shadow-lg"
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
          // Large tablets/Desktop: 1 slide (full width)
          1024: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
      >
        {slides.map((slide: SlideProps) => (
          <SwiperSlide key={slide.id}>
              <Link href="/ProductDetail" key={slide.id}>
            <div className="md:mt-0 mt-3 relative h-[150px] sm:h-[250px] md:h-[300px] lg:h-[343px] md:rounded-none rounded-sm  overflow-hidden">
              <img
                src={slide.image}
                alt={`Banner ${slide.id}`}
                className="w-full h-full object-cover"
              />
            </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom styles for mobile pagination and hide all scrollbars */}
      <style jsx global>{`
        .mySwiper .swiper-pagination {
          bottom: -44px !important;
        }

        .mySwiper .swiper-pagination-bullet {
          background: #fd3c2d !important;
          opacity: 1 !important;
          width: 3px !important;
          height: 3px !important;
        }

        .mySwiper .swiper-pagination-bullet-active {
          background: #fd3c2d !important;
          width: 5px !important;
          height: 5px !important;
        }

        /* Hide all scrollbars completely */
        .mySwiper {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }

        .mySwiper::-webkit-scrollbar {
          display: none; /* Webkit browsers */
        }

        /* Hide Swiper's built-in scrollbar */
        .mySwiper .swiper-scrollbar {
          display: none !important;
        }

        /* Hide scrollbar on hover */
        .mySwiper:hover .swiper-scrollbar {
          display: none !important;
        }

        /* Ensure wrapper doesn't show scrollbars */
        .mySwiper .swiper-wrapper {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .mySwiper .swiper-wrapper::-webkit-scrollbar {
          display: none;
        }

        @media (max-width: 768px) {
          .mySwiper .swiper-pagination {
            bottom: 12px !important;
          }

          .mySwiper .swiper-pagination-bullet {
            width: 5px !important;
            height: 5px !important;
            border-radius: 10px;
          }

          .mySwiper .swiper-pagination-bullet-active {
            width: 17px !important;
            height: 5px !important;
            border-radius: 10px;
          }
          .mySwiper .swiper-pagination {
            bottom: 0px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePageBanner;
