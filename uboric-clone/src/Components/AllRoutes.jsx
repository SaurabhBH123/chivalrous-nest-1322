import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../Pages/Home'
import Shop from "../Pages/Shop"
import ProductDetails from "../Pages/ProductDetails"
import SignIn from '../Pages/SignIn'
import Cart from "../Pages/Cart"
import AboutUs from '../Pages/AboutUs'
import Checkout from '../Pages/Checkout'
import ContactUs from '../Pages/ContactUs'
import WishList from '../Pages/WishList'
import SignUp from '../Pages/SignUp'
import ReqAuth from "../Components/Authentication/ReqAuth"


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/shop' element={<ReqAuth><Shop/></ReqAuth> } />
        <Route path='/shop/:id' element={<ReqAuth><ProductDetails/></ReqAuth> } />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/contact-us' element={<ContactUs/>} />
        <Route path='/cart' element={<ReqAuth><Cart/></ReqAuth> } />
        <Route path='/wishlist' element={<ReqAuth><WishList/></ReqAuth> } />
        <Route path='/checkout' element={<ReqAuth><Checkout/></ReqAuth>} />
        <Route path='/sign-in' element={<SignIn/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='*' element={<div style={{padding:"200px"}}>This page does not exist :((</div>} />
    </Routes>
  )
}

export default AllRoutes