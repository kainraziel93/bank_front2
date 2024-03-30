import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import api from '../components/api.js'
const ListUsers = () => {
    const [users,setUsers]=useState([]);
    const navigate = useNavigate()
    const uuid = localStorage.getItem('uuid')
    useEffect( ()=>{
        const fetchUsers = ()=>{
            
            console.log("uuid ==========>"+uuid)
            const axiosConfig = {
                headers: {
                  Authorization: `Bearer ${uuid}`
                }
              };
           
             axios.get(`${api}client`,axiosConfig)
            .then((response)=>{
                console.log("-----------------------------------------------------------------------")
                console.log("response",response.data)
                setUsers(response.data)})
            .catch(e=>console.log("err =>"+e))
        }
       fetchUsers();
        
      },[])

  return (
    <div className='container'>
        <Link className='btn  btn-primary' to="add" style={{borderRadius:"20px"}}> Créer un nouveau client </Link>
        <h6 className='my-4 mx-4'>{users.length} utilisateur(s)</h6>
        <table className='table table-striped border'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>email</th>
                    <th>Release</th>
                    <th>role</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((element,key)=>{
                        
                        return (<tr key={key}>
                            <td>{element.id}</td>
                            <td style={{cursor:"pointer",textDecoration:"underline",color:"blue"}} onClick={()=>navigate("/admin/transaction/"+element.id,{state:{user:element}})}>{element.email}</td>
                            <td>{element.balance}</td>
                            <td>{element.role}</td>
                            <td style={{cursor:"pointer",textDecoration:"underline",color:"blue"}} onClick={()=>navigate("edit",{state:{user:element}})} >edit</td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListUsers