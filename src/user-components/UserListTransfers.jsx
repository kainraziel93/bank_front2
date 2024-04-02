import React from 'react'
import { FaDownload } from "react-icons/fa";
import { FaPrint } from "react-icons/fa";
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../components/api.js'
import { IoMdAttach } from "react-icons/io";
import PdfConverter from './PdfConverter.jsx';
import WirePdf from './WirePdf.jsx';

const UserListTransfers = () => {
  const [element,setElement] = useState({})

    const uuid = localStorage.getItem('uuid')
    const clientId = localStorage.getItem('id')
    const [verifiedTransactions,setVerifiedTransactions]= useState([])
    const [isVisible,setIsVisible] = useState(true)


    useEffect(()=>{
        setIsVisible(true)
        userTransactions()
     
    },[])
    function formatDate(date) {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const day = date.getDate();
      const monthIndex = date.getMonth();
      const year = date.getFullYear();
      return `${day} ${months[monthIndex]} ${year}`;
    }
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
    <div className='postion-relative'>
         <div>
          { isVisible && (<Link  className='btn btn-danger rounded-0 text-decoration-none  mt-5'  onClick={()=>{

                setIsVisible(false)
                }} to="transfert"> Wire Transfer</Link>)
                }
                <div className="table-responsive">
         <table className="table   mt-3 mb-0" style={{backgroundColor:"light-gray"}}>
                <thead className='table ' style={{backgroundColor:"#e9ecef",fontSize:"13px",padding: "5px 13px"}}>
                  <tr >
                    <th style={{fontWeight:"500"}}>Date</th> <th style={{fontWeight:"500"}}>Description</th> <th style={{fontWeight:"500"}}>status</th> <th style={{fontWeight:"500"}}>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {verifiedTransactions.map((item,key)=>{
                    
                    return <tr key={key} >
                        <td className='pt-3' style={{fontSize:"13px",color:"#666666"}}>{ formatDate(new Date(item.date))}</td>
                      <td className="">
                          <div className="d-flex align-items-center gap-1"style={{fontSize:"13px",color:"#666666"}}>
                              <span>{item.reference}</span>     
                              <div onClick={()=>{setElement(item)}}>
                              <PdfConverter   downloadFileName={`${item.reference} ${formatDate(new Date(item.date))}`}
                                  rootElementId="testId"     />
                              </div>
                              
                                  
                          
                               <FaDownload style={{cursor:'pointer'}}/>
                          </div>
                          <div style={{fontSize:"13px",color:"#c5c5c5"}}>
                            WIRE
                          </div>
                          
                          </td>
                        <td  className='pt-3' style={{fontSize:"13px",color:"#c5c5c5"}}>confirmed</td>
                        <td className='d-flex flex-column align-items-center '>
                        <div className='fw-light 'style={{fontSize:"13px",color:"#666666"}}> { item.amount <0? <span>-{item.amount}</span>:<span>+{item.amount}</span> } </div>
                          <div style={{fontSize:"13px",color:"#c5c5c5"}}>-{item.balance}</div>
                          </td>
                    </tr>
                  })}
                </tbody>
            </table>
            <div className='mt-0 d-flex justify-content-between align-items-center  text-dark py-2 ' style={{backgroundColor:"#e9ecef",fontSize:"13px",padding: "5px 13px"}}>  
              <div className='d-flex align-items-center'>
                <span className='pe-2 ps-0'>download</span> <FaDownload className='mb-1 ' style={{cursor:"pointer"}}/>
                <span className='pe-2 ps-4'>print</span> <FaPrint className='mb-1 mt-1 ' style={{cursor:"pointer"}}/>
              </div>
              <span>page 1/1</span>
                  <div>
                  
        
                
                  </div>
            </div>
    </div>
             
    </div>
      <div id="testId"  className='d-none pdf-wrapper' > 
                    <WirePdf element={element}/>
                </div>
    </div>
   
  )
}

export default UserListTransfers