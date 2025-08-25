import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import NavBar from './NavBar'
import { useLocation } from 'react-router-dom'



const Services = () => {

  const location = useLocation();
  return (
    <>
      {location?.pathname!='/' && <NavBar className ='sticky'/>}
      <div className="services">
        <center><div className='our-services'>Our Services</div></center>
        <center><h1 className='pt-3'>Our Main Focus </h1></center>
        <div className="cards">
          <div className="card" data-aos="fade-right">  
            <img src="./home.png" alt="" />
            <h2>Buy a home</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste eveniet expedita, ad cum nulla nam quos non sunt. Ducimus reiciendis rerum accusantium, quam quos iste fuga natus ad eligendi. Laborum!</p>
            <a href="">find A home &rarr; </a>
            </div>

             <div className="card" data-aos="fade-up">  
            <img src="22.png" alt="" />
            <h2>Rent a home</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste eveniet expedita, ad cum nulla nam quos non sunt. Ducimus reiciendis rerum accusantium, quam quos iste fuga natus ad eligendi. Laborum!</p>
            <a href="">find A home &rarr; </a>
            </div>

             <div className="card" data-aos="fade-left">  
            <img src="23.png" alt="" />
            <h2>Sell a home</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste eveniet expedita, ad cum nulla nam quos non sunt. Ducimus reiciendis rerum accusantium, quam quos iste fuga natus ad eligendi. Laborum!</p>
            <a href="">find A home &rarr; </a>
            </div>
        </div>
      </div>
    
    </>
    
  )
}

export default Services
