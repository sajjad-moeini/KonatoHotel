import { useState } from 'react'
import Routes from './Router'
import { useRoutes } from 'react-router-dom';
import './App.css'
import Navbarr from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
function App() {
  const router = useRoutes(Routes)

  return (
   <>
   <Navbarr/>
   {router}
   <Footer />
   </>
  )
}

export default App
