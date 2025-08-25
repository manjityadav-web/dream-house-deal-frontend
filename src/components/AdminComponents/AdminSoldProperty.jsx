import React from 'react'
import NavBar from '../landingComponents/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { useEffect , useState} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

const AdminSoldProperty = () => {


   const[data, setData]= useState([])

  useEffect(()=>{
        fetchData();
        console.log(data)
  },[])


      const fetchData = async()=>{



         const response = await axios.get('https://dream-house-deal-backend.onrender.com/api/admin-sold-property')


           if(response?.data?.code==200){
          setData(response?.data?.data)
        }
 
      }

      const handleDeleteProperty = async (_id) => {
    Swal.fire({
      title: "Are you sure ?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {

     const response = await axios.post('https://dream-house-deal-backend.onrender.com/api/delete-sold-property', { _id });
        if (response?.data?.code == 200) {
          Swal.fire({
            title: "Delete Property.",
            text: response?.data?.message,
            icon: "success",
          })
          fetchData();
        }else{
          Swal.fire({
            title: "Delete Property.",
            text: response?.data?.message,
            icon: "error",
          })
        }
      }
    });
  }


  return (
   <>
   <NavBar/>

        <div className="row">
        <div className="col-1"></div>
        <div className="col-10 table-responsive">
          <center><h1 className='text-danger mb-5'>Property Sold List</h1></center>
          <table className="table">
  <thead className="table table-dark fs-4">
    <tr>
      <th scope="col">Sr.No.</th>
      <th scope="col"> Name</th>
      <th scope="col"> Email</th>
      <th scope="col"> Contact</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Area</th>
      <th scope="col">Location</th>
      <th scope="col">Media</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody>

   { data.map((item,index)=>{

    
    return(
      <tr key={index} className='fs-5'>
      <th scope="row">{index+1}</th>
      <td>{item?.name}</td>
      <td>{item?.email}</td>
      <td>{item?.contact}</td>
      <td>{item?.title}</td>
      <td>{item?.price}</td>
      <td>{item?.area}</td>
      <td>{item?.location}</td>
      <td><img height="60" width="100" src={`https://dream-house-deal-backend.onrender.com/img/${item?.pic}`} /></td>
      <td><button className='btn btn-outline-danger bg-danger w-100 ms-3 mt-2' onClick={()=>{handleDeleteProperty(item?._id)}}>Delete</button></td>
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

export default AdminSoldProperty
