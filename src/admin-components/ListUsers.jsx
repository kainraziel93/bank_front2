import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom';
const ListUsers = () => {
    const [users,setUsers]=useState([]);

    useEffect( ()=>{
        const fetchUsers = ()=>{
            const uuid = localStorage.getItem('uuid')
            const axiosConfig = {
                headers: {
                  Authorization: `Bearer ${uuid}`
                }
              };
           
             axios.get(`https://bank-01-9dc728aeb614.herokuapp.com/client`,axiosConfig)
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
        <table className='table'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>email</th>
                    <th>balance_join</th>
                    <th>balance_advance</th>
                    <th>balance_isa</th>
                    <th>role</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((element,key)=>{
                        
                        return (<tr key={key}>
                            <td>{element.id}</td>
                            <td>{element.email}</td>
                            <td>{element.balanceJoin}</td>
                            <td>{element.balanceAdvance}</td>
                            <td>{element.balanceIsa}</td>
                            <td>{element.role}</td>
                            <td>edit</td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListUsers