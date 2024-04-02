import React, { useEffect, useRef, useState } from 'react'
import logo from '../assets/logo2.jpg'
import digit from '../assets/digit.png'
import spritOn from '../assets/sprite-on.png'
import spiritCheck from '../assets/sprite-check.png'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from "react-datepicker";
import api from '../components/api.js'
const UserWireTransfert = () => {
  const [accountNumber,setAccountNumber] = useState('');
  const [iban,setIban] = useState('')
  const [swift,setSwift] = useState('')
  const [reference,setReference] = useState('')
  const [beneficiary,setBeneficiary] = useState('')
  const [beneficiaryBank,setBeneficiaryBank] = useState('')
  const [amount,setAmount] = useState('')
  const [date,setDate] = useState('')
  const [digits,setDigits] = useState('')
  const uuid =localStorage.getItem('uuid')
  const clientId = localStorage.getItem("id")
const [transactionId,setTransactionId] = useState('')
  const formValue ={
        accountNumber,
        iban,
        swift,
        reference, 
        beneficiary,      
        beneficiaryBank,
        amount,
        date,
        
  }
  const  addClientTransaction= async()=>{
    try {
      
    
       const response = await fetch(`${api}client_transaction/${clientId}`, {
           method: 'POST',
           headers: {
               'Content-Type':'application/json' ,
               'Authorization':`Bearer ${uuid}`
             },
           body: JSON.stringify(formValue)
         });
         const res = await response.json()
         setTransactionId(res.id)
       console.log("hadi response f sucess =>",transactionId)
     

   } catch (error) {
       console.log("errr =>"+error)
   }
 
  }
 const verifyDigits = async ()=>{
  try {
    const response = await fetch(`${api}client_transaction/verify/${digits}?id=${transactionId}`, {
        headers: {
            'Content-Type':'application/json' ,
            'Authorization':`Bearer ${uuid}`
          },
      });
      const res = await response.json()
    console.log("hadi response f sucess =>",res)

} 
catch (error) {
console.log("errr =>"+error)
}

 }
  return (
    <div className='pt-5  user-wire-wrapper'>
        <div className="d-flex align-items-center gap-100">
            <h5 className='pt-3 fw-light' style={{fontSize:"12px",fontWeight:"300",color:"#666666"}}> WIRE FREE </h5>
            <div class="form-check ps-5 ms-4">
  <input className="form-check-input ms-3" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
  <label className="form-check-label ms-2" for="flexRadioDefault1" style={{fontSize:"12px",fontWeight:"300",color:"300"}}>
     
  </label>
</div>
<div class="form-check">
  <input className="form-check-input" type="radio"  name="flexRadioDefault" id="flexRadioDefault2" disabled/>
  <label className="form-check-label ms-2" for="flexRadioDefault2"   style={{fontSize:"12px",fontWeight:"300",color:"300"}}>
    Benefecary
  </label>
</div>
        </div>
        <div className="d-flex align-items-center  justify-content-between  mt-2 gap-100">
            <h6 className='pt-3 fw-light' style={{fontSize:"12px",fontWeight:"300",color:"#666666"}} > BENIFICIARY </h6>
            <input type="text" onChange={(e)=>setBeneficiary(e.currentTarget.value)}  class="form-control" id="beneficiary" required placeholder=""/>
        </div>
        <div className="d-flex align-items-center mt-2   gap-100">
            <h6 className='pt-3 fw-light '   style={{fontSize:"12px",fontWeight:"300",color:"300"}} > ACCOUNT NUMBER </h6>
            <input type="text"   onChange={(e)=>setAccountNumber( e.currentTarget.value)}    class="form-control" required id="accountNumber" placeholder=""/>
            
        </div>
        <div className="d-flex align-items-center mt-2   gap-100">
        <h6 className='pt-3 fw-light' style={{fontSize:"12px",fontWeight:"300",color:"300"}}> IBAN </h6>
            <input type="text"   onChange={(e)=> setIban(e.currentTarget.value)}class="form-control" id="ibna" required placeholder=""/>
        </div>
        <div className="d-flex align-items-center mt-2 justify-content-between gap-100">
            <h6 className='pt-3 fw-light'   style={{fontSize:"12px",fontWeight:"300",color:"#666666"}}> SWIFT </h6>
            <input type="text"  onChange={(e)=> setSwift( e.currentTarget.value)}    class="form-control" required id="swift" placeholder=""/>
        </div>
        <div className="d-flex align-items-center mt-2  gap-100">
            <h6 className='pt-3 fw-light' style={{fontSize:"12px",fontWeight:"300",color:"#666666"}}> REFERENCE </h6>
            <input type="text"  onChange={(e)=> setReference(e.currentTarget.value)}    class="form-control"  required id="reference" placeholder=""/>
        </div>
        <div className="d-flex align-items-center mt-2  gap-100">
            <h6 className='pt-3 fw-light' style={{fontSize:"12px",fontWeight:"300",color:"#666666"}}> BENEFICIARY BANK </h6>
            <input type="text"  onChange={(e)=>setBeneficiaryBank( e.currentTarget.value)} required   class="form-control" id="beneficiaryBank" placeholder=""/>
        </div>
        <div className="d-flex align-items-center  mt-2 gap-100">
            <h6 className='pt-3 fw-light'   style={{fontSize:"12px",fontWeight:"300",color:"#666666"}}> Amount </h6>
            <input type="text"  onChange={(e)=> setAmount( e.currentTarget.value)}  required  class="form-control" id="amount" placeholder=""/>
        </div>
        <div className="d-flex align-items-center  mt-2 gap-100">
            <h6 className='pt-3 fw-light'   style={{fontSize:"12px",fontWeight:"300",color:"#666666"}}> VALUE DATE </h6>
            <DatePicker minDate={new Date()} required style={{minWidth:"400px"}}  selected={date} onChange={(e)=> setDate(e)}/>
            
        </div>
        <div className="d-flex justify-content-end pe-0">
        <button  className='btn btn-danger rounded-0 text-decoration-none mt-2'  data-bs-target="#exampleModal" onClick={()=>addClientTransaction()} data-bs-toggle="modal"> Continue</button>
        </div>


<div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog " style={{maxWidth:"40%"}}>
    <div class="modal-content">
      <div class="modal-header d-flex justify-content-center">
        <img src ={logo} style={{maxWidth:"150px"}} className="modal-title" id="exampleModalLabel">
            
        </img>
       
      </div>
      <div class="modal-body">
        <h3 className='text-center me-5'>HSBC Security key for a wire transfer</h3>
        <h5 className='mt-5'>For security purposes and to help protect against fraud, you'll need to generate a 6 digit authorisation code by following the steps below</h5>
        <div className="row px-2 py-4" style={{backgroundColor:"lightgray"}}>
          <div className="col-2">
            <img src={digit} style={{width:"100px"}} alt="" srcset="" />
          </div>
          <div className="col-8">
            <ol className='mt-2 ms-1 ps-0'>
              <li>
                <span className='fw-lighter '>Press the GREEN button  in the <img src={spritOn} style={{width:"30px"}}></img>  </span>  <span className='fw-lighter'>bottom right corner until the screen turns on.</span>
              </li>
              <li className='mt-2'>
              <span className='fw-lighter '> Enter your pin</span>
              </li>
              <li className='mt-2'>
              <span className='fw-lighter '>Press the YELLOW button<img src={spiritCheck} style={{width:"30px"}}></img> in the bottom left corner.</span>
              </li>
              <li className='mt-2'>
              <span className='fw-lighter '>Enter the 6 digit authorisation code below</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div class="modal-footer justify-content-between  align-items-center">
       
            <h5 className='me-5' style={{fontSize: "0.9em",color: "#000000",fontWeight: "400"}}>
            6 digit authorisation code
            </h5>
            <input type="text"  className="mt-2" style={{minWidth:"320px"}} value={digits} onChange={(e)=>{setDigits(e.currentTarget.value)}}eholder='6 digit' />
      </div>
      <div className='d-flex gap-1 justify-content-end  py-3'>
       
       <button type="button" class="btn btn-danger rounded-0 d-flex flex-row justify-content-center align-items-center ms-auto me-3" onClick={verifyDigits}>Confirm</button>
       </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default UserWireTransfert