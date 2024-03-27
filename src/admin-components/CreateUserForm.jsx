import React, { useState } from 'react'
import axios from 'axios';
const CreateUserForm = () => {
    let [firstname,setFirstname]=useState('');
    let [email,setEmail]=useState('');
    let [lastname,setLastname] = useState('');
    let [balanceJoin,setBalanceJoin] = useState('')
    let [balanceIsa,setBalanceIsa] = useState('')
    let [balanceAdvance,setBalanceAdvance] = useState('')
    let [account,setAccount] = useState('DOLLAR')
    let [username,setUsername] =useState('')
    let [password,setPassword] = useState('')
    let [newPassword,setNewPassword] = useState('')
    let [role,setRole] = useState('ADMIN')

    const handleSubmit = async ()=>{

        const client = {
            firstname,lastname,email,balanceJoin,balanceIsa,
            balanceAdvance,account,username,role,password,newPassword
        }
        const uuid = localStorage.getItem("uuid")
        console.log(client)
        try {
            
            const response = await fetch(`https://bank-01-9dc728aeb614.herokuapp.com/client/add`, {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json' ,
                    'Authorization':`Bearer ${uuid}`
                  },
                body: JSON.stringify(client)
              });
            console.log(await response.json())

        } catch (error) {
            console.log("errr =>"+error)
        }
      
    }
    
  return (
    <div className='container user-wire-wrapper position-relative'>
        <div className="d-flex align-items-center  justify-content-between  mt-4 gap-100">
            <h6 className='pt-3 fw-light' > FIRSTNAME </h6>
            <input type="text"   onChange={
                (e)=>{ setFirstname(e.currentTarget.value)
                    console.log(firstname)}
            } class="form-control" id="firstname" placeholder=""/>
        </div>
        <div className="d-flex align-items-center mt-4   gap-100">
            <h6 className='pt-3 fw-light ' > LASTNAME </h6>
            <input 
            type="text" 
            class="form-control" 
            onChange={
                (e)=>{ setLastname(e.currentTarget.value)
                    console.log(lastname)}} 
                    id="accountNumber"
                     placeholder=""/>
            
        </div>
        <div className="d-flex align-items-center mt-2   gap-100">
        <h6 className='pt-3 fw-light'> Account </h6>
            <select  class="form-control" id="ibna" value={account}  onChange={
                (e)=>{ setAccount(e.currentTarget.value)
                    console.log(account)}}   placeholder=""> 
                 <option value="DOLLAR"> DOLLARS</option>  <option value="EUROS"> EUROS</option>  <option value="LIVRE">LIVRES</option>
            </select>
        </div>
        <div className="d-flex align-items-center mt-2 justify-content-between gap-100">
            <h6 className='pt-3 fw-light'> EMAIL </h6>
            <input 
            type="text" 
            class="form-control"
             id="email"
              placeholder=""
              onChange={
                (e)=>{ setEmail(e.currentTarget.value)
                    console.log(email)}} />
        </div>
        <div className="d-flex align-items-center mt-2 justify-content-between gap-100">
            <h6 className='pt-3 fw-light'> USERNAME </h6>
            <input 
            type="text" 
            class="form-control"
             id="username"
              placeholder=""
              onChange={
                (e)=>{ setUsername(e.currentTarget.value)
                    console.log(username)}} />
        </div>
        <div className="d-flex align-items-center mt-2  gap-100">
            <h6 className='pt-3 fw-light'> PASSWORD </h6>
            <input type="text"
             class="form-control" 
             onChange={
                (e)=>{ setPassword(e.currentTarget.value)
                    console.log(password)}} 
            id="password"
             placeholder=""/>
        </div>
        <div className="d-flex align-items-center mt-2  gap-100">
            <h6 className='pt-3 fw-light'> RETYPE PASSWORD </h6>
            <input 
            type="text" 
            onChange={
                (e)=>{ setNewPassword(e.currentTarget.value) 
                    console.log(newPassword)}} 
            class="form-control" 
            id="newPassword" 
            placeholder=""/>
        </div>
        <div className="d-flex align-items-center mt-2   gap-100">
        <h6 className='pt-3 fw-light'> ROLE </h6>
            <select
             type="text"
             class="form-control"
             value={role}
             onChange={
                (e)=>{ setRole(e.currentTarget.value)
                    console.log(role)}} 
             id="ibna"  placeholder=""> 
                 <option value="ADMIN"> ADMIN</option>  <option value="CLIENT"> CLIENT</option>  
            </select>
        </div>    
        <div className="d-flex align-items-center mt-2  gap-100">
            <h6 className='pt-3 fw-light'> BALANCE ADVANCE </h6>
            <input
             type="text"
             onChange={
                (e)=>{ setBalanceAdvance(e.currentTarget.value)
                    console.log(balanceAdvance)}} 
             class="form-control" 
             id="balanceAdvance" 
             placeholder=""/>
        </div>
        <div className="d-flex align-items-center  mt-2 gap-100">
            <h6 className='pt-3 fw-light'> BALANCE ISA </h6>
            <input
             type="text"
             onChange={
                (e)=>{ setBalanceIsa(e.currentTarget.value)
                    console.log(balanceIsa)}} 
             class="form-control"
              id="amount"
               placeholder=""/>
        </div>
        <div className="d-flex align-items-center  mt-2 gap-100">
            <h6 className='pt-3 fw-light'> BALANACE JOIN </h6>
            <input
             type="text" 
             class="form-control" 
             onChange={
                (e)=>{ setBalanceJoin(e.currentTarget.value) 
                    console.log(balanceJoin)}} 
             id="balanceJoin" 
             placeholder=""/>
        </div>
        <div className="d-flex justify-content-end pe-4">
        <button  className='btn login-btn mt-5' onClick={handleSubmit}> add</button>
        </div>
        
    </div>
  )
}

export default CreateUserForm