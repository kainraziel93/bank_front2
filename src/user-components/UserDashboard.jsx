import React, { useEffect, useState } from 'react'
import { FaUnlockAlt } from "react-icons/fa";

import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../Logo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WirePdf from './WirePdf';
const UserDashboard = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [balance,setBalance]= useState('')
  const [disponible,setDisponible]=useState('')
  const [isVisible, setIsVisible] = useState(false);

  useEffect(()=>{
    if(localStorage.getItem('role')!=="CLIENT" && localStorage.getItem('role')!=="ADMIN"){
      localStorage.setItem('role',"")
      navigate('/')}

    const fetchtran =async ()=>{
      try {
        const reponse = await fetch(('http://localhost:8080/transaction/1'),{
          headers:{
            'Authorization': `Bearer ${localStorage.getItem('uuid')}`
          }
         })
         const a = await reponse.json()
         console.log("checkin if you have access to this ressource =>-----",a)
      } catch (error) {
        console.log("erreur=>",error)
      }
    
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
      <h6 className='text-white bg-dark ps-2 mb-0' style={{    fontsize: "1rem",padding: "13px"}}>MY ACCOUNTS</h6>
      
      <div className='account-user-wrapper container bg-white  ps-0'>
        <div className="row">
        <div className="col-4 ">
          <div className=" px-3 py-2 d-flex justify-content-between align-items-center py-2 text-white" style={{backgroundColor:"#6c757d"}}>
            <h6 style={{fontSize:"0.8em",fontWeight:"200"}}>GBP ACCOUNTS</h6> <h6 style={{minWidth:"100px" }}> <span  style={{fontWeight:"300",fontSize: "0.8em",marginRight: "7px"}}>GPB</span> <span style={{fontWeight:"300",fontSize:"13px"}}>771 480,92</span></h6>
          </div>
          
          <div className=" user-panel-element bg-white  d-flex justify-content-between align-items-center ">
            <h6 className='w-100'    style={{fontWeight:"500",fontSize: "0.8em",marginRight: "7px"}}>HM TRADING GLOBAL PTE.LTD Current Account <div style={{fontWeight:"300",fontSize: "0.6em",marginRight: "7px"}}>24E9DE19</div></h6>
            <h6 style={{fontSize:"12px",minWidth:"100px" }}>  <span  style={{fontWeight:"300",fontSize: "0.8em",marginRight: "7px"}}>GPB</span>{balance}</h6>
            
          </div>
          <div className=" user-panel-element  d-flex justify-content-between align-items-center ">
            <h6 className='w-50'     style={{fontWeight:"500",fontSize: "0.9em",marginRight: "7px"}}>HSBC Advance Current <div style={{fontWeight:"300",fontSize: "0.6em",marginRight: "7px"}}>24E9DE19</div></h6>
            <h6 style={{fontSize:"12px",minWidth:"100px" }}> <span  style={{fontWeight:"300",fontSize: "0.8em",marginRight: "7px"}}>GPB</span> 138,580.00</h6>
          </div>
          <div className=" user-panel-element d-flex justify-content-between align-items-center ">
          <h6 className='w-50' style={{fontWeight:"500",fontSize: "0.9em",marginRight: "7px"}} >Saving Account <div style={{fontWeight:"300",fontSize: "0.6em",marginRight: "7px"}}>24E9DE19</div></h6>
            <h6 style={{fontSize:"12px",minWidth:"100px" }}> <span  style={{fontWeight:"300",fontSize: "0.8em",marginRight: "7px"}}>GPB</span> 98,456.00 </h6>
          </div>
          <div className=" user-panel-element d-flex justify-content-between align-items-center ">
          <h6 className='w-50'   style={{fontWeight:"500",fontSize: "0.9em",marginRight: "7px"}}>HSBC ISA Account <div style={{fontWeight:"300",fontSize: "0.6em",marginRight: "7px"}}>24E9DE19</div></h6>
            <h6 style={{fontSize:"12px",minWidth:"100px" }}> <span  style={{fontWeight:"300",fontSize: "0.8em",marginRight: "7px"}}>GPB</span> 18,754.00 </h6>
          </div>
          <div className=" user-panel-element d-flex justify-content-between align-items-center bg-dark" style={{height:""}}>
          
          </div>
        </div>
        <div className="col-8">
        <div className="row bg-white mt-4">
          <div className="col-9 ">
            <h4 className='w-100' style={{    fonSize: "1.4em",margin:" 0 0 7px",letterSpacing: "0.5px",color:"#666666"}}>HM TRADING GLOBAL PTE.LTD Current Account</h4>

          </div>
          <div className="col-3  " style={{marginLeft:"-18px"}}>
              <div className="d-flex justify-content-between align-items-center">
                  <h4 className='fw-light' style={{fontSize: "13px",fontWeight: "200",marginRight: '13px',color:"#666666"}}>balance</h4>
                  <h5 className='' style={{    fonSize: "1.4em",margin:" 0 0 0",letterSpacing: "0.5px",color:"#666666"}}> {balance}</h5>
                 </div>
          </div>
       
        <div className=" row mt-1 bg-white ">
          <div className="col-9">
              <h6 className='' style={{fontSize: "13px",fontWeight: "200",marginRight: '13px',color:"#666666"}}>24E9DE19| Current account | EUR</h6>
          </div>
          <div className="col-3">
              <div className="d-flex justify-content-between align-items-center">
                  <h5 className='' style={{fontSize: "13px",fontWeight: "200",marginRight: '13px',color:"#666666"}}>Funds available</h5>
                  <h6 className='' style={{fontSize: "13px",fontWeight: "200",marginRight: '0px',color:"#666666"}}>{disponible}</h6>
                 </div>
          </div>
        </div>
        <div className="row  mt-1 bg-white ">
          <div className="col-9">
              <h6 className='fw-light' style={{color:"#c5c5c5",fontSize: "13px",fontWeight: "200",marginRight: '0px'}}>Last updated: 27 Mar 2024</h6>
          </div>
          <div className="col-3">
              <div className="d-flex justify-content-between align-items-center">
                  <h5 className='' style={{fontSize: "13px",fontWeight: "200",marginRight: '13px',color:"#666666"}}>Overdraft</h5>
                  <h6 style={{fontSize: "13px",fontWeight: "200",marginRight: '0px',color:"#666666"}}> 0.00</h6>
                 </div>
          </div>
        </div>
      </div>
      <div className='container ps-0 bg-white pb-4'>
       
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