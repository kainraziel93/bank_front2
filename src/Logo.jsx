import React from 'react'
import logo from './assets/logo2.jpg'
const Logo = () => {
  return (
    <div className="d-flex align-items-center gap-10">
    <img src={logo} alt="logo" style={{width:"140px" ,paddingTop:"30px",paddingBottom:"30px",marginLeft:"204px"}} />
    </div>
  )
}

export default Logo