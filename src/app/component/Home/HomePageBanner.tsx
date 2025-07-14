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
import type { SlideProps } from "@/app/Types/other";

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
            <div className="md:mt-0 mt-3 relative h-[150px] sm:h-[250px] md:h-[300px] lg:h-[343px] md:rounded-none rounded-sm  overflow-hidden">
              <img
                src={slide.image}
                alt={`Banner ${slide.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom styles for mobile pagination */}
      <style jsx global>{`
        .mySwiper .swiper-pagination {
          bottom: -44px !important;
        }

        .mySwiper .swiper-pagination-bullet {
          background: #fd3c2d !important;
          opacity: 1 !important;
        }

        .mySwiper .swiper-pagination-bullet-active {
          background: #fd3c2d !important;
          width: 10px;
        }

        @media (max-width: 768px) {
          .mySwiper .swiper-pagination {
            bottom: 12px !important;
          }

          .mySwiper .swiper-pagination-bullet {
            width: 8px !important;
            height: 8px !important;
            margin: 0 3px !important;
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
