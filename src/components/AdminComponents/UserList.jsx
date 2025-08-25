import React from 'react'
import NavBar from '../landingComponents/NavBar'
import { useState,useEffect } from 'react'
import axios  from 'axios'

const UserList = () => {



  const[data, setData]= useState([])
  useEffect(()=>{
        fetchData();
  },[])


      const fetchData = async()=>{

      
           const userData =  JSON.parse(localStorage.getItem('userInfo'))
        
         const response = await axios.get('https://dream-house-deal-backend.onrender.com/api/admin-user-list')
           if(response?.data?.code==200){
          setData(response?.data?.data)
        }
 
      }


  return (
   <>
   <NavBar />

    <div className="row">
        <div className="col-1"></div>
        <div className="col-10 table-responsive">
          <center><h1 className='text-danger mb-5'>Admin User List</h1></center>
          <table className="table">
  <thead className="table table-dark fs-4">
    <tr>
      <th scope="col">Sr.No.</th>
      <th scope="col"> Name</th>
      <th scope="col"> Email</th>
      <th scope="col"> Contact</th>
      <th scope="col">Address</th>
      <th scope="col">Profile</th>
   

    </tr>
  </thead>
  <tbody>

   { data.map((item,index)=>{
    return(
      <tr key={index} className='fs-5'>
      <th scope="row">{index+1}</th>
      
         <td>{item?.name} </td>
         <td> {item?.email}  </td>
         <td> {item?.contact}   </td>
        <td>{item?.address}    </td> 
       <td><img   height="60" width="100" src={`https://dream-house-deal-backend.onrender.com/img/${item?.profile}`} alt=''/>    </td>
    </tr>
    )
     
   })}
   
  </tbody>
</table>
  {data?.length == 0 && <p className='text-center fs-3'>Record Not Found..</p>}

        </div>
        <div className="col-1"></div>
      </div>
 
     
   </>
  )
}

export default UserList
