import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import autoplay styles (optional)
import swiperOne from '../../assets/image/webp/swiper-1.webp'
import swiperTwo from '../../assets/image/webp/swiper-2.webp'
import swiperThree from '../../assets/image/webp/swiper-3.webp'
import swiperFour from '../../assets/image/webp/swiper-4.webp'
// Import required modules
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

export default function App() {
  return (
    <div className='py-[140px] px-4'>
      <div className='mb-11'>
        <p className='text-center text-[40px] font-semibold mb-5'>Lorem ipsum dolor sit amet</p>
        <p className='text-center opacity-70'>Lorem ipsum dolor sit amet consectetur. Amet varius in enim.</p>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide><img src={swiperOne} alt="swiper-1" /></SwiperSlide>
        <SwiperSlide><img src={swiperTwo} alt="swiper-2" /></SwiperSlide>
        <SwiperSlide><img src={swiperThree} alt="swiper-3" /></SwiperSlide>
        <SwiperSlide><img src={swiperFour} alt="swiper-4" /></SwiperSlide>
        <SwiperSlide><img src={swiperOne} alt="swiper-1" /></SwiperSlide>
        <SwiperSlide><img src={swiperTwo} alt="swiper-2" /></SwiperSlide>
        <SwiperSlide><img src={swiperThree} alt="swiper-3" /></SwiperSlide>
        <SwiperSlide><img src={swiperFour} alt="swiper-4" /></SwiperSlide>
      </Swiper>
    </div>
  );
}
