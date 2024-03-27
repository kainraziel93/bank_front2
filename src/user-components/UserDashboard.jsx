import React from 'react'
import { FaUnlockAlt } from "react-icons/fa";

import { Link, Outlet } from 'react-router-dom';
import Logo from '../Logo';
import Header from '../components/Header';
const UserDashboard = () => {

  return (
    <div className="page-wrapper">
    <Header/>
    <div className="container  mt-5">
      <div className='user-account-wrapper '>
      <h5 className='text-white bg-dark ps-2 py-3 mb-0'>MY ACCOUNTS</h5>
      <div className='account-user-wrapper container bg-white '>
        <div className="row bg-white ">
          <div className="col-9">
              <h3>HM TRADING GLOBAL PTE.LTD Current Account</h3>
          </div>
          <div className="col-3">
              <div className="d-flex justify-content-between align-items-center">
                  <h5 className='fw-light'>balance</h5>
                  <h3> 521 649,92</h3>
                 </div>
          </div>
        </div>
        <div className="row bg-white ">
          <div className="col-9">
              <h6 className='fw-light'>24E9DE19| Current account | EUR</h6>
          </div>
          <div className="col-3">
              <div className="d-flex justify-content-between align-items-center">
                  <h5 className='fw-light'>Funds available</h5>
                  <h6> 521 649,92</h6>
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
      
      </div>

      <div className='container bg-white pb-4'>
       
          <div>
            <Outlet/>
          </div>
      </div>
      
    </div>

    </div>
  )
}

export default UserDashboard