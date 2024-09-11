import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaArrowRightFromBracket } from "react-icons/fa6"
import { authActions } from '../store/auth'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'


function Sidebar({data}) {
  const dispatch=useDispatch();
  const history=useNavigate();
  const role=useSelector((state)=>state.auth.role);
  const handleLogout = () => {
    dispatch(authActions.logout());
    dispatch(authActions.changeRole('user'));
    localStorage.clear('id'); // Correctly remove specific items
    localStorage.clear('token');
    localStorage.clear('role');
    history('/'); // Correctly navigate to the home page
  };
  return (
    <div className='text-black bg-zinc-300 mt-20 p-4 h-auto lg:h-[80%] flex flex-col items-center justify-between rounded py-4'>
      <div className='flex items-center flex-col justify-center'>{""}
      <img src={data.avatar} className='h-[12vh]'/>
      <p className='mt-3 text-xl text-black font-semibold'>{data.username}</p>
      <p className='mt-1 text-normal text-black'>{data.email}</p>
      <div className='w-full mt-4 h-[1px] bg-zinc-500 hidden lg:block'></div>
      </div>
      {role==="user" && (
        <div className='w-full flex-col items-center justify-center hidden lg:flex'>
        <Link to="/profile" className="text-black font-semibold w-full py-2 text-center hover:bg-zinc-500 rounded transition-all duration-300">Favourites</Link>
        <Link to="/profile/orderHistory" className="text-black font-semibold w-full py-2 text-center hover:bg-zinc-500 rounded transition-all duration-300">Order History</Link>
        <Link to="/profile/settings" className="text-black font-semibold w-full py-2 text-center hover:bg-zinc-500 rounded transition-all duration-300">Settings</Link>
      </div>
      )}
      {role==="admin" && (
         <div className='w-full flex-col items-center justify-center hidden lg:flex'>
         <Link to="/profile" className="text-black font-semibold w-full py-2 text-center hover:bg-zinc-500 rounded transition-all duration-300">All Orders</Link>
         <Link to="/profile/add-book" className="text-black font-semibold w-full py-2 text-center hover:bg-zinc-500 rounded transition-all duration-300">Add Book</Link>
       </div>
      )}
      <button className='bg-zinc-900 w-3/6 lg:w-full mt-4 lg:mt-0 text-white font-semibold flex items-center justify-center py-2 rounded hover:bg-white hover:text-zinc-900 transition-all duration-300'
      onClick={handleLogout}>Log Out<FaArrowRightFromBracket className=" ms-4"/></button>
    </div>
  )
}
export default Sidebar
