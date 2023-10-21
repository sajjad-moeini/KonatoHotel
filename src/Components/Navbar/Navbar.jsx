import React from 'react'
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import store from '../../../src/store';
import { Link, NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
export default function Navbarr() {
  return (
    <>
     <Navbar expand="lg" className="navbar-main-container">
      <Container>
        <Navbar.Brand href="#home">
          <img src="images/logo/logo.png.webp" className='img-fluid' alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {
              store.navbar.map((navitem,index)=>(
                <NavLink key={index} className={(item)=>(item.isActive ? 'nav-item-active d-flex-centring my-2' :'nav-item d-flex-centring my-2')} to={navitem.path}>{navitem.title}</NavLink>
              ))
            }
           
          </Nav>
          <Nav>
          <Link  className='d-flex-centring nav-item my-2'>
            Call Us : (+98) 9195805686
          </Link>
           
              <Link className='navbar-btn btn d-flex-centring my-2'> Sign In</Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
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
                <div className="col-10 ms-auto">
                  <input type="text" className=' border-0 h-100 searchbar-input form-control' placeholder='Enter Keyword ...' />
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


            <button className='col-10 col-md-2 order-boxes-btn text-light mx-auto border-0 rounded-3 py-2 my-2'> Search</button>

          </div>
        </div>
      </div>
    </>
  )
}
