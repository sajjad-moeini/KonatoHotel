import React from 'react'
import './Property.css'
import store from '../../store'
import ExploreWithProperty from '../../Components/ExploreWithProperty/ExploreWithProperty'
import SubscribeNewsletter from '../../Components/SubscribeNewsletter/SubscribeNewsletter'
import PageHeaderBg from '../../Components/PageHeaderBg/PageHeaderBg'
export default function Property() {
       return (
              <>
                    <PageHeaderBg img={'../../../public/images/property/h2_hero1.jpg.webp'} title={'Available Property'} />
                     <div className="property-for-sale-section my-5">
                            <div className="row d-flex-centring property-for-sale-section-title">
                                   Properties for Sale
                            </div>
                            <div className="row w-75 mx-auto">
                                   {store.LastestAndFeaturedProperty.map((item, index) => (
                                          <div className="col-12 col-sm-6 col-md-4 mt-4 home-product-card" key={index}>
                                                 <div className=" h-100 w-100">
                                                        <div className="home-product-card-img-container overflow-hidden">
                                                               <img src={item.img} className='img-fluid home-product-card-img' alt="" />
                                                        </div>
                                                        <span className='home-productCart-price px-2 my-2'>$ {item.price.toLocaleString()}</span>
                                                        <div className="h4 px-2 my-2">{item.title}</div>
                                                        <p className=' px-2 text-secondary'>Get started by choosing from one of our pre-built page templates to showcase your properties</p>
                                                        <hr />
                                                        <div className="row px-4">
                                                               <div className="col-12 col-xl-4 d-flex-centring text-nowrap">
                                                                      <i className='fa fa-bed property-items'></i>
                                                                      2 Bed Rooms
                                                               </div>
                                                               <div className="col-12 col-xl-4 d-flex-centring text-nowrap">
                                                                      <i className='fa fa-shower property-items'></i>
                                                                      2 Bed Bath
                                                               </div>
                                                               <div className="col-12 col-xl-4 d-flex-centring text-nowrap">
                                                                      <i className='fa fa-home property-items'></i>
                                                                      1050 Sq Ft
                                                               </div>
                                                        </div>
                                                 </div>
                                          </div>
                                   ))}

                            </div>
                     </div>
                     <ExploreWithProperty />
                     <SubscribeNewsletter />
              </>
       )
}
