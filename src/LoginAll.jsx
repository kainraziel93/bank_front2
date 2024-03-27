import React, { useEffect, useState } from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import axios from 'axios';

import Logo from './Logo';
import Header from './components/Header';
import { useNavigate } from 'react-router-dom';
const LoginAll = () => {
  const navigate = useNavigate()
  const [username,setUsername]= useState('')
  const [password,setPassword] = useState('')
  const handleLogin= async()=>{
    

      try {
        console.log("api=W",process.env.REACT_APP_API)
        const response = await fetch(`https://bank-01-9dc728aeb614.herokuapp.com/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Set Content-Type header to application/json
              },
            body: JSON.stringify({
              username:username,
              password:password
            })
          });
          const responseObject = await response.json();
          const uuid = responseObject.uuid;
          const user = responseObject.user;
        
          localStorage.setItem('role',user.role)
          localStorage.setItem('firstname',user.firstname)
          localStorage.setItem('lastname',user.lastname)
          localStorage.setItem('email',user.email)
          localStorage.setItem('balance',user.balance)
          localStorage.setItem('uuid',uuid)
         if(user.role==="ADMIN"){
          navigate('/admin')
         }else{
          navigate('/user/dashboard')
         }

    } catch (error) {
        console.log("errr =>"+error)
    }
    
    

   
  }
  return (
    <div className='page-wrapper'>
      <Header/>

      <div className="container login-container ps-4">
          <h1 className=' pt-5'>Log on </h1>
          <div className="form-login-group">
          <label for="exampleFormControlInput1" className="form-label">Username</label>
            <input type="text" className="form-control" id="email" placeholder="name@example.com" onChange={(e)=>{setUsername(e.currentTarget.value)}}/>
            <label for="password" className="form-label mt-4">password</label>
            <input type="password" className="form-control" id="password" placeholder="enter your password" onChange={(e)=>{setPassword(e.currentTarget.value)}}/>
            <div className='d-flex justify-content-end'>
            <button  className='btn login-btn mt-5' onClick={handleLogin}> log in</button>
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