import React from 'react'
import { FaDownload } from "react-icons/fa";
import { FaPrint } from "react-icons/fa";
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
const UserListTransfers = () => {
    const [isVisible,setIsVisible] = useState(true)
    useEffect(()=>{
        setIsVisible(true)
    },[])
    const accountMock = [{
        date : "27 mar 2024",description:"pujata trade pte",status:"pending",amount:"+681"
      },{
        date : "30 mar 2024",description:"Compliance Fees",status:"confirmed",amount:"-702,00"
      },{
         date : " 2 feb 2024",description:"TRAVALA",status:"confirmed",amount:"-8700,0000"}
        ,{ date : "25 fb 2024",description:"DRUGSTORE PARIS",status:"confirmed",amount:"+681"},{
          date : "27 mar 2024",description:"pujata trade pte",status:"pending",amount:"+681"
        },{
          date : "30 mar 2024",description:"Compliance Fees",status:"confirmed",amount:"-702,00"
        },{
           date : " 2 feb 2024",description:"TRAVALA",status:"confirmed",amount:"-8700,0000"}
          ,{ date : "25 fb 2024",description:"DRUGSTORE PARIS",status:"confirmed",amount:"+681"}]
  return (
    <div>
          { isVisible && (<Link  className='btn login-btn mt-5' onClick={()=>{

                setIsVisible(false)
                }} to="transfert"> Wire Transfer</Link>)
                }
         <table className="table table-striped mt-3 mb-0" style={{backgroundColor:"light-gray"}}>
                <thead className='table-dark'>
                  <tr>
                    <th>Date</th> <th>Description</th> <th>status</th> <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {accountMock.map((item,key)=>{
                    
                    return <tr key={key}>
                        <td>{item.date}</td><td>{item.description}</td><td>{item.status}</td><td>{item.amount}</td>
                    </tr>
                  })}
                </tbody>
            </table>
            <div className='mt-0 d-flex justify-content-between align-items-center bg-dark text-white py-2'> 
              <div className='d-flex align-items-center'>
                <span className='pe-2 ps-2'>download</span> <FaDownload className='mb-1 ' style={{cursor:"pointer"}}/>
                <span className='pe-2 ps-4'>print</span> <FaPrint className='mb-1 mt-1 ' style={{cursor:"pointer"}}/>
              </div>
              <span>page 1/1</span>
                  
            </div>
    </div>
  )
}

export default UserListTransfers