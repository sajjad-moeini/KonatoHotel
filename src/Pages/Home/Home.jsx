import React, { useEffect } from 'react'
import './Home.css'
import store from '../../store';
import HomeSuggestPlaceCarousel from './../../Components/HomeSuggestPlaceCarousel/HomeSuggestPlaceCarousel';
import HomePropertiesSwiper from './../../Components/HomePropertiesSwiper/HomePropertiesSwiper';
import ExploreWithProperty from '../../Components/ExploreWithProperty/ExploreWithProperty';
import SubscribeNewsletter from '../../Components/SubscribeNewsletter/SubscribeNewsletter';
import HelpServices from '../../Components/HelpServices/HelpServices';
import OurAgents from '../../Components/OurAgents/OurAgents';


export default function Home() {
  useEffect(() => {
    document.title = 'Home'
  }, [])
  return (
    <>
     
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
      <HelpServices />
      <div className="Home-property-of-sale-Section">
        <div className=" d-flex-centring flex-column my-5 Home-property-of-sale-Section-title-container" >
          <div className="h1 Home-LastestAndFeatured-Section-title-container-title">Properties for Sale</div>

        </div>

        <div style={{ height: '70vh' }} className='w-75 mx-auto my-5'>
          <HomePropertiesSwiper products={store.LastestAndFeaturedProperty} />
        </div>
      </div>

     <ExploreWithProperty />

      <OurAgents />

     <SubscribeNewsletter />
    </>
  )
}
