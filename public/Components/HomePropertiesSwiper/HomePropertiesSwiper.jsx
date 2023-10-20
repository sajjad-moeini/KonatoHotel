import React, { useState } from 'react'
import './HomePropertiesSwiper.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';



export default function HomePropertiesSwiper() {


       return (
         <>
           <Swiper
             slidesPerView={3}
             centeredSlides={true}
             spaceBetween={30}
             pagination={{
               type: 'fraction',
             }}
             navigation={true}
             modules={[Pagination, Navigation]}
             className="mySwiper w-100 h-100"
           >
             <SwiperSlide className='h-100'>
              <div className="home-product-card h-100 w-100">
<div className="home-product-card-img-container">
       <img src="img-fluid " alt="" />
</div>
              </div>
             </SwiperSlide>
             <SwiperSlide>Slide 2</SwiperSlide>
             <SwiperSlide>Slide 3</SwiperSlide>
             <SwiperSlide>Slide 4</SwiperSlide>
           </Swiper>
         </>
       );
}
