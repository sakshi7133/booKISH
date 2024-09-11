import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


const userOrderHistory = () => {
  
  const[OrderHistory,setOrderHistory]=useState();
  const headers={
     id:localStorage.getItem("id"),
    authorization:`Bearer ${localStorage.getItem("token")}`

  };
  useEffect(()=>{
    const fetch=async()=>{
      const response=await axios.get("http://localhost:4001/api/v1/get-order-history",{headers});
      setOrderHistory(response.data.data)
    }
    fetch();
  },[]);
  
  return (
    <div className=''>
    {OrderHistory && OrderHistory.length===0 && (
      <div className='h-[80vh] p-4 text-zinc-100'>
        <div className='h-[100%] flex items-center justify-center flex-col'>
          <h1 className='text-5xl font-semibold text-black mb-8'> 
            No order history
            <div className='px-20 mx-10 py-10 w-[80%] h-[100%]'>
            <FaCartShopping />
            </div>
          </h1>
        </div>
      </div>
    )}
      {OrderHistory && OrderHistory.length>0 &&(
      <div className='lg:h-[100%] lg:mt-20 h-auto p-0 md:p-4 text-zinc-100  ' >
        <h1 className='text-2xl md:text-5xl  font-semibold text-zinc-800 mb-8'>
           Your Order History
        </h1>
        <div className='mt-4 bg-zinc-200 text-black w-full rounded  py-2 px-4 flex gap-4  '>
          <div className='w-[3%]'>
            <h1 className='text-center '>Sr.</h1>
          </div>
          <div className='w-[22%]'>
            <h1 className='text-center '>Books</h1>
          </div>
          <div className='w-[45%] hidden md:block'>
            <h1 className='text-center '>Description</h1>
          </div>
          <div className='w-[12%]'>
            <h1 className='text-center '>Price</h1>
          </div>
          <div className='w-[16%]'>
            <h1 className='text-center '>Status</h1>
          </div>
          <div className='w-[5%] '>
            <h1 className='text-center '>Mode</h1>
          </div>
        </div>
          {OrderHistory.map((items,i)=>(
            <div className='bg-white w-full text-zinc-900 rounded py-2 px-4 flex gap-4 hover:bg-zinc-300 hover:cursor-pointer'>
              <div className='w-[3%] '>
                <h1 className='text-center'>{i+1}</h1>
              </div>
              <div className='w-[22%] text-center'>
                <Link to={`/view-book-details/${items.book._id}`}
                className="hover:text-blue-300 ">
                  {items.book.title}
                </Link>
              </div>
              <div className='w-[45%] hidden md:block '>
                <h1 className='text-center '>{items.book.description.slice(0,50)}...</h1>
              </div>
              <div className='w-[12%] '>
                <h1 className='text-center md:text-center'>{items.book.price}</h1>
              </div>
              <div className='w-[16%] '>
                <h1 className='font-semibold text-green-5000 text-center'>{items.status==="Order placed" ? (
                  <div className='text-yellow-500 text-center '>{items.status}</div>
                 ) : items.status==="Cancelled" ? (<div className='text-red-500 text-center '>{items.status}</div>
                ):(items.status)}
                </h1>
              </div>
              <div className='w-none md:w-[5%] '>
                <h1 className='text-sm text-center  text-zinc-600'>COD</h1>
              </div>
            </div >
          ))}
        </div>
          
      )}
  </div>
      
   )}

export default userOrderHistory