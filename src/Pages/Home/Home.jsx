import React, { useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

import './Home.css'
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
          <div className="col-6 col-md-2">
            <Dropdown className='w-100'>
              <Dropdown.Toggle className='home-first-order-dropdowns my-2 ' id="dropdown-basic">
                Rent
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Rent 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Rent 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Rent 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="col-6 col-md-2">
            <Dropdown className='w-100'>
              <Dropdown.Toggle className='home-first-order-dropdowns my-2 ' id="dropdown-basic" >
                <img src="images/home/bed.svg" alt="" />
                <div className='mx-1'>Bed</div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Bed 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Bed 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Bed 3</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Bed 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="col-6 col-md-2">
            <Dropdown className='w-100'>
              <Dropdown.Toggle className='home-first-order-dropdowns my-2 ' id="dropdown-basic">
                <img src="images/home/bath.svg" alt="" />
                <div className='mx-1'>Bath</div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Bath 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Bath 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Bath 3</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Bath 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          
            <button className='col-10 col-md-2 order-boxes-btn mx-auto border-0 rounded-3 py-2 my-2'> Search</button>
          
        </div>
        </div>
      </div>
    </>
  )
}
