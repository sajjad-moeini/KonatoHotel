import React from 'react'
import './Footer.css'
import store from '../../store'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
   <>
   <div className="footer-container mt-5 p-5">
   <div className="row">
    <div className="col-12 col-md-4 d-flex justify-content-around align-items-start  flex-column mb-5">
      <img src="images/logo/logo2_footer.png.webp" alt="" />
      <p className='text-secondary'>Duis aute irure dolor inasfa reprehenderit in voluptate velit esse cillum</p>
      <div  >
        <i className=' fa fa-instagram  text-secondary footer-social-icons '></i>
        <i className=' fa fa-facebook text-secondary footer-social-icons ms-3'></i>
        <i className=' fa fa-linkedin-square text-secondary footer-social-icons ms-3'></i>
        <i className=' fa fa-youtube text-secondary footer-social-icons ms-3'></i>
      </div>
    </div>
    {store.footerUls.map((ul,index)=>(
      <div className="col-12 col-md-2 mb-5" key={index}>
        <ul>
          <li className='footer-ul-header text-center mt-3 mb-5'>{ul.title}</li>
          {ul.li.map((li,index)=>(
            ul.title == 'Navigation' ? (
              <li className='footer-li text-center text-secondary mt-3'><Link className='text-secondary'  to={`/${li}` }>{li}</Link></li>
            ): (
              <li className='footer-li text-center text-secondary mt-3' key={index}>
              {li}
            </li>
            )
           
          ))}
        </ul>
      </div>
    ))}
    
    <div className="col-12 col-md-2">
      <ul>
        <li className='footer-ul-header text-center mt-3 mb-5'>
          Contact Us
        </li>
        <li className='footer-li text-center text-secondary mt-3'>Drone Mapping</li>
        <li className='footer-li text-center text-secondary mt-3'>sajjadmoeini97@gamil.com</li>
        <li className='footer-number text-center mt-4'>(+98)9195805686</li>
      </ul>
    </div>
    <div className="col-12 col-md-2"></div>
   </div>
   </div>
   </>
  )
}
