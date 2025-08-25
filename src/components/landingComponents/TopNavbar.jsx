import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";



const TopNavbar = () => {
  return (
    <>

    {/* TopNavbar */}

      <div className="top-navbar">
        <div className="items">
          <MdOutlineEmail className='pe-2 fs-2 iconColor'/>  manjityadav9986@gmail.com
        </div>
        <div className="items me-5">
          <a href="https://maps.app.goo.gl/Bxsx2z4BNhninyvT9" className='text-light text-decoration-none' target='_blank'><FaLocationDot className='pe-2 fs-4 iconColor'/> Bangra Bazar Deoria (U.P)</a>

        </div>
        <div className="items">
         <a href="https://www.facebook.com/profile.php?id=100055047545455" target='_blank'><FaFacebookF className=' ms-4 fs-2 text-light'/></a> 
        <a href="https://www.instagram.com/ahir_manjit_9986?igsh=MTJ1cjlnZXdicTBjeg==" className='text-light'  target='_blank'>  <FaInstagram className=' ms-4 fs-2'/></a>
         <a href="https://x.com/manjityadav9986" className='text-light'  target='_blank'> <FaTwitter className=' ms-4 fs-2'/></a>
       
        </div>
        <div className="items">
          <button className='btn rounded-0'>Buy Your Dream House</button>
        </div>
      </div>

    {/* navbar */}
 </>
  )
}

export default TopNavbar
