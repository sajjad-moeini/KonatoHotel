import React from 'react'
import './OurAgents.css'
import store from '../../store'
export default function OurAgents() {
  return (
    <>
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
    </>
  )
}
