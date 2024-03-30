import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
const Footer = () => {
  return (
    <div className=" footer-login text-white">
    <div className='container'> 
     <div className="row  mt-5 pt-2 pb-3">
       <div className="col-3 columns">
          <div className="d-flex align-items-center gap-1 ">
            <FaPhoneAlt/> <div className='fw-bolder'> contact us</div>
          </div>
          <div className='pt-2 ps-3' style={{fontSize:'12px'}}>Chat, call or make an appointment</div>
       </div>
       <div className="col-3 columns">
          <div className="d-flex align-items-center gap-1 ">
            <FaLocationDot/> <div className='fw-bolder'> contact us</div>
          </div>
          <div className='pt-2 ps-3' style={{fontSize:'12px'}}>Chat, call or make an appointment</div>
       </div>
       <div className="col-3 columns">
          <div className="d-flex align-items-center gap-1 ">
            <FaInfoCircle/> <div className='fw-bolder'> contact us</div>
          </div>
          <div className='pt-2 ps-3' style={{fontSize:'12px'}}>Chat, call or make an appointment</div>
       </div>
       <div className="col-3 columns">
          <div className="d-flex align-items-center gap-1 ">
            <TbWorld/> <div className='fw-bolder'> contact us</div>
          </div>
          <div className='pt-2 ps-3' style={{fontSize:'12px'}}>Chat, call or make an appointment</div>
       </div>
    </div></div>
  
  </div>

  )
}

export default Footer