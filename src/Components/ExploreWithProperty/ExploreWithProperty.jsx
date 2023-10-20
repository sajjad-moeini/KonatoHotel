import React from 'react'
import './ExploreWithProperty.css'
import store from '../../store'
export default function ExploreWithProperty() {
  return (
    <>
     <div className="explore-with-property-type-section ">
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="h1">
              Explore
              by Property Type
            </div>
            <p className='my-4 text-secondary'>
              Get started by choosing from one of our pre-built page templates to showcase your properties
            </p>
            <a href="" className='explore-with-property-type-section-btn mt-4'>View Property</a>
          </div>
          {store.exploreWithPropertyTypeSection.map((item, index) => (
            <div className="col-12 col-md-2 mt-3 mt-md-0 explore-with-property-type-section-box d-flex justify-content-around align-items-center flex-column" data-aos="fade-up" data-aos-duration={item.aosTime} key={index}>
              <img src={item.img} className='explore-with-property-type-section-box-img mb-5' alt="" />
              <a href="" className='text-dark explore-with-property-type-section-box-title'>
                {item.title}
              </a>
            </div>
          ))}



        </div>
      </div>
    </>
  )
}
