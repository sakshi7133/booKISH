import React from 'react'
import {Link} from "react-router-dom";
import { useForm } from "react-hook-form"
function contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
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
      <p className='mt-6'>cfxd fdjugku gdxy fcju. cjyg gfyugl mhtfku fcy</p>
      </div> 
      <div className='flex py-10 items-center justify-center '>
    <div id="my_modal_3" className="border-[2px]  p-5  rounded-md shadow-md">
    <div className="">
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <Link
        to="/"
        className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
        onClick={()=>document.getElementById("my_modal_3").close()}>✕</Link>
        
        <h3 className="font-bold text-lg">Contact</h3>
        <div className='mt-4 space-y-2'>
        <span>Name</span><br/>
        <input type="text" placeholder='Enter your fullname' className='w-80 px-3 py-1 border rounded-md outline-none'
        {...register("name", { required: true })}/>
        <br/>
        {errors.name && <span className='text-sm text-red-800'>This field is required</span>}
        </div>
        <div className='mt-4 space-y-2'>
        <span>Email</span><br/>
        <input type="email" placeholder='Enter your email id' className='w-80 px-3 py-1 border rounded-md outline-none'
        {...register("email", { required: true })}/>
        <br/>
        {errors.email && <span className='text-sm text-red-800'>This field is required</span>}
        </div>
        <div className='mt-4  space-y-2 '>
        <span>Message</span><br/>
        <input type="text" placeholder='type a message' className='w-80 px-3 py-1 border rounded-md outline-none'
        {...register("Message", { required: true })}/>
        <br/>
        {errors.password && <span className='text-sm text-red-800'>This field is required</span>}
        </div>
        
        </form>
        </div></div></div>
    </div>
  )
}

export default contact