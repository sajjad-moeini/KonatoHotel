import React, { useEffect } from 'react'
import './Home.css'
export default function Home() {
       useEffect(()=>{
              document.title ='Home'
       },[])
  return (
    <div className='text-light'>Home</div>
  )
}
