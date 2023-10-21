import React from 'react'
import './Blog.css'
import PageHeaderBg from '../../Components/PageHeaderBg/PageHeaderBg'
import store from '../../store'
import NavbarSideBar from '../../Components/NavbarSideBar/NavbarSideBar'
export default function Blog() {
       return (
              <>
                     <PageHeaderBg img={'../../../public/images/BLOG/h2_hero3.jpg.webp'} title={'Blog'} />
                     <div className="row blog-page-container">
                            <div className="col-12 col-md-8 order-2 order-md-1  mt-3">
                                   {store.blogCards.map((card, index) => (
                                          <div className="single-blog-card w-100 mt-4" key={index}>
                                                 <div className="single-blog-card-img-container w-100 overflow-hidden">
                                                        <img src={card} className='img-fluid' alt="" />
                                                 </div>
                                                 <div className="h4 mt-4 single-blog-title">
                                                        Google inks pact for new 35-storey office
                                                 </div>
                                                 <p className='text-secondary'>
                                                        That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.
                                                 </p>
                                                 <div className='d-flex'>
                                                        <div className='text-secondary me-4 single-blog-card-subTitle '>
                                                               <i className=' fa fa-user'></i>
                                                               Travel, Lifestyle
                                                        </div>
                                                        <div className='text-secondary me-4 single-blog-card-subTitle'>|</div>
                                                        <div className='text-secondary me-4 single-blog-card-subTitle'>
                                                               <i className=' fa fa-comment'></i>
                                                               03 Comments
                                                        </div>
                                                 </div>
                                          </div>
                                   ))}

                            </div>
                            <div className="col-12 col-md-4 order-1 order-md-2">
                                  <NavbarSideBar />
                            </div>
                     </div>
              </>
       )
}
