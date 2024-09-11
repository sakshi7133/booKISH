import React, { useEffect, useState } from 'react'
import Sidebar from "../components/Sidebar"
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';
import axios from 'axios';
import MobileNav from './MobileNav';

function Profile() {
 //const isLoggedIn=useSelector();
 const [Profile,setProfile]=useState();
  const headers={
    id:localStorage.getItem("id"),
    authorization:`Bearer ${localStorage.getItem("token")}`}
  useEffect(()=>{
    const fetch=async()=>{
      const response=await axios.get("http://localhost:4001/api/v1/get-user-information",{headers});
      setProfile(response.data);
    };
    fetch();
  },[]);
  return (
<div className='px-2 md:px-12 flex flex-col md:flex-row md:h-screen text-black gap-4 py-8'>
   
   {!Profile}
   {Profile && (
   <>
    <div className='md:w-1/6 h-auto w-full lg:h-screen'>
    <Sidebar data={Profile}/>
    <MobileNav/>
    </div>
    <div className='w-full md:w-5/6'><Outlet/></div>
    </>)}
</div>   
  )
}

export default Profile