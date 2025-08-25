
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { FaHome } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import Typewriter from 'typewriter-effect';



const Slider = () => {
  return (
    <>
    <div className="container-fluid">
    <div className="hero row">
     
      <div className="text pt-5 flex-column col-12 col-md-6 order-1 pddd">
        <h3 className='hero-h3'><FaHome className='pb-2'/>Real Estate agency</h3>
        <h1 className='hero-h1'>
        <Typewriter
     options={{
     strings: ['<b>Find Your Dream House By Us</b>'],
       autoStart: true,
  loop: true,
  }}
/>
</h1>
        
          <p className='slide-para'>"Find your dream home with our trusted real estate platform offering premium properties, expert guidance, and seamless buying experience."
        </p>
        <button className='hero-bttn'><a href="/contactUs">Make An Enquiry</a></button> <FaPlay className='ps-2 fs-3 playicon'/>
      </div>
      <div className="home-img  d-flex justify-content-center align-items-center col-12 col-md-6 order-2">
        <img src="slider.png" alt="" className='img-fluid pt-5 pb-5'/>
      </div>
      
    </div>
    </div>
    
    </>


  )

}

export default Slider;
