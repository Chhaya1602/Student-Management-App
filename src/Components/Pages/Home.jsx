

import React from 'react'
import BannerImage from './banner-image.png'
export default function Home() {

  return (document.title = "Student Management System",
    <div className='text-center'>
        <h1 className='text-center'>Student Management System</h1>
        <img src={BannerImage} alt='banner' className='logo img-fluid'/>
    </div>
  )
}