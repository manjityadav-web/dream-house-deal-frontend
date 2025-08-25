import React from 'react'
import { AiOutlineAreaChart } from "react-icons/ai";
import { HiBuildingLibrary } from "react-icons/hi2";
import { FaTractor } from "react-icons/fa6";
import { MdOutlineChair } from "react-icons/md";
import CountUp from 'react-countup';


const Counter = () => {
  return (
   <>
            <div className="counter">
                <div className="counter-item">
                <AiOutlineAreaChart className='icn' />
                <h2>
                <CountUp end={560}
                  duration = {7}
                />+
                </h2>
                <p>Total Area Sq</p>
                </div>
                <div className="counter-item">
                  <HiBuildingLibrary className='icn'/>
                  <h2>
                   <CountUp end={250}
                  duration = {7}
                />k
                </h2>
                  <p>Apartment Sold</p>
                </div>
                <div className="counter-item">
                  <FaTractor className='icn'/>
                  <h2>
                     <CountUp end={280}
                  duration = {7}
                />+
                  </h2>
                  <p>Total Construction</p>
                </div>
                <div className="counter-item">
                     <MdOutlineChair className='icn'/>
                  <h2>
                     <CountUp end={350}
                  duration = {7}
                />k+
                  </h2>
                  <p>Apartio Room</p>
                </div>
            </div>
   </>
  )
}

export default Counter

