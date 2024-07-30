import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cart from '../components/cart'
function cart() {
  return (
    <div>
     <Navbar/>
     <div className="min-h-screen"> 
     <Cart/>
     </div>
     <Footer/>
    </div>
  )
}

export default cart