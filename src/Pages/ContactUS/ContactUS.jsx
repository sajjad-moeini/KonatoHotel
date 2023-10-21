import React from 'react'
import './ContactUS.css'
import PageHeaderBg from '../../Components/PageHeaderBg/PageHeaderBg'
import store from '../../store'
export default function ContactUS() {
  return (
    <>
    <PageHeaderBg img={'../../../public/images/contactUs/h2_hero3.jpg.webp'} title={'Contact Us'} />
    <div className='contact-us-page-title px-5'>Get in Touch</div>
    <div className="row">
       <div className="col-12 col-md-8">
              <div className="row">
                     <div className="col-12 mt-2 px-5">
                            <textarea className='form-control' cols="30" rows="10" placeholder='Enter Message'></textarea>
                     </div>
                     <div className="col-12 col-md-6 mt-2 px-5">
                            <input type="text" className='form-control' placeholder='Enter Your Name' />
                     </div>
                     <div className="col-12 col-md-6 mt-2 px-5">
                     <input type="text" className='form-control' placeholder='Email' />
                     </div>
                     <div className="col-12 mt-2 px-5">
                            <input type="text" className='form-control' placeholder='Enter Object' />
                     </div>
                     <div className="col-2 mt-2 px-5">
                            <a href="" className='btn contact-us-btn'>Send</a>
                     </div>
              </div>

       </div>
       <div className="col-12 col-md-4">
              
              {
                     store.contactUsMiniBox.map((item,index)=>(
                            <div className=' d-flex-centring justify-content-start mt-4' key={index}>
                            <div className='me-4'>
                                   <i className={`fa ${item.icon} contact-us-minibox-icon`}></i>
                            </div>
                            <div>
                                   <div className="contact-us-minibox-title">
                                   {item.title}
                                   </div>
                                   <div className='contact-us-minibox-subtitle text-secondary'>
                                   {item.subTitle}
                                   </div>
                            </div>
                     </div>
                     ))
              }
             
       </div>
    </div>
    </>
  )
}
