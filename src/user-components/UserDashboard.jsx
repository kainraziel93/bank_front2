import React, { useEffect, useState } from 'react'
import { FaUnlockAlt } from "react-icons/fa";

import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../Logo';
import Header from '../components/Header';
import Footer from '../components/Footer';
const UserDashboard = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [balance,setBalance]= useState('')
  const [disponible,setDisponible]=useState('')

  useEffect(()=>{
    if(localStorage.getItem('role')!=="CLIENT" && localStorage.getItem('role')!=="ADMIN"){
      localStorage.setItem('role',"")
      navigate('/')}

    const fetchtran =async ()=>{
       const reponse = await fetch(('http://localhost:8080/transaction/1'),{
        headers:{
          'Authorization': `Bearer ${localStorage.getItem('uuid')}`
        }
       })
       const a = await reponse.json()
       console.log("checkin if you have access to this ressource =>-----",a)
    }
    fetchtran()
    setBalance(localStorage.getItem('balance'))
    setDisponible(localStorage.getItem('disponible'))
    
  },[])
  return (
    <div>
    <div className="page-wrapper "style={{height:location.pathname==="/user/dashboard"?"100vh":""}}>
    <Header/>
    <div className="container   mt-5">
      <div className='user-account-wrapper  '>
      <h5 className='text-white bg-dark ps-2 py-3 mb-0'>MY ACCOUNTS</h5>
      
      <div className='account-user-wrapper container bg-white  ps-0'>
        <div className="row">
        <div className="col-4 ">
          <div className=" px-3 py-2 d-flex justify-content-between align-items-center py-2 text-white" style={{backgroundColor:"#6c757d"}}>
            <h6>EUR ACCOUNTS</h6> <h6>eur 771 480,92</h6>
          </div>
          <div className="user-panel-element d-flex justify-content-between align-items-center  bg-white ">
            <h6 className='w-75'>HM TRADING GLOBAL PTE.LTD Current Account24E9DE19</h6>
            <h6 style={{fontSize:"12px"}}>EUR 641 322</h6>
          </div>
          <div className=" user-panel-element  d-flex justify-content-between align-items-center ">
            <h6 className='w-75'>HM TRADING GLOBAL PTE.LTD Current Account24E9DE19</h6>
            <h6 style={{fontSize:"12px"}}>EUR 897 452.02</h6>
          </div>
          <div className=" user-panel-element d-flex justify-content-between align-items-center ">
          <h6 className='w-75'>Saving Accoun</h6>
            <h6 style={{fontSize:"12px"}}>EUR 641 322</h6>
          </div>
          <div className=" user-panel-element d-flex justify-content-between align-items-center ">
          <h6 className='w-75'>HSBC ISA Account</h6>
            <h6 style={{fontSize:"12px"}}>EUR 641 322</h6>
          </div>
          <div className=" user-panel-element d-flex justify-content-between align-items-center bg-dark" style={{height:""}}>
          
          </div>
        </div>
        <div className="col-8">
        <div className="row bg-white mt-4">
          <div className="col-9 ">
              <h4>HM TRADING GLOBAL PTE.LTD Current Account</h4>

          </div>
          <div className="col-3  " style={{marginLeft:"-15px"}}>
              <div className="d-flex justify-content-between align-items-center">
                  <h4 className='fw-light'>balance</h4>
                  <h5 className=''> {balance}</h5>
                 </div>
          </div>
       
        <div className="row bg-white ">
          <div className="col-9">
              <h6 className='fw-light'>24E9DE19| Current account | EUR</h6>
          </div>
          <div className="col-3">
              <div className="d-flex justify-content-between align-items-center">
                  <h5 className='fw-light' style={{fontSize:"17px"}}>Funds available</h5>
                  <h6 className='' style={{fontSize:"14px"}}>{disponible}</h6>
                 </div>
          </div>
        </div>
        <div className="row bg-white ">
          <div className="col-9">
              <h6 className='fw-light'>Last updated: 27 Mar 2024</h6>
          </div>
          <div className="col-3">
              <div className="d-flex justify-content-between align-items-center">
                  <h5 className='fw-light'>Overdraft</h5>
                  <h6> 0.00</h6>
                 </div>
          </div>
        </div>
      </div>
      <div className='container bg-white pb-4'>
       
       <div>
         <Outlet/>
       </div>
       
   </div>

        </div>
     
      </div>
      </div>
      </div>

     
      
    </div>

    </div>
    <div className=''>
    <Footer/>
    </div>
    </div>
  )
}

export default UserDashboard