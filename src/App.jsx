import { useState } from 'react'
import Routes from './Router'
import { useRoutes } from 'react-router-dom';
import './App.css'

function App() {
  const router = useRoutes(Routes)

  return (
   <>
   {router}
   </>
  )
}

export default App
