import React from 'react';
import '../Styles/Navbar.css';
import logo from "../assets/fix-health-logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
    
  return (
    <div className='Navigation'>
        <div className='head-nav'>
            YourPhysio is now FixHealth &#9877;
        </div>
        <div className="navbar">
        {/* <div className="logo"></div> */}
        <a href='#'><img src={logo} width={90} height={70}></img></a>
        <div className="sections">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
            {/* <a href="#" className='bookings'>Book Now</a> */}
        </div>
        </div>
    </div>

  )
}

export default Navbar;
