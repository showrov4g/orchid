import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
// image import for slide 
import slide_1 from "../assets/images/slide (1).jpg"
import slide_2 from "../assets/images/slide (2).jpg"
import slide_3 from "../assets/images/slide (3).jpg"
import slide_4 from "../assets/images/slide (4).jpg"
import slide_5 from "../assets/images/slide (5).jpg"
import slide_6 from "../assets/images/slide (6).jpg"
import slide_7 from "../assets/images/slide (7).jpg"

const Slider = () => {
    return (
        <div>
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={slide_1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide_2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide_3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide_4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide_5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide_6} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide_7} alt="" /></SwiperSlide>
      </Swiper>
        </div>

    );
};

export default Slider;