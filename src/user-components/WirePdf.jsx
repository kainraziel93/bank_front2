import React, { useEffect } from 'react'
import logo from '../assets/logo2.jpg'
import './WirePdf.css'
const WirePdf = ({element}) => {

    useEffect(()=>{
        console.log("hada =>",element.date)
    },[element])
    const generatechips=()=> {
        // Generate three random numbers between 100000 and 999999
        const num1 = Math.floor(Math.random() * 900000) + 100000;
        const num2 = Math.floor(Math.random() * 900000) + 100000;
        const num3 = Math.floor(Math.random() * 900000) + 100000;
    
        // Construct the formatted string
        const randomString = `${num1}/${num2}/${num3}`;
    
        return randomString;
    }
  return (
    <div className='ms-4 mt-1  pdf-container'>
    <div className='ms-2'> <img src={logo} style={{maxWidth:"150px"}} alt="" /></div>
    <div><h3 className='mt-2 '>Payment Information</h3></div>
    <div className='row mt-4 gy-2'>

        <div className="col-3">
            <h6 style={{color:"gray",fontWeight:"400" } }> CHIPS Confirmation No</h6>
            <h6 >{generatechips()}</h6>
        </div>
        <div className="col-3 ">
            <h6  style={{color:"gray",fontWeight:"400" } }> Status</h6>
            <h6 >confirmed</h6>
        </div>

        <div className="col-3">
            <h6 style={{color:"gray",fontWeight:"400" } }> Payment ID</h6>
            <h6 >{ Math.floor(Math.random() * 900000) + 100000}</h6>
        </div>
        <div className="col-12 ">
            <h6  style={{color:"gray",fontWeight:"400" } }> modified</h6>
          { element.date && <h6> {element.date.split(('T'))[0]}</h6>}
        </div>

        <div className="col-12 ">
            <h6  style={{color:"gray",fontWeight:"400" } }> Name</h6>
            <h6 >Freeform</h6>
        </div>

        <div className="col-12 ">
            <h3  style={{color:"black",fontWeight:"500"}}> Debit Account</h3>
        </div>
        
        <div className="col-3 ">
            <h6  style={{color:"gray",fontWeight:"400" } }> Debit Account</h6>
            <h6 >HM TRADING GLOBAL PTE.LTD Current Account<br/>
                Acct No 24E9DE19  GBP</h6>
        </div>

        <div className="col-12 ">
            <h3  style={{color:"black",fontWeight:"500"}}> Benificiary</h3>
        </div>

        <div className="col-3 ">
            <h6  style={{color:"gray",fontWeight:"400"}}> Benificiary</h6>
           {element.beneficiary && <h6>{element.beneficiary}</h6>}
      {    element.accountNumber &&  <h6 >{element.accountNumber}</h6>}
          
        </div>
        <div className="col-6 ">
            <h6  style={{color:"gray",fontWeight:"400"}}> Benificiary Bank</h6>
         {element.beneficiaryBank &&   <h6 >hna  {element.beneficiaryBank}</h6>}
            <h6>SWIFT {element.swift}</h6>
        </div>



        <div className="col-12 ">
            <h3  style={{color:"black",fontWeight:"500"}}> Payment Detail</h3>
        </div>

        <div className="col-12 ">
            <h6  style={{color:"gray",fontWeight:"400" } }> Debit Currency</h6>
            <h6 >GBP - Pound sterling</h6>
        </div>

        <div className="col-12 ">
            <h6  style={{color:"gray",fontWeight:"400 " }}> GBP - Pound sterling</h6>
            <h6 >GBP - Pound sterling</h6>
        </div>

        
        <div className="col-12 ">
            <h6  style={{color:"gray",fontWeight:"400"}}> Amount</h6>
            {element.amount && <h6 >{element.amount }GPB</h6>}
        </div>

        <div className="col-12 ">
            <h6  style={{color:"gray",fontWeight:"400"}}> Value Date</h6>
           {element.date && <h6 >{element.date.split('T')[0]}</h6>}
        </div>

        
        <div className="col-12 ">
            <h6  style={{color:"gray",fontWeight:"400"}}> Wire Fee Assignment</h6>
            <h6 >OUR </h6>
        </div>

        
        <div className="col-12 ">
            <h3  style={{color:"black",fontWeight:"500"}}> References</h3>
        </div>

        <div className="col-12 ">
            <h6  style={{color:"gray",fontWeight:"400 " }}> Originator to Beneficiary Information</h6>
        </div>

        <div className="col-12 ">
            <h6  style={{color:"gray",fontWeight:"400 " }}> OBI</h6>
          {  element.reference && <h6 >Ref: {element.reference} </h6>}
        </div>

        <div className="col-12 ">
            <h6  style={{color:"gray",fontWeight:"400 " }}> OBI</h6>
            <h6 >SWIFT: {element.swift} </h6>
        </div>

        <div className="col-12 ">
            <h3  style={{color:"black",fontWeight:"500"}}>  Internal References</h3>
        </div>
        <h6  className='' style={{color:"gray",fontWeight:"400",marginLeft:'300px'}}> Payment Description </h6>
    </div>
   
    </div>
  )
}

export default WirePdf