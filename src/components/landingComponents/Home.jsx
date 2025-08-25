import React from 'react'
import Slider from './Slider';
import Counter from './Counter';
import Services from './Services';
import Property from './Property';
import OurAnimities from './OurAnimities';
import Testimonial from './Testimonial';
import Footer from './Footer';
import TopNavbar from './TopNavbar';
import NavBar from './NavBar';
import ContactUs from './ContactUs';
const Home = () => {
  return (
    <>
      
       <NavBar />
      <Slider />
      <Counter />
      <Services />
      <Property />
      <OurAnimities />
      <Testimonial />
      <ContactUs />
   
    </>
  )
}

export default Home
