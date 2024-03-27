import React from 'react'
import Logo from '../Logo'
import { FaUnlockAlt } from "react-icons/fa";
const Header = () => {
  return (
    <>
    <div className="header-login">

    </div>
    <div className='logo'>
    <div className=" container d-flex justify-content-between align-items-center  py-4">
       <Logo/>
        
        <div className='btn text-white d-flex  align-items-center py-2 gap-10' style={{backgroundColor:"black"}} > 
        <FaUnlockAlt/>
          <div>log out</div>
        </div>

    </div>
    </div>
    </>
  )
}

export default Header