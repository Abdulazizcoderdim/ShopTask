import Img from '../../../public/Image Placeholder.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import './Slider.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function Slider() {
  return (
    <>
    <div className='relative'>
    </div>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <SwiperSlide key={index}>
            <img className='object-cover' src={Img} alt="" />  
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
