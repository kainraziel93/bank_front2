import React from 'react'
import Logo from '../Logo'
import { FaUnlockAlt } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useLocation, useNavigate } from 'react-router-dom';
const Header = ({name}) => {

  const location = useLocation()
  const navigate = useNavigate()
  return (
    <>
    <div className="header-login d-flex justify-content-end align-items-center">
      {(location.pathname==="/user/dashboard" || location.pathname==="/user/dashboard/transfert") && (<div className=' container  '>
        <div className='me-2 d-flex  justify-content-end align-items-center gap-3'>
        <span className='header-language' style={{fontSize:"12px"}}>English</span>
        <div className='header-language d-flex gap-2 justify-content-center align-items-center'>
          <FaUser className=' '/>
          <span className='  ' style={{fontSize:"12px"}}>{name}</span>
          <RiArrowDropDownLine className='fs-5'/>
        </div>
        <div className='position-relative'>
        <span className='header-language ff position-relative' style={{fontSize:"12px"}}><IoMdNotifications className='fs-5'/></span>
        <span className='position-absolute text-white px-1' style={{top:"0%",left:"60%",fontSize:"10px",background:"red"}}>3</span>
        </div>
        </div>
       
        
      </div>)}
    </div>
    <div className='logo' style={{marginLeft:"-400px"}}>
    <div className="  d-flex justify-content-between align-items-center container py-0">
        <div onClick={()=>{navigate('/user/dashboard')}} style={{cursor:"pointer"}} className={!location.pathname.startsWith("/admin")?"visible":"invisible"}><Logo  /></div>
        {(location.pathname !=="/" && !location.pathname.startsWith("/admin"))&&
          (
          <div className='d-flex header-menu gap-4'>
            <div className='position-relative'  onClick={()=>{navigate("/user/dashboard")}} style={{cursor:"pointer"}}>
              <h6 style={{fontSize:"17px"}}>My Banking</h6>
              <h6 style={{fontSize:"12px"}}  className='fw-light  sub-title'>Account dashboard</h6>

              <div className='position-absolute' style={{border:"2px solid #f8002a",width: "90%",top:"70px"}}></div>
           </div>
            <div  style={{cursor:"pointer"}}>
              <h6 style={{fontSize:"17px"}}> My Portfolio</h6>
              <h6 style={{fontSize:"12px"}} className='fw-light sub-title'>Stocks & shares</h6>
           </div>
           <div  style={{cursor:"pointer"}}>
              <h6 style={{fontSize:"17px"}}>My Rewards & Offers</h6>
              <h6 style={{fontSize:"12px"}} className='fw-light sub-title' >Get more from HSBC</h6>
           </div>
            <div  style={{cursor:"pointer"}}>
              <h6 style={{fontSize:"17px"}}>Products & Services</h6>
              <h6 style={{fontSize:"12px"}} className='fw-light sub-title'>Bank, Borrow, Invest, Protect</h6>
           </div> 
           <div  style={{cursor:"pointer"}}>
              <h6 style={{fontSize:"17px"}}>Contact Us</h6>
              <h6 style={{fontSize:"12px"}} className='fw-light sub-title'>Help & Support</h6>
           </div>
          </div>
          
          )
          
          
        }
        {location.pathname!=="/" &&(
          <div className='btn text-white d-flex  align-items-center py-2 gap-10'  onClick={()=>{
            localStorage.setItem('role','')
            localStorage.setItem('firstname','')
            localStorage.setItem('lastname','')
            localStorage.setItem('email','')
            localStorage.setItem('balance','')
            localStorage.setItem('disponible','')
            localStorage.setItem('id','')
            localStorage.setItem('uuid','')
            navigate("/")
          }} style={{backgroundColor:"black",cursor:'pointer',marginRight:"-195px"}} > 
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