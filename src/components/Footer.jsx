import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
const Footer = () => {
  return (
    <div className=" footer-login text-white">
    <div className='container'> 
     <div className="row   py-3">
       <div className="col-3 columns">
          <div className="d-flex align-items-center gap-3 ">
            <FaPhoneAlt/> <div className='' style={{fontWeight:"500",fontSize:"0.8rem"}}> contact us</div>
          </div>
          <div className='pt-2 ps-4 ms-2' style={{fontSize:'0.7rem',fontWeight:"200"}}>Chat, call or make an appointment</div>
       </div>
       <div className="col-3 columns">
          <div className="d-flex align-items-center gap-3 ms-3 ">
            <FaLocationDot/> <div className='' style={{fontWeight:"500",fontSize:"0.8rem"}}> Find a branch</div>
          </div>
          <div className='pt-2 ps-4 ms-4' style={{fontSize:'0.7rem',fontWeight:"200"}}>Locate your nearest ATM or branch</div>
       </div>
       <div className="col-3 columns">
          <div className="d-flex align-items-center gap-3 ms-3 ">
            <FaInfoCircle/> <div className='' style={{fontWeight:"500",fontSize:"0.8rem"}}> Help & Support</div>
          </div>
          <div className='pt-2 ps-4 ms-4' style={{fontSize:'0.7rem',fontWeight:"200"}}>FAQs, Fees & Charges and Policies</div>
       </div>
       <div className="col-3 columns">
          <div className="d-flex align-items-center gap-3 ms-3">
            <TbWorld/> <div className='' style={{fontWeight:"500",fontSize:"0.8rem"}}> About HSBC</div>
          </div>
          <div className='pt-2 ps-4 ms-4' style={{fontSize:'0.7rem',fontWeight:"200"}}>Careers, media, investor and corporate information</div>
       </div>
    </div >
    
    </div>
    <div className='' style={{backgroundColor:"rgb(10 12 13)"}}>
          <div className='container d-flex text-white justify-content-end py-4 '>
              <h6  className="text-end" style={{    fontSize: "0.8em",letterSpacing: "0.3px",fontWeight:"200"}}>HSBC Bank (Singapore) Limited | © Copyright HSBC Bank (Singapore) Limited<br /> 2024. All rights reserved</h6>
          </div>
    </div>
  </div>

  )
}

export default Footer