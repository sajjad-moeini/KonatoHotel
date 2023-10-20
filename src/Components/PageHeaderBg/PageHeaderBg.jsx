import React from 'react'
import './PageHeaderBg.css'
export default function PageHeaderBg({img,title}) {
  return (
    <>
     <div className="available-places-section" style={{background:`url(${img})`}}>
                            <div className="row h-100 available-places-section-wrapper py-5">
                                   <div className="col-12 col-md-4 d-flex flex-column justify-content-around align-items-center">
                                          <div className="h1 text-light">{title}</div>
                                          <div className='w-75'>
                                                 <p className='text-light'>Get started by choosing from one of our pre-built page templates to showcase your properties</p>
                                          </div>
                                   </div>
                            </div>
                     </div>
    </>
  )
}
