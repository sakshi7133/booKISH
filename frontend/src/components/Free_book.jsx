import React, {useEffect, useState} from 'react'
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Pages from './Pages';




function Free_book() {
  const [Data,setData]=useState();
  useEffect(()=> {
    const fetch=async()=>{
      const response = await axios.get(`http://localhost:4001/api/v1/get-recent-books`);
      setData(response.data.data);
    };
    fetch();
  },[]);
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
        
  return (
    <>
    
    <div className="max-w-screen-2xl  space-x-4 container mx-auto md:px-20 px-4 my-4">
      
       <h1 className='font-semibold text-3xl pb-2 py-5'> Recently added books</h1>
       <Slider {...settings}>
       {Data && Data.map((items,i) => (
        <div key={i}>
            <Pages data={items}/>{" "}
          </div>))}
      </Slider>

      <div>
        
      
      </div>
     </div>
      
    </>
  )
}

export default Free_book