import React from 'react'
import { FaDownload } from "react-icons/fa";
import { FaPrint } from "react-icons/fa";
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../components/api.js'

const UserListTransfers = () => {

    const uuid = localStorage.getItem('uuid')
    const clientId = localStorage.getItem('id')
    const [verifiedTransactions,setVerifiedTransactions]= useState([])
    const [isVisible,setIsVisible] = useState(true)

    useEffect(()=>{
        setIsVisible(true)
        userTransactions()
     
    },[])

    const userTransactions = async ()=>{
      try {
        const response = await fetch(`${api}client_transaction/${clientId}/verified`, {
            headers: {
                'Content-Type':'application/json' ,
                'Authorization':`Bearer ${uuid}`
              },
          });
          const res = await response.json()
        console.log("hadi response f sucess =>",res)
          setVerifiedTransactions(res)
    } 
    catch (error) {
    console.log("errr =>"+error)
    }
    }
   
  return (
    <div>
          { isVisible && (<Link  className='btn login-btn mt-5' onClick={()=>{

                setIsVisible(false)
                }} to="transfert"> Wire Transfer</Link>)
                }
                <div className="table-responsive">
         <table className="table table-striped  mt-3 mb-0" style={{backgroundColor:"light-gray"}}>
                <thead className='table-dark'>
                  <tr>
                    <th>Date</th> <th>Description</th> <th>status</th> <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {verifiedTransactions.map((item,key)=>{
                    
                    return <tr key={key}>
                        <td>{item.date}</td><td>{item.reference}</td><td>confirmed</td><td>{item.amount}</td>
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
    </div>
  )
}

export default UserListTransfers