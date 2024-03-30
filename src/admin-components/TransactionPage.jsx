import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import api from '../components/api.js'
const TransactionPage = () => {
    const location= useLocation()
    let [client,setClient] = useState(location.state.user)
    const [transaction,setTransaction] = useState([])
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [year, setYear] = useState('');
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [credit, setIsCredit] = useState(false);
    const [type, setType] = useState('');
    const [status, setStatus] = useState('');
    const [elements,setElements]=useState([])
    const [newPassword, setNewPassword] = useState('');
    const [clientTransactions,setClientTransactions] = useState([])
    const [selectedDate, setSelectedDate] = useState(null); 
    const navigate = useNavigate()
    const uuid = localStorage.getItem("uuid");
    let dateTransform;
    const monthMap = {
        Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
        Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
      };
      let monthValue;
    const generateOptions = (start, end) => {
      const options = [];
      for (let i = start; i <= end; i++) {
        options.push(<option key={i} value={i}>{i}</option>);
      }
      return options;
    };

    const handleButtonClick = async (methodNumber) => {
        console.log(monthValue," 444 ")
        console.log("mehodNumber ",methodNumber)
        monthValue = monthMap[month];
         dateTransform =   new Date(year, monthValue, day, hour, minute).toISOString().substring(0, 10); // Create Date object
         setSelectedDate(dateTransform);
        console.log("hadi selecteddate ",selectedDate)
        console.log("hadi transform date ",dateTransform)
        const transaction = {
            id:methodNumber===1?null:elements.id,
            date:dateTransform,
            description,
            amount,
            type:type||"WITHDRAWAL",
            status,
            credit,

          };
console.log("this is the transaction---------------------------" ,transaction)
        console.log(client)
        try {
           const uri= methodNumber===1?"transaction/add":"transaction/update"
           console.log("uri  ",uri)
            const response = await fetch(`${api}${uri}/${client.id}`, {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json' ,
                    'Authorization':`Bearer ${uuid}`
                  },
                body: JSON.stringify(transaction)
              });
              const res = await response.json()
              setClient(res.transaction.client)
              await fetchTransactions()
            console.log("hadi response f sucess =>",res)
          

        } catch (error) {
            console.log("errr =>"+error)
        }
      
    
          console.log(transaction);
      };

const fetchTransactions =async ()=>{
    try {
        const response = await fetch(`${api}transaction/${client.id}`, {
            headers: {
                'Content-Type':'application/json' ,
                'Authorization':`Bearer ${uuid}`
              },
          });
          const res = await response.json()
          setTransaction(res)
        console.log("hadi response f sucess =>",res)
    
    } 
   catch (error) {
    console.log("errr =>"+error)
}


  console.log(transaction);
}

const fetchClientTransactions =async ()=>{
  try {
      const response = await fetch(`${api}client_transaction/${client.id}`, {
          headers: {
              'Content-Type':'application/json' ,
              'Authorization':`Bearer ${uuid}`
            },
        });
        const res = await response.json()
        setClientTransactions(res)
      console.log("hadi response f sucess =>",res)
  
  } 
 catch (error) {
  console.log("errr =>"+error)
}


console.log(transaction);
}
useEffect(()=>{
    fetchTransactions()
    fetchClientTransactions()
    console.log("-------------------------",client)
},[])

