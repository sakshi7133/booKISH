import React,{useState} from 'react'
import { useForm } from "react-hook-form"
import {authActions} from "../store/auth"
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios';
import { useDispatch } from 'react-redux';
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const[Values,setValues]=useState({username:"",password:""});
  const navigate=useNavigate();
  const disapatch= useDispatch();
  const change=(e)=>{
    const{name,value}=e.target;
    setValues({...Values,[name]:value});
  }
  const submit=async()=>{
    try{
      if(Values.username===""||Values.password==="")
      {
        alert("all fields are required");
      }
      else{
        const response=await axios.post("http://localhost:4001/api/v1/login",Values);  
      disapatch(authActions.login());                         //this will login to the page of the given role and chane giving properties accordingly
      disapatch(authActions.changeRole(response.data.role));  //to check redux role we have a tool redux tool
      localStorage.setItem("id",response.data.id);
      localStorage.setItem("token",response.data.token);
      localStorage.setItem("role",response.data.role);
    }
   } catch(error)
    {
      alert(error.response.data.message);
    }
  }
  return (
 <>
 

    <div >
    <dialog id="my_modal_3" className="modal">
    <div className="modal-box">
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <Link
        to="/"
        className='btn btn-sm btn-circle text-black btn-ghost absolute right-2 top-2'
        onClick={()=>document.getElementById("my_modal_3").close()}>✕</Link>
       
        <h3 className="font-bold text-black">Login</h3>
        <div className='mt-4 text-black space-y-2'>
        <span>Username</span><br/>
        <input type="text" placeholder='Enter your email id' className='w-80 px-3 py-1 border rounded-md outline-none'
        {...register("username", { required: true })} value={Values.username} onChange={change}/>
        <br/>
        {errors.email && <span className='text-sm text-red-800'>This field is required</span>}
        </div>
        <div className='mt-4 text-black space-y-2'>
        <span>Password</span><br/>
        <input type="text" placeholder='type your password' className='w-80 px-3 py-1 border rounded-md outline-none'
        {...register("password", { required: true })} value={Values.password} onChange={change}/>
        <br/>
        {errors.password && <span className='text-sm text-red-800'>This field is required</span>}
        </div>
        <div className='flex justify-around mt-4'>
            <button className='bg-cyan-400 text-white rounded-md px-3 py-1 hover:bg-cyan-800 duration-200' onClick={submit} >Login</button>
            <p>Not registered?<Link to="/Signup" className='underline text-blue-500 cursor-pointer'>Signup</Link></p>
        </div>
        </form>
    </div>
    </dialog>
    </div>
  </>
  )
}

export default Login