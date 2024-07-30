import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import {AiFillDelete} from "react-icons/ai"
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
const cart = () => {
  const navigate=useNavigate();
  const[cart,setCart]=useState();
  const[Total,setTotal]=useState(0);
  const headers={
    id:localStorage.getItem("id"),
    authorization:`Bearer ${localStorage.getItem("token")}`
     };
    useEffect(()=>{
      const fetch=async()=>{
        const res=await axios.get("http://localhost:4001/api/v1/get-books-in-cart",{headers});
        setCart(res.data.data);
      };
      fetch();
    },[cart]);
   const deleteItem=async(bookid)=>{
    const response=await axios.put(`http://localhost:4001/api/v1/remove-book-from-cart/${bookid}`,{},{headers}) ;
    alert(response.data.message);
   };
   useEffect(()=>{
    if(cart && cart.length>0){
      let total=0;
      cart.map((items)=>{
        total+= items.price;
      });
      setTotal(total);
      total=0;
    }
   },[cart])
   const PlaceOrder=async()=>{
    try{
    const response=await axios.post("http://localhost:4001/api/v1/placeOrder",{order:cart},{headers}) ;
    alert(response.data.message);
    navigate("/profile/orderHistory");
   }catch(error)
   {
    console.log(error);
   }
  };
  
  return (
    <div className='bg-white h-auto py-8 px-12'>
    
    {cart && cart.length===0 && (
      <div className='h-screen'>
        <div className='h-[100%] flex items-center justify-center flex-col'>
          <h1 className='text-5xl lg:text-6xl font-semibold text-black'> 
            Empty Cart
            <div className='px-20 mx-10 py-10 w-[80%] h-[100%]'>
            <FaCartShopping />
            </div>
          </h1>
        </div>
      </div>
    )}
    {cart && cart.length>0 &&(
      <>
        <h1 className='text-5xl my-12 pt-2 font-semibold text-zinc-800 mb-8'>
           Your Cart
        </h1>
        {cart.map((items,i)=>(
          <div className='w-full my-4 rounded flex flex-col md:flex-row p-4 bg-zinc-300 justify-between items-center'
          key={i}>
          <img src={items.url} alt="/" className='h-[20vh] md:h-[10vh] object-cover'/>
          <div className='w-full md:w-auto'>
             <h1 className='text-small px-4 text-black font-semibold text-start mt-2 md:mt-0'>
              {items.title}
             </h1>
             <p className='text-normal px-4 text-black mt-2 hidden lg:block'>
              {items.description.slice(0,100)}...
             </p>
            
          </div>
          <div className='flex mt-4 w-full md:w-auto items-center justify-between'>
            <h2 className='text-black text-3xl font-semibold flex'>
              {items.price}
            </h2>
            <button className='bg-red-100 text-red-700 border border-red-700 rounded p-2 ms-12' onClick={()=>deleteItem(items._id)}><AiFillDelete/>
            </button>
          </div>
        </div>
      ))}
      </>
    )}
    {cart && cart.length >0 &&(
      <div className='mt-4 w-full flex items-center justify-end'>
        <div className='p-4 bg-zinc-600 rounded'>
          <h1 className='text-3xl text-white font-semibold'>
            Total Amount
          </h1>
          <div className='mt-3 flex items-center justify-between text-xl text-zinc-200'>
             <h2> {cart.length} books </h2><h2>{Total}</h2>
          </div>
          <div className='w-[100% mt-3'>
            <button className='bg-zinc-200 rounded px-4 py-2 flex justify-center w-full font-semibold hover:bg-zinc-400 duration-300' onClick={PlaceOrder}>
              Place Your Order
            </button>
          </div>  
        </div>
      </div>
    )}

    </div>
  )
}

export default cart