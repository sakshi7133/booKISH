import React from 'react'
import Navbar from '../components/Navbar'
import Banner from "../components/Banner"
import Free_book from '../components/Free_book'
import Footer from "../components/Footer"

function Home() {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Free_book/>
        <Footer/>
    </div>
  )
}

export default Home