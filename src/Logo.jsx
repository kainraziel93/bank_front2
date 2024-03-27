import React from 'react'
import logo from './assets/13948615-conception-de-vecteur-de-logo-icone-banque-vectoriel.jpg'
const Logo = () => {
  return (
    <div className="d-flex align-items-center gap-10">
    <img src={logo} alt="logo" style={{width:"90px"}} />
    <h2> bank</h2>
    </div>
  )
}

export default Logo