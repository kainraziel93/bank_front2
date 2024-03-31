import React, { useEffect, useState } from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import axios from 'axios';

import Logo from './Logo';
import Header from './components/Header';
import { useNavigate } from 'react-router-dom';
import Footer from './components/Footer';
import api from './components/api.js'
const LoginAll = () => {
  const navigate = useNavigate()
  const [username,setUsername]= useState('')
  const [password,setPassword] = useState('')
  const [ip,setIp] = useState('')
  useEffect( ()=>{
    const checkRole = localStorage.getItem('role')
  
    const a = async ()=>{ const  ipAdress =await fetch('https://api.bigdatacloud.net/data/client-ip')
    const ipResponse = await ipAdress.json()
    setIp(ipResponse.ipString)

  }
   a()
  })
  const handleLogin= async()=>{
  
   
      try {
        console.log("api=W",process.env.REACT_APP_API)
       
        const response = await fetch(`${api}auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
              },
            body: JSON.stringify({
              username:username,
              password:password,
              ip:ip || "0.0.0.0"
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
          localStorage.setItem('disponible',user.disponible)
          localStorage.setItem('id',user.id)
          localStorage.setItem('uuid',uuid)
         if(user.role==="ADMIN"){
          navigate('/admin')
         }
         if(user.role==="CLIENT"){
          navigate('/user/dashboard')
         }

    } catch (error) {
        console.log("errr =>"+error)
    }

   
  }
  return (
    <div className='page-wrapper '>
      <Header/>

      <div className="container login-container ps-4">
          <h1 className=' pt-5'>Log on </h1>
          <div className="form-login-group">
          <label for="exampleFormControlInput1" className="form-label">Username</label>
            <input type="text" className="form-control" id="email" placeholder="username" onChange={(e)=>{setUsername(e.currentTarget.value)}}/>
            <label for="password" className="form-label mt-4">password</label>
            <input type="password" className="form-control" id="password" placeholder=" password" onChange={(e)=>{setPassword(e.currentTarget.value)}}/>
            <div className='d-flex justify-content-end'>
            <button  className='btn login-btn mt-5' onClick={handleLogin}> log in</button>
            </div>
          </div>
      </div>
      <div style={{marginTop:"12%"}}>
      <Footer />
      </div>
       
    </div>
  )
}

export default LoginAll