import React from 'react'
import './Navbar.css';
import {BsHandbag} from "react-icons/bs"
import {AiOutlineHeart,AiOutlineSearch} from "react-icons/ai"
import {MdOutlineManageAccounts} from "react-icons/md"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <p className='app'>
    FOR ONLINE PAYMENT EXTRA ₹10% DISCOUNT ON ORDERS ABOVE ₹500
 </p>
 <br/>
 <div className='menu-bar'>
  <Link to="/"><img className='logo' 
   src='https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/200x80black.png' alt='logo'/></Link> 
<div className='menu'>
  <Link to="/" className='hover-underline-animation'>Home</Link>
    <Link to='/about-us' className='hover-underline-animation' >About Us </Link>
    <Link to='/shop' className='hover-underline-animation' >Shop</Link>
    <Link to='/categories' className='hover-underline-animation' >Categories</Link>
   <Link to='/contact-us' className='hover-underline-animation' >Contact Us</Link>
</div>
<div className='icons'>
<Link to="/sign-in"><MdOutlineManageAccounts style={{fontSize:"1.5rem"}}/></Link> 
<AiOutlineSearch style={{fontSize:"1.5rem"}}/>
<Link to="/wishlist"><AiOutlineHeart style={{fontSize:"1.5rem"}}/></Link>

<Link to="/cart"><BsHandbag style={{fontSize:"1.3rem"}}/></Link>    
</div>
 </div>
  </>
  )
}

export default Navbar