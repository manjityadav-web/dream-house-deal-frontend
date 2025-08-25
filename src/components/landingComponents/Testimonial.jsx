import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { RiDoubleQuotesL } from "react-icons/ri";

const Testimonial= () => {
  return (
    <>
      <div className="testimonial">
        <center><div className='our-testimonial'>Testimonial</div></center>
        <center><h1 className='pt-3'>Clients Feedback</h1></center>
        <div className="testimonial-cards">
          <div className="testimonial-card" data-aos="fade-right">
            <RiDoubleQuotesL className='fs-1'/>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste eveniet expedita, ad cum nulla nam quos non sunt. Ducimus reiciendis rerum accusantium, quam quos iste fuga natus ad eligendi. Laborum!</p>
           
           <div className='d-flex mb-0 mt-3'>
            <div className='card-img p-0 me-2'><img src="1.jpg_1.jpeg" alt="" className='img-fluid p-0' /></div>
            <div className='card-p mt-3'>
              <h4 className='text-dark'>Jacob William</h4>
              <p>Selling Agents</p>
            </div>
           </div>
           
            </div>

             <div className="testimonial-card" data-aos="fade-up"> 
            <RiDoubleQuotesL className='fs-1'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste eveniet expedita, ad cum nulla nam quos non sunt. Ducimus reiciendis rerum accusantium, quam quos iste fuga natus ad eligendi. Laborum!</p>

                <div className='d-flex mb-0 mt-3'>
            <div className='card-img p-0 me-2'><img src="2.jpg_1.jpeg" alt="" className='img-fluid p-0' /></div>
            <div className='card-p mt-3'>
              <h4 className='text-dark'>Jacob William</h4> className='text-dark'
              <p>Selling Agents</p>
            </div>
           </div>
           
            </div>

             <div className="testimonial-card" data-aos="fade-left">  
            <RiDoubleQuotesL className='fs-1'/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste eveniet expedita, ad cum nulla nam quos non sunt. Ducimus reiciendis rerum accusantium, quam quos iste fuga natus ad eligendi. Laborum!</p>
           
             <div className='d-flex mb-0 mt-3'>
            <div className='card-img p-0 me-2'><img src="3.jpg_2.jpeg" alt="" className='img-fluid p-0' /></div>
            <div className='card-p mt-3'>
              <h4 className='text-dark'>Jacob William</h4>
              <p>Selling Agents</p>
            </div>
           </div>
           
            </div>
        </div>
      </div>
    </>
  )
}

export default Testimonial
