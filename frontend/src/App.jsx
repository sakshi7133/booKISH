import React, { useEffect } from 'react';
import Home from '../src/home/Home';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Courses from './courses/Courses';
import Signup from './components/Signup';
import Profile from './profile/Final_profile'
import Contact from './contact/Contacts';
import About from './about/about';
import Cart from './Cart/cart'
import UserOrderHistory from './components/userOrderHistory'
import Favourites from './components/Favourites'
import ViewBookDetails from './viewBookDetails/ViewBookDetails';
import Settings from './components/settings';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from './store/auth';
import AllOrders from './components/AllOrders';
import AddBooks from './components/AddBooks';
import Updatebook from './components/updatebook';


function App() {
  const dispatch=useDispatch();
  const role=useSelector((state)=>state.auth.role);
  useEffect(()=>{
    if(
      localStorage.getItem("id") &&
      localStorage.getItem("token") &&
      localStorage.getItem("role")
     )
     {
      dispatch(authActions.login());
      dispatch(authActions.changeRole(localStorage.getItem("role")));
     }
  },[]);
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/course" element={<Courses/>}/>
    <Route path="/Signup" element={<Signup/>}/>
    <Route path="/profile" element={<Profile/>}>
     {role==="user" ? <Route index element={<Favourites/>}/> : <Route index element={<AllOrders/>}/>}
     {role==="admin" && <Route path="/profile/add-book" element={<AddBooks/>}/>}
    <Route path="/profile/orderHistory" element={<UserOrderHistory/>}/>
    <Route path="/profile/settings" element={<Settings/>}/>
    </Route>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/updatebook/:id" element={<Updatebook/>}/>
   
    <Route path="view-book-details/:id" element={<ViewBookDetails/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App
