import React, { useEffect, useRef, useState } from 'react'
import logo from '../assets/logo2.jpg'
import digit from '../assets/digit.png'
import spritOn from '../assets/sprite-on.png'
import spiritCheck from '../assets/sprite-check.png'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from "react-datepicker";
import api from '../components/api.js'
import { useNavigate } from 'react-router-dom'
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
  const [isLoading,setIsLoading] = useState(false)
  const buttonRef = useRef(null)
const [transactionId,setTransactionId] = useState('')

const navigate = useNavigate()
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
         console.log('hadi brute response =>',res)
         console.log('hada new balance =>',res.newBalance)
          localStorage.setItem('balance',res.newBalance)
         setTransactionId(res.id)
       console.log("hadi response f sucess =>",transactionId)
     

   } catch (error) {
       console.log("errr =>"+error)
   }
 
  }
 const verifyDigits = async ()=>{
  try {
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 5000));
    const response = await fetch(`${api}client_transaction/verify/${digits}?id=${transactionId}`, {
        headers: {
            'Content-Type':'application/json' ,
            'Authorization':`Bearer ${uuid}`
          },
      });

      const res = await response.json()
    console.log("hadi response f sucess =>",res)
    if(response.status ===200){
      buttonRef.current.click()
      navigate('/user/dashboard')
    }

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
              
  <input className="form-check-input ms-4" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
  <label className="form-check-label ms-2 fw-light" for="flexRadioDefault1" style={{fontSize:"14px",fontWeight:"300",color:"300"}}>
      OUR
  </label>
</div>
<div class="form-check ms-4">
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
        <div className="d-flex" style={{gap:"33px"}}>
        <div className="d-flex align-items-center mt-2   "style={{gap:"30px"}}>
            <h6 className='pt-3 fw-light '   style={{fontSize:"12px",fontWeight:"300",color:"300"}} > ACCOUNT NUMBER </h6>
            <input type="text"   onChange={(e)=>setAccountNumber( e.currentTarget.value)}   style={{width:"95%"}} class="form-control" required id="accountNumber" placeholder=""/>
            
        </div>
        <div className="d-flex align-items-center mt-2   gap-100">
        <h6 className='pt-3 fw-light' style={{fontSize:"12px",fontWeight:"300",color:"300",width:"142px"}}> IBAN </h6>
            <input type="text"   onChange={(e)=> setIban(e.currentTarget.value)}class="form-control" id="ibna" required placeholder=""/>
        </div>
        </div>
    
        <div className="d-flex align-items-center mt-2 justify-content-between gap-100">
            <h6 className='pt-3 fw-light'   style={{fontSize:"12px",fontWeight:"300",color:"#666666"}}> SWIFT </h6>
            <input type="text"  onChange={(e)=> setSwift( e.currentTarget.value)}    class="form-control" required id="swift" placeholder=""/>
        </div>
        <div className="d-flex align-items-center mt-2  gap-100">
            <h6 className='pt-3 fw-light' style={{fontSize:"12px",fontWeight:"300",color:"#666666"}} > REFERENCE </h6>
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
            <DatePicker
             minDate={new Date()}
              required style={{minWidth:"400px"}}  
              selected={date} onChange={(e)=> setDate(e)}/>
            
        </div>
        <div className="d-flex justify-content-end pe-0">
        <button  className='btn btn-danger rounded-0 text-decoration-none mt-2 '  data-bs-target="#staticBackdrop" onClick={()=>addClientTransaction()} data-bs-toggle="modal"> Continue</button>
        </div>


<div class="modal fade  absolute"  id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" style={{top:"10%"}}>
  <div class="modal-dialog " style={{maxWidth:"30%"}}>
    <div class="modal-content">
      <div class="modal-header d-flex justify-content-center" style={{border:"0px"}}>
        <img src ={logo} style={{maxWidth:"150px"}} className="modal-title" id="exampleModalLabel">
            
        </img>
       
      </div>
      <div class="modal-body">
        <h3 className='modal-header-top me-5'>HSBC Security key for a wire transfer</h3>
        <p className='mt-3 modal-header-p'>For security purposes and to help protect against fraud, you'll need to generate a 6 digit authorisation code by following the steps below</p>
        <div className="row px-2 py-4" style={{backgroundColor:"#e9ecef"}}>
          <div className="col-2 mt-3 ">
            <img src={digit} style={{width:"113px"}} alt="" srcset="" />
          </div>
          <div className="col-8">
            <ol className='mt-2 ms-5 ps-0' style={{color:"#666666"}}>
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
            <input type="text"  className="mt-2" style={{minWidth:"320px"}}  value={digits} onChange={(e)=>{setDigits(e.currentTarget.value)}}eholder='6 digit' />
      </div>
      <div className='d-flex gap-1 justify-content-end  py-3'>
      <span type="button "  ref={buttonRef} class="btn btn-secondary d-none" data-bs-dismiss="modal"></span>
       <button type="button" class="btn postion-relative btn-danger rounded-0 d-flex flex-row justify-content-center align-items-center ms-auto me-3" onClick={verifyDigits}>
       {isLoading && <span className='spinner-border ' style={{fontSize:"22px",marginRight:"10px",scale:"0.9"}} ></span>}
        Confirm</button>
         
       </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default UserWireTransfert