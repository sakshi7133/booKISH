import React, { useEffect, useState } from 'react';
import axios from "axios";
import Pages from './Pages';
import {Link} from "react-router-dom";

function Course() {
  
    const [Data,setData]=useState();
    useEffect(()=>{
      const fetch=async()=>{
        const response=await axios.get("http://localhost:4001/api/v1/get-all-books");
        setData(response.data.data);
      };
      fetch();
    },[]);
  
  return (
   <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
    <Link to="/">
      <div className="mt-28 justify-start">
      <button className="bg-cyan-400 text-white px-2 md:px-4 md:py-2 rounded-md hover:bg-cyan-800 duration-300">Back</button>
      </div></Link>
      <div className=" center justify-center py-2 text-center">
      <h1 className="text-2xl font semibold md:text-4xl">
        We're delighted to have you{" "}
        <span className='text-cyan-400'> Here! :)</span>
      </h1>
      <p className='mt-6 '>Browse our diverse collection of books to find your next great read.</p>
      </div> 
      <div className='mt-8 grid grid-cols-1 md:grid-cols-4'>
        
            {Data && Data.map((items,i) => (<div key={i}>
              <Pages data={items}/>{" "}
            </div>))}
          
        
      </div>
    </div>
    
    </>
  )
}


export default Course