"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

const HomePageBanner = () => {
  const slides = [
    {
      id: 1,
      image: "https://opencart.smartaddons.com/themes/so_emarket/webkul_marketplace/image/cache/catalog/slideshow/home1/slider-3-950x450.jpg",
     
    },
    {
      id: 2,
      image: "https://opencart.smartaddons.com/themes/so_emarket/webkul_marketplace/image/cache/catalog/slideshow/home1/slider-2-950x450.jpg",
     
    }
  ];

  return (
    <div className="w-full ">
      <Swiper
        // Install Swiper modules
        modules={[ Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
        
        // Basic settings
        spaceBetween={50}
        slidesPerView={1}
        
        // Navigation
     
        
        // Pagination
        pagination={{ 
          clickable: true,
          dynamicBullets: true 
        }}
        
        // Scrollbar
        scrollbar={{ draggable: true }}
        
        // Autoplay
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        
        // Effect (you can change this to 'fade', 'cube', 'coverflow', 'flip')
        effect="slide"
        
        // Loop
        loop={true}
        
        // Responsive breakpoints
      
        // Callbacks
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        
        // Additional settings
        speed={600}
        grabCursor={true}
        centeredSlides={false}
        
        className="mySwiper shadow-2xl"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative  md:h-[343px]">
              <img
                src={slide.image}
                alt={slide.title}
                className=""
              />
              
              {/* Overlay gradient */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div> */}
              
              {/* Content overlay */}
             
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomePageBanner;

// Custom CSS for additional styling (add to your CSS file)
/*
.mySwiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-button-next,
.swiper-button-prev {
  color: white;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 44px;
  height: 44px;
  margin-top: -22px;
}

.swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 18px;
}

.swiper-pagination-bullet {
  background: rgba(255, 255, 255, 0.5);
}

.swiper-pagination-bullet-active {
  background: white;
}
*/