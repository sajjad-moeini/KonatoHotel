import React from 'react'
import './NavbarSideBar.css'
import store from '../../store'
export default function NavbarSideBar() {
  return (
    <>
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
    </>
  )
}
