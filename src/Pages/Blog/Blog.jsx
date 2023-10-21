import React from 'react'
import './Blog.css'
import PageHeaderBg from '../../Components/PageHeaderBg/PageHeaderBg'
import store from '../../store'
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
                                   <div className='blog-sidebar-container p-3'>
                                          <div className="row blog-sidebar-boxes blog-sidebar-searchbar-container p-3 mt-4">
                                                 <div className="col-9">
                                                        <input type="text" className='form-control w-100' placeholder='Search KeyWord' />
                                                 </div>
                                                 <div className="col-3">
                                                        <button className='btn blog-sidebar-btn'>Search</button>
                                                 </div>
                                          </div>
                                   </div>
                                   <div className=" blog-sidebar-boxes blog-category-box mt-4 p-3">
                                          <div className='blog-sidebar-title'>
                                                 Category
                                          </div>
                                          {store.blogCategoryItems.map((item, index) => (
                                                 <div className="category-item text-secondary" key={index}>
                                                        {item}
                                                 </div>
                                          ))}

                                   </div>
                                   <div className=" blog-sidebar-boxes blog-recent-posts-box mt-4 p-3">
                                          <div className='blog-sidebar-title'>
                                                 Recent Post
                                          </div>
                                          {store.blogRecentPosts.map((post, index) => (
                                                 <div className="recent-posts-box mt-3" key={index}>
                                                        <div className='d-flex'>
                                                               <div className="recent-post-img-container overflow-hidden">
                                                                      <img src={post.img} className='img-fluid rounded-2' alt="" />
                                                               </div>
                                                               <div className='ms-2 d-flex flex-column justify-content-around'>
                                                                      <div className='recent-box-title'>
                                                                             {post.title}
                                                                      </div>
                                                                      <div className='text-secondary recent-box-subtitle'>
                                                                             {post.subTitle}
                                                                      </div>
                                                               </div>
                                                        </div>
                                                 </div>
                                          ))}


                                   </div>

                                   <div className=" blog-sidebar-boxes blog-tags-box mt-4 p-3">
                                          <div className='blog-sidebar-title'>
                                                 Tag Clouds
                                          </div>
                                          <div className="d-flex flex-wrap">
                                                 {store.blogTags.map((tag, index) => (
                                                        <div className="blog-tag rounded-2" key={index}>
                                                               {tag}
                                                        </div>
                                                 ))}
                                          </div>
                                   </div>

                                   <div className=" blog-sidebar-boxes insta-feed-box mt-4 p-3">
                                          <div className='blog-sidebar-title'>
                                                 Instagram Feeds
                                          </div>
                                          <div className="row">
                                                 {store.blogInstagramFeed.map((img, index) => (
                                                        <div className="col-4 mt-2 " key={index}>
                                                               <img src={img} className='img-fluid rounded-2' alt="" />
                                                        </div>
                                                 ))}
                                          </div>
                                   </div>

                                   <div className=" blog-sidebar-boxes blog-tags-box mt-4 p-3">
                                          <div className='blog-sidebar-title'>
                                          Newsletter
                                          </div>
                                          <div>
                                                 <input type="text" placeholder='Enter Email ' className='form-control' />
                                          </div>
                                          <div className='d-flex justify-content-end'>
                                          <a className='btn blog-sidebar-btn my-4'>SUBSCRIBE</a>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </>
       )
}
