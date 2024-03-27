import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

import Logo from './Logo';
import Header from './components/Header';
const LoginAll = () => {
  return (
    <div className='page-wrapper'>
      <Header/>

      <div className="container login-container ps-4">
          <h1 className=' pt-5'>Log on </h1>
          <div className="form-login-group">
          <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
            <label for="password" className="form-label mt-4">password</label>
            <input type="password" className="form-control" id="password" placeholder="enter your password"/>
            <div className='d-flex justify-content-end'>
            <button  className='btn login-btn mt-5'> log in</button>
            </div>
          </div>
      </div>
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

    </div>
  )
}

export default LoginAll