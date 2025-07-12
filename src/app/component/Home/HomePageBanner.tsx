"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";

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
  ];

  return (
    <div className="w-full ">
      <Swiper
        modules={[Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        effect="slide"
        loop={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        speed={600}
        grabCursor={true}
        centeredSlides={false}
        className="mySwiper shadow-2xl"
      >
        {slides.map((slide: SlideProps) => (
          <SwiperSlide key={slide.id}>
            <div className="relative  md:h-[343px]">
              <img src={slide.image} alt="img" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomePageBanner;
