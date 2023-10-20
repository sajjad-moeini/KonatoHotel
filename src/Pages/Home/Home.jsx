import React, { useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

import './Home.css'
import store from '../../store';
import HomeSuggestPlaceCarousel from '../../../public/Components/HomeSuggestPlaceCarousel/HomeSuggestPlaceCarousel';
import HomePropertiesSwiper from '../../../public/Components/HomePropertiesSwiper/HomePropertiesSwiper';
export default function Home() {
  useEffect(() => {
    document.title = 'Home'
  }, [])
  return (
    <>
      <div className="order-boxes row">
        <div className="col-11 col-md-9 mx-auto">
          <div className="row ">
            <div className="col-12 col-md-3">
              <div className="row my-2 searchbar-container">
                <div className="col-2 d-flex-centring ">
                  <button className='search-btn'>
                    <i className='fa fa-search text-danger'></i>
                  </button>
                </div>
                <div className="col-10 ">
                  <input type="text" className='form-control border-0' placeholder='Enter Keyword ...' />
                </div>
              </div>
            </div>
            {
              store.orderBoxes.map((box, index) => (
                <div className="col-6 col-md-2" key={index}>
                  <Dropdown className='w-100'>
                    <Dropdown.Toggle className='home-first-order-dropdowns my-2 ' >
                      {box.title}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {box.subtitle.map((subTitle, index) => (
                        <Dropdown.Item href="#/action-1" key={index}>{subTitle}</Dropdown.Item>
                      ))}

                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              ))
            }


            <button className='col-10 col-md-2 order-boxes-btn mx-auto border-0 rounded-3 py-2 my-2'> Search</button>

          </div>
        </div>
      </div>
      <div className="suggest-places w-100">
        <HomeSuggestPlaceCarousel />
      </div>
      <div className="Home-LastestAndFeatured-Section">
<div className=" d-flex-centring flex-column my-5 Home-LastestAndFeatured-Section-title-container" >
  <div className="h1 Home-LastestAndFeatured-Section-title-container-title">Display Latest & Featured Properties</div>
  <p className=' Home-LastestAndFeatured-Section-title-container-text mt-2'>Get started by choosing from one of our pre-built page templates to showcase your properties</p>
  
</div>

<div style={{height:'50vh'}} className='w-75 mx-auto'>
  <HomePropertiesSwiper />
</div>
      </div>
    </>
  )
}
