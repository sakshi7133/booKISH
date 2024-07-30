import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import { useForm } from "react-hook-form"
import axios from 'axios';
function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const[Values,setValues]=useState({username:"",email:"",password:"",address:"",});
  const navigate=useNavigate();
  const change=(e)=>{
    const{name,value}=e.target;
    setValues({...Values,[name]:value});
  }
  const submit=async()=>{
    try{
      if(Values.username===""||Values.email===""||Values.password===""||Values.address==="")
      {
        alert("all fields are required");
      }
      else{
        const response=await axios.post("http://localhost:4001/api/v1/signup",Values);
       alert(response.data.message);
        navigate("/");
      }
    }
    catch(error)
    {
      alert(error.response.data.message);
    }
  }
  return (
    <>
    <div className='flex h-screen items-center justify-center '>
    <div id="my_modal_3" className="border-[2px]  p-5 rounded-md shadow-md">
    <div className="">
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <Link
        to="/"
        className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
        onClick={()=>document.getElementById("my_modal_3").close()}>✕</Link>
        
        <h3 className="font-bold text-lg">Signup</h3>
        <div className='mt-4 space-y-2'>
        <span>Name</span><br/>
        <input type="text" placeholder='Enter your fullname' name="username" className='w-80 px-3 py-1 border rounded-md outline-none'
        {...register("username", { required: true })} value={Values.username} onChange={change}/>
        <br/>
        {errors.name && <span className='text-sm text-red-800'>This field is required</span>}
        </div>
        <div className='mt-4 space-y-2'>
        <span>Email</span><br/>
        <input type="email" placeholder='Enter your email id' name="email" className='w-80 px-3 py-1 border rounded-md outline-none'
        {...register("email", { required: true })} value={Values.email} onChange={change}/>
        <br/>
        {errors.email && <span className='text-sm text-red-800'>This field is required</span>}
        </div>
        <div className='mt-4 space-y-2'>
        <span>Password</span><br/>
        <input type="text" placeholder='type your password' name="password" className='w-80 px-3 py-1 border rounded-md outline-none'
        {...register("password", { required: true })} value={Values.password} onChange={change}/>
        <br/>
        {errors.password && <span className='text-sm text-red-800'>This field is required</span>}
        </div>
        <div className='mt-4 space-y-2'>
        <span>Address</span><br/>
        <input type="text" placeholder='address' name="address" className='w-80 px-3 py-1 border rounded-md outline-none'
        {...register("address", { required: true })} value={Values.address} onChange={change}/>
        <br/>
        {errors.address && <span className='text-sm text-red-800'>This field is required</span>}
        </div>
        <div className='flex justify-around mt-4'>
            <button className='bg-cyan-400 text-white rounded-md px-3 py-1 hover:bg-cyan-800 duration-200' onClick={submit}>Signup</button>
            <p className='text-sm'>Already have<br/> an account?<Link to="/" className='underline text-blue-500 cursor-pointer'>Login</Link></p>
        </div>
        </form>
    </div>
    </div>
    </div>
    </>
  )
}

export default Signup