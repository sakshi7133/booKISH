import React from 'react';
import Image4 from "../assets/hero/4850037.jpg";
import Book1 from "../assets/hero/59908892-6c49-45ab-951a-2c0a5f3efba3.jfif";
const bgIMG={
  backgroundImage:`url(${Image4})`,
  backgroundPosition:"center",
  backgroundSize:"cover",
  backgroundRepeat:"no-repeat",
  width:"100%",
  height:"100%",

};

function Banner() {
  return (
    <>

     <div className="relative">
      <div style={bgIMG} className="absolute inset-0 z-0">
        {/* This container ensures the background image covers the full area */}
      </div>

    <div className="relative max-w-screen-2xl  container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10"> 
    <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
        <div className="space-y-2 md:space-y-8"> 

        <h1 className=" text-5xl sm:text-6xl text-black lg:text-7xl font-bold">welcome to <span className="text-cyan-400">booKISH!!!</span></h1>
        <p className='text-zinc-700  font-semibold '>" Seamlessly manage your bookstore’s inventory, orders, and customers with the ease of flipping through your favorite novel."</p>
       <div><a href="/course" className=''>
        <button className="btn btn-active rounded-xl text-xl hover:bg-pink-900 duration-300 transition-all btn-secondary">Discover Books</button>
        </a>
        </div>
        </div>
    </div>
    <div className="order-1 rounded w-full  md:w-1/2 ">
      <img src={Book1} className="w-104 h-104 px-20 md:pt-10 pt-20 md:rounded-full  object-cover " alt="" />
    </div>
    </div>
    </div>
  
    </>
  )
}

export default Banner