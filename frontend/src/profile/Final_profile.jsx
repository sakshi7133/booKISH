import React from 'react'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'
import Footer from "../components/Footer"

function Final_profile() {
  return (
    <div>
        <Navbar/>
        <div className='min-h-screen'>
        <Profile/> 
        </div>
        <Footer/>
    </div>
  )
}

export default Final_profile