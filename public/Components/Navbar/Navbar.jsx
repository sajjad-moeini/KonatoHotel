import React from 'react'
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import store from '../../../src/store';
import { Link } from 'react-router-dom';
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
                navitem.childs ? (
                  <Dropdown className='d-flex-centring my-2' key={index}>
                  <Dropdown.Toggle className='nav-item d-flex-centring blog-dropdown' id="dropdown-basic">
                    {navitem.title}
                  </Dropdown.Toggle>
            
                  <Dropdown.Menu>
                  {navitem.childs.map((child,index)=>(
                       <Link className='dropdown-item' to={child.path} key={index}>{child.title}</Link>
                     ))}
                  </Dropdown.Menu>
                </Dropdown>
                ): (
                  <Link className='nav-item d-flex-centring my-2' to={navitem.path}>{navitem.title}</Link>
                )
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
    </>
  )
}
