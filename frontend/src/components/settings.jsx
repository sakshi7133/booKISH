import { useEffect,useState, React  } from 'react';
import axios from 'axios';

const settings = () => {
  const[Value,setValue]=useState({address:""});
  const [ProfileData, setProfileData] = useState()
  const headers={
    id:localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,

  };
  const change=(e)=>{
    const {name,value}=e.target;
    setValue({...Value,[name]:value})
  }
  useEffect(()=>{
    const fetch=async()=>{
      const response =await axios.get(
        "http://localhost:4001/api/v1/get-user-information",{headers}
      );
      setProfileData(response.data);
      setValue({address:response.data.address});
    };
    fetch();
  },[]);
  const submitAddress=async()=>{
    const response=await axios.put("http://localhost:4001/api/v1/update-address",Value,{headers});
    alert(response.data.message);
  };
  return <>
  {
    ProfileData && (
      <div className='h-[100%] mt-2 lg:mt-20 p-0 md:p-4 text-zinc-700'>
        <h1 className='text-3xl md:text-5xl font-semibold text-zinc-600 mb-8'>
          Settings
        </h1>
        <div className='flex gap-12'>
          <div className='text:zinc-700'>
            <label htmlFor="">Username</label>
            <p className='font-semibold p-2 rounded bg-zinc-300'>
              {ProfileData.username}
            </p>
          </div>
          <div className='text:zinc-700'>
          <label htmlFor="">Email</label>
            <p className='rounded bg-zinc-300 font-semibold p-2'>
              {ProfileData.email}
            </p>
          </div>
        </div>
        <div className='mt-4 text:zinc-700 flex flex-col'>
        <label htmlFor="">Address</label>
            <textarea
            className='p-2 rounded bg-zinc-300 mt-2 font-semibold'
            rows='5'
            placeholder='Address'
            name='address'
            value={Value.address}
            onChange={change}
            />
        </div>
        <div className='mt-4 justify-end flex'>
          <button className='bg-yellow-500 text-zinc-900 font-semibold px-3 py-2 rounded hover:bg-yellow-400 transition-all duration-300'onClick={submitAddress}>Update</button>
          
        </div>
      </div>
    )
  }
  </>

 
}

export default settings
