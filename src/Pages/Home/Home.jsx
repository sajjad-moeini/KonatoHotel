import React, { useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import './Home.css'
import store from '../../store';
import HomeSuggestPlaceCarousel from './../../Components/HomeSuggestPlaceCarousel/HomeSuggestPlaceCarousel';
import HomePropertiesSwiper from './../../Components/HomePropertiesSwiper/HomePropertiesSwiper';


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
                      {box.icon ? (
                        <>
                          <i className={`${box.icon} me-2`}></i> {box.title}
                        </>
                      ) : (<>{box.title}</>)}
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

        <div style={{ height: '70vh' }} className='w-75 mx-auto my-5'>
          <HomePropertiesSwiper products={store.LastestAndFeaturedProperty} />
        </div>
      </div>
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
      <div className="Home-property-of-sale-Section">
        <div className=" d-flex-centring flex-column my-5 Home-property-of-sale-Section-title-container" >
          <div className="h1 Home-LastestAndFeatured-Section-title-container-title">Properties for Sale</div>

        </div>

        <div style={{ height: '70vh' }} className='w-75 mx-auto my-5'>
          <HomePropertiesSwiper products={store.LastestAndFeaturedProperty} />
        </div>
      </div>

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

      <div className="agent-section my-5">
        <div className='agent-section-title-container p-5 d-flex-centring flex-column'>
          <div className="h1 mt-5">Our Agents</div>
          <p className='text-secondary w-25 text-center mx-auto mt-2'>Get started by choosing from one of our pre-built page templates to showcase your properties</p>
        </div>
        <div className="row w-75 mx-auto">
          {
            store.agents.map((agent,index)=>(
              <div className="col-12 col-md-3 position-relative agent-box-container mt-5" key={index}>
              <img src={agent.img} className='img-fluid' alt="" />
              <div className="persons-socials-container d-flex-centring s  position-absolute">
                <div className="w-50 d-flex-centring justify-content-around">
  
  
                  <i className='fa fa-facebook person-scoial-icon rounded-circle' style={{ transition: 'all .3s' }}></i>
                  <i className='fa fa-twitter person-scoial-icon rounded-circle' style={{ transition: 'all .6s' }}></i>
                  <i className='fa fa-internet-explorer person-scoial-icon rounded-circle' style={{ transition: 'all .9s' }}></i>
                </div>
                
              </div>
              <div className='agent-name text-center'>{agent.name}</div>
                <div className='agent-post text-center text-secondary'>{agent.post}</div>
            </div>
            ))
          }
         
        </div>
      </div>

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
