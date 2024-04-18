import React, { useEffect, useState } from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaLock } from "react-icons/fa";
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
  const [errorMessage,setErrorMessage]= useState(false)
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
  setErrorMessage(false)
   
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
          if(response.status !==200){
            setErrorMessage(true)
          }
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
        console.log("errreur =>"+error)
    }

   
  }
  return (
    <div className='page-wrapper-22 '>
      <Header/>

 
      <div className='d-flex justify-content-center'>
      <div id="carouselExampleControls" className="carousel slide login-container " data-bs-ride="carousel" data-bs-touch="false" data-bs-interval="false" style={{width:"500px",backgroundColor:"white"}}>
          <div class="carousel-inner p-4">
          <h1 className=' pt-0'>Log on </h1>
            <div class="carousel-item active">
            {errorMessage && ( <div className='p-4 ' style={{backgroundColor:"#f8d7da",color:"#842029"}}>'Invalid username or password.'</div>)}
          <div className="form-login-group">
          
          <label for="exampleFormControlInput1"  style={{color:"#666666",fontSize:"1rem",fontWeight:"300" }} className="form-label"> Enter your Username</label>
            <input type="text" className="form-control" id="email" onChange={(e)=>{setUsername(e.currentTarget.value)}}/>
          </div>
          <div className='pt-2 ' style={{fontSize:"1rem",fontWeight:'100'}}>
           <a href='#' className='carrousel-username' >Forgot username ?</a>
          </div>
          <div className='d-flex justify-content-end'>
            <button  className='btn login-btn '  data-bs-target="#carouselExampleControls" data-bs-slide="next"  style={{marginTop:"80px"}}> Continue</button>
            </div>
            </div>
            <div class="carousel-item">
            <div className="form-login-group">
          <label for="exampleFormControlInput1"  style={{color:"#666666",fontSize:"1rem",fontWeight:"300" }} className="form-label"> Enter your password</label>
          <input type="password" className="form-control" id="password"  onChange={(e)=>{setPassword(e.currentTarget.value)}}/>
          </div>
          <div className='pt-2 ' style={{fontSize:"1rem",fontWeight:'100'}}>
            <div className="d-flex align-items-center gap-2">  <input type="checkbox" style={{width:"25px",height:"25px", color:"#dddddd"}} />
             <span>Remember me</span>
             </div>
         
          </div>
          <div className='d-flex justify-content-end'>
            <button  className='btn login-btn ' onClick={handleLogin}  data-bs-target="#carouselExampleControls" data-bs-slide="next" style={{marginTop:"80px"}}> Log On</button>
            </div>
            </div>
          </div>
          <div style={{border:"0.5px #d7d7d7 solid",opacity:"0.5"}}></div>
          <div className=' ms-4 d-flex py-3 gap-2'>
          <FaLock style={{color:"#666666"}}/>
            <h6 className='' style={{fontWeight:"200",color:"#666666"}}>Secured by SSL</h6>
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