import React from 'react'
import {Link} from "react-router-dom";
import axios from 'axios';


function Pages({data,favourite}) {
const headers={
  id:localStorage.getItem("id"),
  authorization:`Bearer ${localStorage.getItem("token")}`,
  bookid: data._id
};
 const handleRemoveBook= async()=>{
  const response=await axios.put("http://localhost:4001/api/v1/remove-book-from-favourite",{},{headers});
     alert(response.data.message);
 }
  return (
    <div className='mt-2 p-8 bg-grey-800 w-92 px-5 bg-grey-900 shadow-xl'>
    <Link to={`/view-book-details/${data._id}`}>
    <div className="">
    <div><div> <div className="card   justify-center hover:scale-105 duration 200 ">
    <figure><img src={data.url} alt="Shoes"  className="h-[30vh]"/></figure>
    <div className="card-body">
    <h2 className="card-title mt-1 text-xl font-semibold" >
    {data.title}
    </h2>
    <div className="card-actions flex justify-between">
    <p className="mt-2 text-black font-semibold">by {data.author}</p>
    <div className="mt-2 bg-pink-400 text-white rounded-md hover:bg-pink-800 duration-300 badge badge-outline">{data.price}</div> 
    </div>
    </div>
    </div></div></div></div>
    </Link>
    {favourite && (
    <button className='bg-cyan-300 hover:bg-cyan-600  duration-300 px-5 py-1 rounded border border-cyan- text-black ' onClick={handleRemoveBook}>Remove From Favourites</button>
    )}
    </div>
  )

}

export default Pages