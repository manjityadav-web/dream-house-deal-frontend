import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { FaCar } from "react-icons/fa";
import { FaSwimmingPool } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { FaHandHoldingMedical } from "react-icons/fa";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { HiHomeModern } from "react-icons/hi2";
import { FiSliders } from "react-icons/fi";
const Animities = () => {
  return (
    <>
      <div className="animinities" >
        <center><div className='our-animinities'>Animinities</div></center>
        <center><h1 className='pt-3'>Building Animinities </h1></center>
        <div className="animities-cards" data-aos="fade-up">
         <div>        
          <div className="animities-card">
           <div className="animities-icon"> <FaCar /></div>
            <h3>Parking Space </h3>

            <div className='animities-arrow'><a href=""> &rarr; </a></div>
          </div>
        

        <div className="animities-card">
          <div className="animities-icon"> <FaSwimmingPool /></div>
          <h3>Swimming Pool</h3>
          <div className='animities-arrow'><a href=""> &rarr; </a></div>
        </div>
         </div>
      

     <div>
       <div className="animities-card">
        <div className="animities-icon"> <MdOutlineSecurity /> </div>
        <h3>Privet Security</h3>
        <div className='animities-arrow'><a href=""> &rarr; </a></div>
      </div>
    



      <div className="animities-card">
       <div className="animities-icon"> <FaHandHoldingMedical /> </div>
        <h3>Medical Center</h3>

        <div className='animities-arrow'><a href=""> &rarr; </a></div>
      </div>
     </div>
            

 <div>
   <div className="animities-card">
     <div className="animities-icon">  <MdOutlineLibraryBooks /> </div>
    <h3>Library Area</h3>
    <div className='animities-arrow'><a href=""> &rarr; </a></div>
  </div>
            

  <div className="animities-card">
       <div className="animities-icon"> <IoBedOutline /></div>
    <h3>King size Beds</h3>
    <div className='animities-arrow'><a href=""> &rarr; </a></div>
  </div>
          
  </div>  
    <div>
       <div className="animities-card">
      <div className="animities-icon">  <HiHomeModern />  </div>

    <h3>smarts Home</h3>
    <div className='animities-arrow'><a href=""> &rarr; </a></div>
  </div>
          

  <div className="animities-card">
   <div className="animities-icon"><FiSliders />  </div>
    <h3>Flaction-slider</h3>
    <div className='animities-arrow'><a href=""> &rarr; </a></div>

  </div>

    </div>
   </div>
</div>
    </>
  )
}

export default Animities;
