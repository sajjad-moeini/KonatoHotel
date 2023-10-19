import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './css/font-awesome.css'
import { BrowserRouter } from 'react-router-dom'
import Navbarr from '../public/Components/Navbar/Navbar.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <BrowserRouter>
  <Navbarr/>
    <App />
  </BrowserRouter>
  </>,
)
