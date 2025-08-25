// import React from 'react'
import React, { useState, useEffect } from 'react';
import {  useNavigate, NavLink, Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { RiContactsLine } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
import Swal from 'sweetalert2';


// import "./App.css"; 
const NavBar = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userInfo'))
    setUserData(user)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('userInfo')
    navigate('/login')

     Swal.fire({
              icon: "success",
              title: "Logged Out",
              text: "You have been  logged out!"
     })
  }

  const [menuOpen, setMenuOpen] = useState(false);

  if (userData?.userType == 'admin') {
    return (
      <>
        <div className='sticky-top'>
          <div className="navbar">
            <div className="logo-home">
              <img src="./home2.jpg" alt="Logo" className='img-fluid pt-2' />
            </div>

            {/* Hamburger icon for mobile */}
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              ☰
            </div>

            {/* Menu sections toggle */}
            <div className={`nav-sections ${menuOpen ? 'open' : ''}`}>
              <div className="search-bar">
                <ul>
                  <li><Link to="/admin-add">Add</Link></li>
                  <li><Link to="/admin-list">List</Link></li>
                  <li><Link to="/admin-sold">Sold</Link></li>
                  <li><Link to="/admin-user">User</Link></li>
                  <li><Link to="/admin-profile">Profile</Link></li>
                  <li><Link to="/admin-contact">Contact</Link></li>
                </ul>
              </div>
{/* 
              <div className="cart-icon">
                <span style={{ fontSize: "3vmin" }} className="nav-icon fs-2 ic"><IoSearch /></span>
                <span style={{ fontSize: "3vmin" }} className="nav-icon fs-2 ic"><RiContactsLine /></span>
                <span style={{ fontSize: "3vmin" }} className="nav-icon fs-2 ic"><LuShoppingCart /></span>
              </div> */}

              <div className="menu-items" onClick={handleLogout}>
                <ul>
                  <button><li><Link to="/login" className="text-dark p-2">Logout</Link></li></button>
                   </ul>
              </div>
            </div>
          </div>
        </div>
      </>
      );
  }
    else if(userData?.userType=='user'){

       return (
      <>
        <div className='sticky-top'>
          <div className="navbar">
            <div className="logo-home">
              <img src="./home2.jpg" alt="Logo" className='img-fluid pt-2' />
            </div>

            {/* Hamburger icon for mobile */}
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              ☰
            </div>

            {/* Menu sections toggle */}
            <div className={`nav-sections ${menuOpen ? 'open' : ''}`}>
              <div className="search-bar">
                <ul>
                  <li><Link to="/user-property">Property</Link></li>
                  <li><Link to="/user-bought">Bought</Link></li>
                  <li><Link to="/user-profile">Profile</Link></li>
                </ul>
              </div>
{/* 
              <div className="cart-icon">
                <span style={{ fontSize: "3vmin" }} className="nav-icon fs-2 ic"><IoSearch /></span>
                <span style={{ fontSize: "3vmin" }} className="nav-icon fs-2 ic"><RiContactsLine /></span>
                <span style={{ fontSize: "3vmin" }} className="nav-icon fs-2 ic"><LuShoppingCart /></span>
              </div> */}

              <div className="menu-items " onClick={handleLogout}>
                <ul>
                  <button><li><Link to="/login" className="text-dark p-2">Logout</Link></li></button>
                   </ul>
              </div>
            </div>
          </div>
        </div>
      </>
      );
    }

    else{
          return (
      <>
        <div className='sticky-top'>
          <div className="navbar">
            <div className="logo-home">
              <img src="./home2.jpg" alt="Logo" className='img-fluid pt-2' />
            </div>

            {/* Hamburger icon for mobile */}
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              ☰
            </div>

            {/* Menu sections toggle */}
            <div className={`nav-sections ${menuOpen ? 'open' : ''}`}>
              <div className="search-bar">
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/property">Property</Link></li>
                  <li><Link to="/contactUs">Contact Us</Link></li>
                </ul>
              </div>

              <div className="cart-icon">
                <span style={{ fontSize: "3vmin" }} className="nav-icon fs-2 ic"><a href="/property" className='text-dark'><IoSearch /></a></span>
                <span style={{ fontSize: "3vmin" }} className="nav-icon fs-2 ic"><a href="/register"className='text-dark'><RiContactsLine /></a></span>
                <span style={{ fontSize: "3vmin" }} className="nav-icon fs-2 ic"><LuShoppingCart /></span>
              </div>

              <div className="menu-items ">
                <ul>
                  <button><li><Link to="/login" className="text-dark p-2">Login</Link></li></button>
                  <button><li><Link to="/register" className="text-dark p-2">Register</Link></li></button>
                   </ul>
              </div>
            </div>
          </div>
        </div>
      </>
      );
    }
};


export default NavBar