import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './HomeSuggestPlaceCarousel.css'
import store from '../../../src/store';

export default function HomeSuggestPlaceCarousel() {
       return (
              <>
                     <Carousel className='carousel-container' fade>
                            {
                                   store.homeSuggestPlaceCarousel.map((item, index) => (
                                          <Carousel.Item key={index} className='w-100 h-100' style={{ background: `url(${item.bg})` }}>
                                                 <div className={`home-suggest-place-carousel-bg `}>
                                                        <div className="w-100 h-100 home-suggest-place-carousel-item">
                                                               <div className=" w-50 h-100 d-flex-centring flex-column">
                                                                      <div className="w-50 text-light">
                                                                             <span className='suggest-carousel-place-options'>3 Bed - 2 Bath - 2200 Sq Ft</span>
                                                                             <div className="h1 suggest-carousel-place-title my-4">
                                                                                   {item.title}
                                                                             </div>
                                                                             <p className=' text-light'>
                                                                                    Get started by choosing from one of our pre-built page
                                                                                    templates to showcase your properties
                                                                             </p>
                                                                             <div className="h3 text-light suggest-carousel-place-price my-4">
                                                                                    $ {item.price.toLocaleString()}
                                                                             </div>
                                                                             <a href="" className='suggest-carousel-place-btn mt-4'>View Property</a>

                                                                      </div>
                                                               </div>
                                                        </div>
                                                 </div>

                                          </Carousel.Item>
                                   ))
                            }


                     </Carousel>
              </>
       )
}
