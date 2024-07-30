import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRightFromBracket } from "react-icons/fa6"


function Sidebar({data}) {
  return (
    <div className='text-black bg-zinc-300 mt-20 p-4 h-[90%] flex flex-col items-center justify-between rounded py-4'>
      <div className='flex items-center flex-col justify-center'>{""}
      <img src={data.avatar} className='h-[12vh]'/>
      <p className='mt-3 text-xl text-black font-semibold'>{data.username}</p>
      <p className='mt-1 text-normal text-black'>{data.email}</p>
      <div className='w-full mt-4 h-[1px] bg-zinc-500 hidden lg:block'></div>
      </div>
      <div className='w-full flex-col items-center justify-center hidden lg:flex'>
        <Link to="/profile" className="text-black font-semibold w-full py-2 text-center hover:bg-zinc-900 rounded transition-all duration-300">Favourites</Link>
        <Link to="/profile/orderHistory" className="text-black font-semibold w-full py-2 text-center hover:bg-zinc-900 rounded transition-all duration-300">Order History</Link>
        <Link to="/profile/settings" className="text-black font-semibold w-full py-2 text-center hover:bg-zinc-900 rounded transition-all duration-300">Settings</Link>
      </div>
      <button className='bg-zinc-900 w-3/6 lg:w-full mt-4 lg:mt-0 text-white font-semibold flex items-center justify-center py-2 rounded hover:bg-white hover:text-zinc-900 transition-all duration-300'>Log Out<FaArrowRightFromBracket className=" ms-4"/></button>
    </div>
  )
}
export default Sidebar
