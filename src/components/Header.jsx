import React from 'react'
import Logo from '../Logo'
import { FaUnlockAlt } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useLocation, useNavigate } from 'react-router-dom';
const Header = () => {

  const location = useLocation()
  const navigate = useNavigate()
  return (
    <>
    <div className="header-login d-flex justify-content-end align-items-center">
      {(location.pathname==="/user/dashboard" || location.pathname==="/user/dashboard/transfert") && (<div className='me-5 d-flex align-items-center gap-5'>
        <span className='header-language' style={{fontSize:"12px"}}>English</span>
        <div className='header-language d-flex gap-2 justify-content-center align-items-center'>
          <FaUser className=' '/>
          <span className='  ' style={{fontSize:"12px"}}>HM TRADING GLOBAL PTE.LTD </span>
          <RiArrowDropDownLine className='fs-5'/>
        </div>
        <div className='position-relative'>
        <span className='header-language ff position-relative' style={{fontSize:"12px"}}><IoMdNotifications className='fs-5'/></span>
        <span className='position-absolute text-white px-1' style={{top:"0%",left:"60%",fontSize:"10px",background:"red"}}>3</span>
        </div>
        
      </div>)}
    </div>
    <div className='logo'>
    <div className="  d-flex justify-content-between align-items-center  py-0">
        <div className={!location.pathname.startsWith("/admin")?"visible":"invisible"}><Logo/></div>
        {(location.pathname !=="/" && !location.pathname.startsWith("/admin"))&&
          (
          <div className='d-flex header-menu gap-5'>
            <div className='position-relative'  onClick={()=>{navigate("/user/dashboard")}} style={{cursor:"pointer"}}>
              <h6>My Banking</h6>
              <h6 className='fw-light'>Account dashboard</h6>
              <div className='position-absolute' style={{border:"2px solid #f8002a",width: "100%",top:"68px"}}></div>
           </div>
            <div  style={{cursor:"pointer"}}>
              <h6>My Banking</h6>
              <h6 className='fw-light'>Account dashboard</h6>
           </div>
           <div  style={{cursor:"pointer"}}>
              <h6>My Banking</h6>
              <h6 className='fw-light' >Account dashboard</h6>
           </div>
            <div  style={{cursor:"pointer"}}>
              <h6>My Banking</h6>
              <h6 className='fw-light'>Account dashboard</h6>
           </div>
          </div>
          
          )
          
          
        }
        {location.pathname!=="/" &&(
          <div className='btn text-white d-flex  align-items-center py-2 gap-10' onClick={()=>{
            localStorage.setItem('role','')
            localStorage.setItem('firstname','')
            localStorage.setItem('lastname','')
            localStorage.setItem('email','')
            localStorage.setItem('balance','')
            localStorage.setItem('disponible','')
            localStorage.setItem('id','')
            localStorage.setItem('uuid','')
            navigate("/")
          }} style={{backgroundColor:"black",cursor:'pointer'}} > 
        <FaUnlockAlt/>
          <div>log out</div>
        </div>)
}
    </div>
    <div>
    
    </div>
    
    </div>
   { location.pathname==="/" &&
    (<div className='info-p'>
      <p>
      Beware of criminals using current world events to solicit donations for fraudulent organizations. If you are
        looking to support through a donation below are some simple steps you can take to safe guard your
        money: 
      </p>
      
        <ol>
          <li>Research the organization yourself – make sure it is legitimate, and doesn’t just sound like one you have heard of before.</li>
          <li>Be wary of requests to send cash, wire money or send gift cards.</li>
          <li>Avoid clicking on links or downloading attachments from unsolicited emails, texts or social media.</li>
          <li>Donate through secure websites that you have authenticated through trusted sources.</li>
          <li>Don’t give in to undue pressure – legitimate organizations understand you need to do your research and use proper payment methods.</li>
        
        </ol>
        <p>
        Protect your personal information and your finances by not falling for these scams.
        </p>
    </div>)}
    </>
  )
}

export default Header