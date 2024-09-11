import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import { GrLanguage } from "react-icons/gr";
import {FaShoppingCart} from "react-icons/fa";
import {FaHeart} from "react-icons/fa"
import {FaEdit} from "react-icons/fa"
import {MdOutlineDelete} from "react-icons/md"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



  const viewBookDetails=()=>{
    const{ id } = useParams();
    console.log(id);
  const [Data,setData]=useState();
  const isLoggedIn=useSelector((state)=> state.auth.isLoggedIn);
  const role=useSelector((state)=> state.auth.role);
  const navigate=useNavigate();
  console.log(isLoggedIn);
  console.log(role);
    useEffect(()=>{
      const fetch=async()=>{
        const response=await axios.get(`http://localhost:4001/api/v1/getById/${id}`);
        console.log(response);
        setData(response.data.data);
      };
      fetch();
    },[]);
   
    const headers={
      id:localStorage.getItem("id"),
      authorization:`Bearer ${localStorage.getItem("token")}`,
      bookid:id
    }
    const handleFavourite=async()=>{
      const response=await axios.put("http://localhost:4001/api/v1/add-book-to-favourite",{},{headers});
     alert(response.data.message);
    }
    const handleCart=async()=>{
      const response=await axios.put("http://localhost:4001/api/v1/add-book-to-cart",{},{headers});
     alert(response.data.message);
    }
    const deletebook=async()=>{
      const response=await axios.delete("http://localhost:4001/api/v1/delete-book",{headers});
      alert(response.data.message);
      navigate("/course");
    };
    
  
  return (
    <>
    {Data && (
    <div className="py-28   px-4 md:px-12 flex gap-8 bg-zinc-200 flex-col lg:flex-row">
        <div className="rounded flex-col lg:flex-row border-radius:0.25  p-12   justify-around w-full lg:w-3/6 flex bg-cyan-900">
        <img src={Data.url} className='h-[50vh] md:h-[60vh] lg:h-[70vh] rounded'/>
        
         {isLoggedIn=== true && role==="user" &&  ( <div className='flex justify-between lg:justify-start  mt-8 lg:mt-0  lg:flex-col '>
          <button className='bg-white rounded-full mt-5 mx-5 text-3xl p-2 text-red-500' onClick={handleFavourite}><FaHeart/></button>
          <button className='bg-white rounded-full mt-5 mx-5 text-3xl p-2 text-blue-500'onClick={handleCart}><FaShoppingCart/></button>
        </div>)}
        
        {isLoggedIn=== true && role==="admin" &&  ( <div className='flex justify-between lg:justify-start  mt-8 lg:mt-0  lg:flex-col '>
          <Link to={`/updatebook/${id}`} className='bg-white rounded-full mt-5 mx-5 text-3xl p-2 text-red-500'><FaEdit/></Link>
          <button className='bg-white rounded-full mt-5 mx-5 text-3xl p-2 text-blue-500'
          onClick={deletebook}>
          <MdOutlineDelete/></button>
        </div>)}
        </div>
        <div className='p-1 md:my-20  md:mt-12 w-full lg:w-3/6'>
        <h1 className='text-4xl text-black  font-semibold'>{Data.title}</h1>
        <p className='text-cyan-600 pt-2   '>by{Data.author}</p>
        <p className='text-zinc-600 mt-4 text-l'>{Data.description}</p>
        <p className='flex items-center text-zinc-600 mt-4 '>
          <GrLanguage className="me-3"/>{Data.language}</p>
  
        <p className='mt-4 text-black text-3xl font-semibold'>
          Price : {Data.price}{" "}
        </p>
        </div>
    </div>
    )}
    </>
  );
  };

export default viewBookDetails
