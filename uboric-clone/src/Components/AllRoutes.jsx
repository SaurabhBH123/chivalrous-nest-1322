import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../Pages/Home'
import Shop from "../Pages/Shop"
// import ProductDetails from "./ProductDetails"
import SignIn from '../Pages/SignIn'
import Cart from "../Pages/Cart"
import AboutUs from '../Pages/AboutUs'
// import Checkout from './Checkout'
import ContactUs from '../Pages/ContactUs'
import WishList from '../Pages/WishList'
import SignUp from '../Pages/SignUp'
// import ReqAuth from "../components/Authentication/ReqAuth"


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/shop' element={<Shop/> } />
        {/* <Route path='/shop/:id' element={<ProductDetails/> } /> */}
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/contact-us' element={<ContactUs/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/wishlist' element={<WishList/>} />
        {/* <Route path='/checkout' element={<Checkout/>} /> */}
        <Route path='/sign-in' element={<SignIn/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='*' element={<div style={{padding:"200px"}}>This page does not exist :((</div>} />
    </Routes>
  )
}

export default AllRoutes