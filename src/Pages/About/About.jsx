import React from 'react'
import './About.css'
import PageHeaderBg from '../../Components/PageHeaderBg/PageHeaderBg'
import OurAgents from '../../Components/OurAgents/OurAgents'
import SubscribeNewsletter from '../../Components/SubscribeNewsletter/SubscribeNewsletter'
import HelpServices from '../../Components/HelpServices/HelpServices'

export default function About() {
       return (
              <>
                     <PageHeaderBg img={'../../../public/images/About/h2_hero2.jpg.webp'} title={'About Us'} />
                     <div className="about-browse-section">
                            <div className="row my-5">
                                   <div className="col-12 col-md-6 d-flex-centring  my-5">
                                          <div className="w-75 mx-auto">
                                                 <div className="h1 w-75">Just browse away.
                                                        It’s all here.</div>
                                                 <p className='my-5 text-secondary'>Rhoncus est pellen tesque elit ullam corper dignissim cras tincidunt lobortis feugiat. Et netus malesuada fames.</p>
                                                 <p className='my-5 text-secondary'>Rhoncus est pellen tesque elit ullam corper dignissim cras tincidunt lobortis feugiat. Et netus malesuada fames.</p>
                                                 <a href="" className='btn about-page-btn text-light'>View All Property</a>
                                          </div>
                                   </div>
                                   <div className="col-12 col-md-6 my-5">
                                          <img src="images/About/about1.jpg.webp" className='img-fluid rounded-3 about-page-img' alt="" />
                                   </div>
                            </div>
                     </div>
                     <HelpServices />
                     <OurAgents />
                     <SubscribeNewsletter />
              </>
       )
}
