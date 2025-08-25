import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
  <>
  <div className="footer">

    <div className="first-col">
      <img src="home2.jpg" alt=""  className='pb-3'/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga laboriosam ducimus saepe, mollitia rem quam.</p>
       <a href="https://maps.app.goo.gl/Bxsx2z4BNhninyvT9" className='text-light text-decoration-none  location' target='_blank'><FaLocationDot className='pe-2 fs-4 iconColor location'/> <span className='location'>Bangra Bazar Deoria (U.P)</span></a>
      
      <p><IoCall  className='fs-2'/>+91 9628337556</p>
      <p><MdEmail  className='fs-2'/>manjityadav9986@gmail.com</p>
       <p> <a href="https://www.facebook.com/profile.php?id=100055047545455"  target='_blank'><FaFacebookF className=' ms-4 fs-2 text-light'/></a> 
          
               <a href="https://x.com/manjityadav9986" className='text-light'> <FaTwitter className=' ms-4 fs-2'  target='_blank'/></a>
             </p> </div>
    <div className="second-col">
          <div className="col1">
          <h3 className='text-light pb-3'>Company</h3>
          <p><a href="">About</a></p>
           <p><a href="">Blog</a></p>
            <p><a href="">all Product</a></p>
             <p><a href="">Location Map</a></p>
              <p><a href="">Contact</a></p>
          </div>
          <div className="col1">
            <h3 className='text-light pb-3'>Services</h3>
            <p><a href="">Our tracking</a></p>
            <p><a href="">White List</a></p>
            <p><a href="">Login</a></p>
            <p><a href="">My Account </a></p>
            <p><a href="">Term & Condition</a></p>
            <p><a href="">Promotion</a></p>
          </div>
          <div className="col1">
            <div className="first-col">
   <b> <h3 className='text-light'>Newsletter</h3></b>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, eligendi.</p>
    <input type="text" placeholder='Send Email' className='fs-5 mt-2 mb-2'/>
   <b> <h3 className='pt-3'>We Accept</h3></b>
 <img src="payment-4.png" alt="" className='img-fluid'/>
    </div>

          </div>
    </div>
   
  </div>
  
   <div className="ftr">
   <div className='ftr-item'> <p>All Right Reserved @ Dream House 2025</p></div>
   <div className='ftr-item'>@Developed By Manjit Yadav (MERN Stack)</div>
  <div className='ftr-item'>  <p>Terms&Condition Claim Privacy& Policy</p></div>
  </div>
  
  </>
  )
}

export default Footer
