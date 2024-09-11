import React from 'react'
import Image4 from "../assets/hero/4850037.jpg";
import Abbout from "../assets/hero/pexels-minan1398-775999.jpg"
const bgIMG={
  backgroundImage:`url(${Image4})`,
  backgroundPosition:"center",
  backgroundSize:"cover",
  backgroundRepeat:"no-repeat",
  width:"100%",
  height:"100%",

};
function about() {
  return (
    <>
     <div style={bgIMG} className="relative min-h-[600px] sm:min-h-[750px] bg-gray-100  dark:bg-gray-950 dark:text-white duration 200 flex justify-center items-center">
    
     <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-5"> 
     
      <div className="flex flex-col md:flex-row">
     <div className="order-1 lg:order-2 mt-8 md:mt-8  md:w-1/2 ">
      <img src={Abbout} className="w-78 h-78 rounded-full pt-8 lg:pt-20" alt="" />
    </div>
    <div className="w-full order-2 lg:order-1 px-10 py-5 lg:py-20  md:order-1 md:w-1/2 ">
        <div className="space-y-2 text- center md:space-y-8"> 

        <h1 className=" text-5xl text-3xl text-cyan-900 lg:text-7xl font-serif ">ABOUT US</h1>
        <p className='text-cyan-600 text-xl mx-auto text-center lg:text-left rounded font-serif'>Welcome to Bookish!, the ultimate solution for modern bookshop management.<br/> Our mission is to streamline and enhance the book retail experience through innovative technology. Designed with both administrators and customers <br/>in mind, Bookish! integrates a robust system for inventory management, order processing, and user interactions. With our intuitive admin panel, bookshops <br/> can efficiently handle their stock, track sales, and manage customer data with ease. For readers, Bookish! offers a seamless shopping experience with <br/> real-time updates, personalized recommendations, and a user-friendly <br/> interface. At Bookish!, we’re committed to revolutionizing the  bookshop <br/> industry with cutting-edge solutions that make running and enjoying a <br/> bookstore more efficient and enjoyable than ever.</p>
        
        </div>
    </div>
    </div>
  
    </div>
     </div>
     
    </>
  )
}

export default about