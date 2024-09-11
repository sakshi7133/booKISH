import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './Login';

function Navbar() {
  /*const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]); */
  const [sticky, setSticky] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true)
      }
      else {
        setSticky(false)
      }

    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [])
  
  const links = 
  [
    {
      title:"Home",
      link: "/",
    },
    {
      title:"All Books",
      link:"/course",
    },
    {
      title:"Contact",
      link:"/contact",
    },
    {
      title:"About",
      link:"/about",
    },
    {
      title:"Cart",
      link:"/cart",
    },
    {
      title:"Profile",
      link:"/profile",
    },
    {
      title:"Admin Profile",
      link:"/profile",
    }
    

];

  const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn);
  const role=useSelector((state)=>state.auth.role);
  if(isLoggedIn===false)
  {
    links.splice(4,4);
  }
  if(isLoggedIn===true && role=== "admin")
    {
      links.splice(5,1);
      links.splice(3,1);
      links.splice(3,1);
      links.splice(2,1);

    }
    if(isLoggedIn===true && role=== "user")
      {
        links.splice(6,1);
      }
  /*
  return (
    <>
    
      <div className={`max-w-screen-full container mx-auto md:px-20 px-8 dark:bg-slate-900 dark:text-white fixed top-0 left-0 right-0 z-50 p-2 
    ${sticky ? "sticky-navbar shadow-md bg-base-200 dark:text-white duration-300 transition-all ease-in-out" : ""}`}>
        <div className="navbar bg-base-100 ">
               <div className="navbar-start">
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                 </div>
                   <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navItems}
                   </ul>
                </div>
                    <img 
                     className='h-10 me-4'
                     src="https://cdn-icons-png.flaticon.com/128/10433/10433049.png" 
                     alt="logo"/>
                    <a className="text-2xl font-bold cursor-pointer">booKISH</a>
               </div>
               <div className="navbar-end space-x-3">
                 <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                      {navItems}
                    </ul>
                 </div>
                 <div className="">
                   <a className="bg:black text-white px-3 py-2 rounded-md border hover: bg-cyan-400 duration-300 cursor-pointer" onClick={() => document.getElementById("my_modal_3").showModal()}>Login</a>
                      <Login />
                 </div>
               </div>
        </div>
      </div>
    </>
  )
    className='flex bg-zinc-800 text-white px-8 py-4 items-center justify-between'>
    */

  return(
    <>
 <div className={`max-w-screen-full container mx-auto md:px-20 px-8 dark:bg-slate-900 dark:text-white fixed top-0 left-0 right-0 z-50 p-2 
    ${sticky ? "sticky-navbar shadow-md bg-base-200 dark:text-white duration-300 transition-all ease-in-out" : ""}`}>
      
    <div className=' screen-full navbar bg-base-100  justify-between  '>
        <div className='justify-start'>
        <img className='h-10 me-4'
        src="https://cdn-icons-png.flaticon.com/128/10433/10433049.png"
        alt="logo"/>
        <a className="text-2xl h-10 mt-3 me-4 text-black font-bold cursor-pointer">booKISH!</a>
        </div>
        <div className='navbar-end md:flex '>
           <div className="dropdown">
             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
             </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {links.map((items,i)=>(
                  <div>
                      {items.title==="Profile" || items.title==="Admin Profile" ? (
                      <Link to={items.link} className=' hover:text-blue-500  transition-all duration-300' key={i}>
                          {items.title}
                      </Link>) : (
                      <Link to={items.link} className='hover:text-blue-500 transition-all duration-300' key={i}>
                          {items.title}{" "}
                      </Link>)}
                  </div>
                 ))}
              </ul>
           </div>
           <div className='hidden md:flex text-black semibold gap-4'>
          {links.map((items,i)=>(
            <Link to={items.link} className='hover:text-blue-500 transition-all duration-300'
            key={i}>
              {items.title}{' '}
            </Link>
          ))}
           </div>
           
           {isLoggedIn=== false &&(
            <>
            <div className="  md:flex gap-4 px-4">
            <a className="bg:black text-white px-3 py-2 rounded-md border hover: bg-cyan-400 duration-300 cursor-pointer" onClick={() => document.getElementById("my_modal_3").showModal()}>Login</a>
            <Login />
            </div>
            </>
           )}
        </div>
    </div>
  </div>

  </>
  );
}

export default Navbar