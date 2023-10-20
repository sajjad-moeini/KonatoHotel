import React, { useEffect, useState } from 'react'
import './HomePropertiesSwiper.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function HomePropertiesSwiper({products}) {

  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <>
      <Swiper
     slidesPerView={'auto'}
     spaceBetween={30}
     navigation={true}
     modules={[ Navigation]}
     
        className="mySwiper  w-100 h-100 p-1 overflow-visible"
      >
        {products.map((item,index)=>(
 <SwiperSlide className='swiper-cart-container' key={index} >
 <div className="home-product-card h-100 w-100" data-aos={item.aos} data-aos-duration={item.aosTime}>
   <div className="home-product-card-img-container overflow-hidden">
     <img src={item.img} className='img-fluid home-product-card-img' alt="" />
   </div>
   <span className='home-productCart-price px-2 my-2'>$ {item.price.toLocaleString()}</span>
   <div className="h4 px-2 my-2">{item.title}</div>
   <p className=' px-2 text-secondary'>Get started by choosing from one of our pre-built page templates to showcase your properties</p>
   <hr />
   <div className="d-flex justify-content-between align-items-center px-2">
     <div className=" d-flex-centring">
       <i className='fa fa-bed'></i>
       2 Bed Rooms
     </div>
     <div className=" d-flex-centring">
       <i className='fa fa-shower'></i>
       2 Bed Bath
     </div>
     <div className=" d-flex-centring">
       <i className='fa fa-home'></i>
       1050 Sq Ft
     </div>
   </div>
 </div>
</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
