import {React,useState} from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import Pages from './Pages';

const Favourites = () => {
    const [FavouriteBooks,setFavouriteBooks]=useState();
   const headers={
     id:localStorage.getItem("id"),
    authorization:`Bearer ${localStorage.getItem("token")}`};
    useEffect(()=>{
    const fetch=async()=>{
        const response=await axios.get("http://localhost:4001/api/v1/get-favourite-books",{headers});
        setFavouriteBooks(response.data.data);
    }
    fetch();
    },[FavouriteBooks]);
  return (
    <div className='lg:mt-20 mt-2 grid grid-cols-1 lg:grid-cols-4'>
        {FavouriteBooks && FavouriteBooks.length===0 && (<div className='text-5xl font-semibold h-[100%] text-zinc-400 flex px-10 flex-col w-full items-center justify-center'>No Favourite books!!
        </div>
       )}
        {FavouriteBooks && FavouriteBooks.map((items,i)=>(
        <>
        <div key={i}>
        <Pages data={items} favourite={true}/>
        </div>
        </>
    ))}</div>
  )
}

export default Favourites