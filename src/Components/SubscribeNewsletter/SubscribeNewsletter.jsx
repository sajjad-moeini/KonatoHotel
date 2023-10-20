import React from 'react'
import './SubscribeNewsletter.css'
export default function SubscribeNewsletter() {
  return (
    <>
     <div className="sucscribe-newsletter-section">
        <div className="row">
          <div className="col-12 col-md-6 d-flex flex-column justify-content-around subscribe-newsleter-infos">
            <div className="h1 text-light my-4">Subscribe Newsletter</div>
            <p className='w-75 text-light my-4'>Get started by choosing from one of our pre-built page templates to showcase your properties</p>
            <input type="text" className='form-control my-4' placeholder='Enter Your Email ...' />
            <div>
            <button className=' btn newslater-btn text-light my-4'>Subscribe</button>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <img src="images/home/subscribe-img.jpg.webp" className=' mx-auto' alt="" />
          </div>
        </div>
      </div>
    </>
  )
}