const handlePasswordChange = async ()=>{

    const clientroUpdate = {
        id:client.id
        ,firstname: client.firstname,
        lastname:client.lastname,
        email:client.email,
        balanceJoin:client.balanceJoin,
        balanceIsa:client.balanceIsa,
        balanceAdvance:client.balanceAdvance,
        account:"DOLLAR",
        username:client.username,
        role:client.role,
        password:newPassword,
       
    }
    const uuid = localStorage.getItem("uuid");
    console.log(client)
    try {
        
        const response = await fetch(`${api}client/update`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json' ,
                'Authorization':`Bearer ${uuid}`
              },
            body: JSON.stringify(clientroUpdate)
          });
          const res = await response.json()
          setClient(res.user)
        console.log("hadi response f sucess =>",res)


    } catch (error) {
        console.log("errr =>"+error)
    }
  
}

  return (
       
    <div className='container'>
        <div className='d-flex justify-content-between align-items-center'>
            <Link to="/admin"> Retour a la list </Link>
            <Link to="/admin/edit" state={{user:client}} > Editer à la fiche client</Link>
           
        </div>
        <h3 className="text-center fw-bold mt-5">HM TRADING GLOBAL PTE.LTD</h3>
            <h4 className="text-center fw-bold">Balance  {client.balance} €</h4>
            <h4 className="text-center fw-bold">Disponible  {client.disponible} €</h4>
            <h6 className="text-center fw-lighter ">Email:  {client.email} </h6>
            <h6 className="text-center fw-lighter ">Username:  {client.username} </h6>
            <h6 className="text-center fw-lighter">Password:  {client.password} </h6>
            <div className="d-flex justify-content-center">
            <button className='btn btn-primary'  style={{borderRadius:"8px"}}  data-bs-toggle="modal" data-bs-target="#exampleModal3" > Changer de mot de pass</button>
            </div>

            <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Changer de mot de passe</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label htmlFor="newPassword" className="form-label">Nouveau mot de passe</label>
                                    <input type="password" className="form-control" id="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                                </div>
                            </div>
                            <div className="modal-footer">
                               
                                <button type="button" className="btn btn-primary" onClick={handlePasswordChange}>Enregistrer</button>
                            </div>
                        </div>
                    </div>
                </div>

            <table className='table table-striped'>
                <thead>
                <tr>
                    <th>#ID</th>
                    <th>Date</th>
                    <th>Ref</th>
                    <th>Beneficiary</th>
                    <th>Account</th>
                    <th>Iban</th>
                    <th>Swift</th>
                    <th>bank beneficiary</th>
                    <th>amount</th>
                    <th>Digit</th>
                </tr>
                  
                </thead>
           
                <tbody>
                {clientTransactions.map((element,key)=>{
                 return (
                    <tr key={key}>
                      <td>{element.id}</td>
                      <td>{new Date(element.date).toISOString().split('T')[0]}</td>
                      <td>{element.reference}</td>
                      <td>{element.beneficiary}</td>
                      <td>{element.accountNumber}</td>
                      <td>{element.iban}</td>
                      <td>{element.swift}</td>
                      <td>{element.beneficiaryBank}</td>
                      <td>{element.amount}</td>
                      <td>{element.sixDigit}</td>
                    </tr>
                  )
                })}

                    
                </tbody>
            </table>
            <Link to="#" data-bs-toggle="modal" data-bs-target="#exampleModal"> Ajouter une transaction</Link>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Nouvelle transaction</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Date</p>
                    <div className="d-flex justify-content-start flex-wrap">
                    <div className="">
                    <select className="form-select" value={month} onChange={(e) => setMonth(e.target.value)}>
                        <option value="">Month</option>
                        <option value="Jan">Jan</option>
                        <option value="Feb">Feb</option>
                        <option value="Mar">Mar</option>
                        <option value="Apr">Apr</option>
                        <option value="May">May</option>
                        <option value="Jun">Jun</option>
                        <option value="Jul">Jul</option>
                        <option value="Aug">Aug</option>
                        <option value="Sep">Sep</option>
                        <option value="Oct">Oct</option>
                        <option value="Nov">Nov</option>
                        <option value="Dec">Dec</option>
                    </select>
                </div>
        <div className="">
          <select className="form-select" value={day} onChange={(e) => setDay(e.target.value)}>
            <option value="">Day</option>
            {generateOptions(1, 31)}
          </select>
        </div>
        <div className="">
          <select className="form-select" value={year} onChange={(e) => setYear(e.target.value)}>
            <option value="">Year</option>
            {generateOptions(2019, 2029)}
          </select>
        </div>
        <div className="">
          <select className="form-select" value={hour} onChange={(e) => setHour(e.target.value)}>
            <option value="">Hour</option>
            {generateOptions(0, 23)}
          </select>
        </div>
        <div className="">
          <select className="form-select" value={minute} onChange={(e) => setMinute(e.target.value)}>
            <option value="">Minute</option>
            {generateOptions(0, 59)}
          </select>
        </div>
                 </div>
                 <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">Amount</label>
          <input type="text" className="form-control" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="isCredit" checked={credit} onChange={(e) => setIsCredit(e.target.checked)} />
          <label className="form-check-label" htmlFor="isCredit">Credit</label>
        </div>
        <div className="mb-3">
          <label htmlFor="type" className="form-label">Type</label>
          <select className="form-select" id="type" value={type} onChange={(e) =>{ setType(e.target.value)
        console.log(type)}}  >
            <option value="CREDIT_CARD">Credit Card</option>
            <option value="BANK_TRANSFERT">Bank Transfer</option>
            <option value="WITHDRAWAL">Withdrawal</option>
            <option value="WIRE">Wire</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">Status</label>
          <select className="form-select" id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="">Select status</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="PENDING">Pending</option>
            <option value="CONFIRMED">Confirmed</option>
            <option value="SUCCESSFUL">Successful</option>
          </select>
        </div>
                </div>
                <div class="modal-footer">
                    <button type="button" onClick={()=>handleButtonClick(1)} class="btn btn-success">Enregistrer</button>

                </div>
                </div>
            </div>
            </div>
            <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Nouvelle transaction</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Date</p>
                    <div className="d-flex justify-content-start flex-wrap">
                    <div className="">
                    <select className="form-select" value={month} onChange={(e) => setMonth(e.target.value)}>
                        <option value="">Month</option>
                        <option value="Jan">Jan</option>
                        <option value="Feb">Feb</option>
                        <option value="Mar">Mar</option>
                        <option value="Apr">Apr</option>
                        <option value="May">May</option>
                        <option value="Jun">Jun</option>
                        <option value="Jul">Jul</option>
                        <option value="Aug">Aug</option>
                        <option value="Sep">Sep</option>
                        <option value="Oct">Oct</option>
                        <option value="Nov">Nov</option>
                        <option value="Dec">Dec</option>
                    </select>
                </div>
        <div className="">
          <select className="form-select" value={day} onChange={(e) => setDay(e.target.value)}>
            <option value="">Day</option>
            {generateOptions(1, 31)}
          </select>
        </div>
        <div className="">
          <select className="form-select" value={year} onChange={(e) => setYear(e.target.value)}>
            <option value="">Year</option>
            {generateOptions(2019, 2029)}
          </select>
        </div>
        <div className="">
          <select className="form-select" value={hour} onChange={(e) => setHour(e.target.value)}>
            <option value="">Hour</option>
            {generateOptions(0, 23)}
          </select>
        </div>
        <div className="">
          <select className="form-select" value={minute} onChange={(e) => setMinute(e.target.value)}>
            <option value="">Minute</option>
            {generateOptions(0, 59)}
          </select>
        </div>
                 </div>
                 <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" id="description" value={description} onChange={(e) => { 
            setDescription(e.currentTarget.value)
            setElements({...elements, description: e.target.value})}}  />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">Amount</label>
          <input type="text" className="form-control" id="amount" value={amount || elements.amount }  onChange={(e) => {
            setAmount(e.currentTarget.value)
            setElements({...elements, amount: e.target.value})}} />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" checked={credit} id="isCredit"  onChange={(e) => {
            setIsCredit(e.currentTarget.checked)
            setElements({...elements, checked: e.target.value})}} />
          <label className="form-check-label" htmlFor="isCredit">Credit</label>
        </div>
        <div className="mb-3">
          <label htmlFor="type" className="form-label">Type</label>
          <select className="form-select" id="type" value={type} onChange={(e) =>{
             setType(e.currentTarget.value || type)
             setElements({...elements, type: e.target.value})}} >

            <option value="CREDIT_CARD">Credit Card</option>
            <option value="BANK_TRANSFERT">Bank Transfer</option>
            <option value="WITHDRAWAL">Withdrawal</option>
            <option value="WIRE">Wire</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">Status</label>
          <select className="form-select" id="status" value={status} onChange={(e) =>{ 
            setStatus(e.currentTarget.value)
            setElements({...elements, status: e.target.value}) 
            }}>
            <option value="">Select status</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="PENDING">Pending</option>
            <option value="CONFIRMED">Confirmed</option>
            <option value="SUCCESSFUL">Successful</option>
          </select>
        </div>
                </div>
                <div class="modal-footer">
                    <button type="button" onClick={()=>handleButtonClick(2)} class="btn btn-success">Modifier</button>

                </div>
                </div>
            </div>
            </div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Amount</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {transaction.map((element,key)=>{
                            return (
                                <tr>
                                    <td>{element.id} </td>
                                    <td>{new Date(element.date).toISOString().split('T')[0]||Date.now()} </td>
                                    <td>{element.description} </td>
                                    <td>{element.status} </td>
                                    <td>{element.amount} </td>
                                    <td style={{textDecoration:"underline",color:"blue",cursor:"pointer"}} data-bs-toggle="modal" data-bs-target="#exampleModal1" onClick={()=>setElements(element)}> edit </td>

                                </tr>
                            )
                    })}
                </tbody>
            </table>
            <table className='table table-striped mt-3'>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>ip</th>
                        <th>Description</th>
                        
                    </tr>
                     
                    {client.connectionLogs.map((element,key)=>{
                    return ( <tr key ={key}>
                        <td>{element.date}</td>
                        <td>{element.ipAdresses}</td>
                        <td>	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36</td>
                      </tr>)
                    })}
                </thead>
                <tbody>
              </tbody>
            </table>
    </div>
  )
}

export default TransactionPage