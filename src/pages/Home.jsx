import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {getEmpdetailsAPI,deleteEmpDetailsAPI} from '../services/allApi' 

const Home = () => {

  const [empDetails, setEmpDetails] = useState({})
    useEffect(() => {
      getAllEmployees()
    }, [])

    const getAllEmployees = async () => {
        const response = await getEmpdetailsAPI()
        console.log(response.data);
        setEmpDetails(response.data)

    }

    const deleteUser = async (id)=>{
      await deleteEmpDetailsAPI(id)
      getAllEmployees()
  }

  return (
    <div>


      <h1 style={{marginTop:'50px'}} className='text-dark text-center'>ALL EMPLOYEE DETAILS</h1>
      <Link to={'/'} style={{marginLeft:'90%',marginTop:'-5%', width:'120px',backgroundColor:'blue',color:'white'}} className="btn btn-danger">BACK</Link>
      <table style={{width:'80%',marginLeft:'120px',marginTop:'50px'}} className="table  shadow">
        <thead>
          <tr>
            <th>#</th>
            <th>USERNAME</th>
            <th>EMAIL ID</th>
            <th>STATUS</th>
            
          </tr>
        </thead>
        <tbody>
         {
            empDetails?.length > 0 ?
            empDetails.map((emp,index) => (
              <tr key={emp?.id}>
            <td>{index+1}</td>
            <td>{emp?.userName}</td>
            <td>{emp?.emailId}</td>
            <td>{emp?.status}</td>
            <td><Link to={`/update/${emp?.id}`} style={{width:'120px',backgroundColor:'green',color:'white'}} className="btn btn-success">EDIT</Link></td>
            <td><Link onClick={()=>deleteUser(emp?.id)} style={{marginLeft:'-80px', width:'120px',backgroundColor:'red',color:'white'}} className="btn btn-danger">DELETE</Link></td>

          </tr>
            ))
          
            :
            <div className='text-danger fw-bolder'>
                No Employees Details
            </div>
          }
          
         
        </tbody>
      </table>
    </div>
  )
}

export default Home