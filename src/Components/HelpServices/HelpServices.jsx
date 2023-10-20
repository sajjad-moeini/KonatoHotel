import React from 'react'
import './HelpServices.css'
import store from '../../store'
export default function HelpServices() {
  return (
    <>
    <div className="home-service-section py-5">
        <div className="row  d-flex-centring text-light home-service-section-title my-5">
          How we help people?
        </div>
        <div className="row w-75 mx-auto">
          {store.homeServiceBoxes.map((item, index) => (
            <div key={index} className='col-12 col-md-4 home-service-section-box d-flex align-items-center flex-column justify-content-center' data-aos={item.aos} data-aos-duration="1500">
              <img src={item.img} className='home-service-section-box-img' alt="" />
              <div className='text-light my-4 home-service-section-box-title'>{item.title}</div>
              <p className='text-light w-75 mx-auto text-center'>
                {item.text}
              </p>
            </div>
          ))}

        </div>
      </div>
    </>
  )
}
