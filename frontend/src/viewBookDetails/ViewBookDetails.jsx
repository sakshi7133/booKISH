import React from 'react'
import Navbar from '../components/Navbar'
import ViewBookDetails from '../components/viewBookDetails'
import Footer from '../components/Footer'


function viewBookDetails() {
  
  return (
    <div>
        <Navbar/>
        <div className="min-h-screen"> 
        <ViewBookDetails/>
        </div>
        <Footer/>
    </div>
  )
};

export default viewBookDetails