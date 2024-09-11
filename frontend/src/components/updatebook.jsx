import React, { useState } from 'react'
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const updatebook = () => {
  

    const[Data,setData]=useState({
        url:"",
        title:"",
        author:"",
        price:"",
        description:"",
        language:"",   
    });
    const{ id } = useParams();
    const navigate=useNavigate();
    const headers ={
        id:localStorage.getItem("id"),
        authorization:`Bearer ${localStorage.getItem("token")}`,
        bookid:id,
    };
    const change=(e)=>{
        const{name,value}=e.target;
        setData({...Data,[name]:value});
    };
    const submit=async()=>{
        try{
            if(
                Data.url ==="" ||
                Data.title==="" ||
                Data.author==="" ||
                Data.price==="" ||
                Data.description==="" ||
                Data.language==="" 
            ){
                alert("All fields are required");
            }
            else{
                const response=await axios.put("http://localhost:4001/api/v1/update-book",Data,{headers});
                setData({
                    url:"",
                    title:"",
                    author:"",
                    price:"",
                    description:"",
                    language:"",
                });
                alert(response.data.message);
                navigate(`/view-book-details/${id}`);
            }
        }
        catch(error){
            console.log(error);
            
            
        }
    };
    useEffect(()=>{
        const fetch=async()=>{
          const response=await axios.get(`http://localhost:4001/api/v1/getById/${id}`);
          console.log(response);
          setData(response.data.data);
        };
        fetch();
      },[]);
  return (
    <div className='h-[100%] p-0 md:p-10'>
        <h1 className='text-3xl md:text-5xl font-semibold text-zinc-500 mb-8'>
           Update Book
        </h1>
        <div className='p-4  bg-zinc-300 rounded'>
            <div>
                <label htmlFor="" className='text-black font-semibold'>
                    Image
                </label>
                <input
                type="text"
                className='w-full mt-2 bg-zinc-500 text-white rounded p-2 outline-none'
                placeholder='url of image'
                name="url"
                required
                value={Data.url}
                onChange={change}/>
            </div>
            <div className='mt-4'>
            <label htmlFor="" className='text-black font-semibold'>
                    Title of book
                </label>
                <input
                type="text"
                className='w-full mt-2 bg-zinc-500 rounded text-zinc-700 p-2 outline-none'
                placeholder='title of book'
                name="title"
                required
                value={Data.title}
                onChange={change}/>
            </div>
            <div className='mt-4'>
            <label htmlFor="" className='text-black font-semibold'>
                    Author of Book
                </label>
                <input
                type="text"
                className='w-full mt-2  rounded bg-zinc-500 text-zinc-100 p-2 outline-none'
                placeholder='author of book'
                name="author"
                required
                value={Data.author}
                onChange={change}/>
            </div>
            <div className='mt-4 flex gap-4'>
                <div className='w-3/6'>
                    <label htmlFor="" className='text-black font-semibold'>
                        Language
                    </label>
                    <input
                    type="text"
                    className='w-full rounded mt-2 bg-zinc-500 text-zinc-100 p-2 outline-none'
                    placeholder='language of book'
                    name="language"
                    required
                    value={Data.language}
                    onChange={change}/>
                </div>
                <div className='w-3/6'>
                    <label htmlFor="" className='text-black font-semibold'>
                        Price of Book
                    </label>
                    <input
                    type="text"
                    className='w-full rounded mt-2 bg-zinc-500 text-zinc-100 p-2 outline-none'
                    placeholder='price of book'
                    name="price"
                    required
                    value={Data.price}
                    onChange={change}/>
                </div>
            </div>
            <div className='mt-4'>
            <label htmlFor="" className='text-black font-semibold'>
                    Description of book
                </label>
                <textarea
                className='w-full rounded mt-2 bg-zinc-500 text-zinc-700 p-2 outline-none'
                rows='3'
                placeholder='Description of book'
                name="description"
                required
                value={Data.description}
                onChange={change}/>
            </div>
            <button className='mt-4 px-3 bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition-300'onClick={submit}>
                Update Book
            </button>
        </div>
    </div>
  )
}

export default updatebook