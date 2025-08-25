

import React, { useState} from 'react'
import NavBar from '../landingComponents/NavBar'
import { FaUserAlt, FaAddressCard, FaKey, FaImage } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import axios from 'axios'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Swal from 'sweetalert2'
import { useEffect } from 'react';

const schema = yup.object().shape({
  name: yup.string().required().max(80),
  contact: yup.number().required(),
  email: yup.string().required().email(),
  address: yup.string().required(),
  password: yup.string().required().min(8).max(20),
  profile: yup.mixed()

})


const adminProfile = () => {

  const [data,setData] =useState([])

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userInfo'));
  
    setData(userData)

    setValue('name', userData?.name) 
    setValue('contact', userData?.contact)
    setValue('email', userData?.email)
    setValue('address', userData?.address)
    setValue('password', userData?.password)

  }, [])

    const [showForm, setShowForm] = useState(false); 

      const toggleForm = () => {
    setShowForm(!showForm);
      };
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const handleUpdate = async (data) => {
     
    if (data?.profile?.length == 0) {
      Swal.fire({
        title: "File Upload Error",
        text: "Please upload a valid file ",
        icon: "error"
      })

      return
    }

    const userData = JSON.parse(localStorage.getItem('userInfo'))

    const formdata = new FormData();
    formdata.append('name', data?.name)
    formdata.append('email', data?.email)
    formdata.append('password', data?.password)
    formdata.append('address', data?.address)
    formdata.append('contact', data?.contact)
    formdata.append('profile', data?.profile[0])
    formdata.append('userId', userData?._id)

    const result = await axios.put('http://localhost:5500/api/admin-update', formdata, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
     
    })
      
   
    if (result?.data?.code == 200) {
      Swal.fire({
        title: "Profile Update",
        text: result?.data?.message,
        icon: "success"
      })
localStorage.setItem('userInfo', JSON.stringify(result?.data?.data));
    }
    
    else{
  Swal.fire({
    title: "Profile Update",
    text: result?.data?.message ,
    icon: "error"
  })
}
    
  }



return (
  <>
    <NavBar />
     <center>
        <div className='pt-5 profile-container'>
          <h1 className='text-danger mb-5'>Admin Profile</h1>
     <div className='profile'>
       
        <div className='profile-img'>
          <img src={`http://localhost:5500/img/${data?.profile}`} alt="" className='img-fluid'/>
        </div>
         <div className='user-data'>
          
          <p><b>Name:</b> {data?.name}</p>
          <p><b>Email:</b> {data?.email}</p>
          <p><b>Password:</b> {data?.password}</p>
          <p><b>Contact: </b>{data?.contact}</p>
          <p className='text-start'><b>Address:</b> {data.address} </p>
          
        </div>
    
    </div> 

    <div className="container mt-3">
        {/* Toggle Button */}
        <button className="btn btn-primary mb-3" onClick={toggleForm}>
          {showForm ? 'Close' : 'Update Profile'}
        </button>
  {showForm && (

    <div className="profile-container bg-info-subtle">
     
        <div className="register bg-warning-subtle">
          <center><h1 className='mt-5 text-danger'>Update Here</h1></center>
          <div className="inner-register">
            <form onSubmit={handleSubmit((e)=>{ handleUpdate(e)})}>
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <h4>Your Name:</h4>
                  <div className='d-flex m-0 p-0'>
                    <div className='fs-2 icn-bg icons mb-5 p-1'><FaUserAlt /></div>
                    <input type="text" placeholder='Enter Name' className='fs-5 form-control rounded-0 mb-5 input-radius' {...register('name')} />
                  </div>
                  {errors?.name && <p className='text-danger'> {errors?.name?.message} </p>}
                  <h4>Your Number:</h4>
                  <div className='d-flex'>
                    <div className='fs-2 icn-bg icons mb-5 p-1'><IoCall /></div>
                    <input type="number" placeholder='Enter Number' className='fs-5 form-control rounded-0 mb-5 input-radius'  {...register('contact')} />
                  </div>
                  {errors?.number && <p className='text-danger'> {errors?.number?.message} </p>}
                  <h4>Your Address:</h4>
                  <div className='d-flex'>
                    <div className='fs-2 icn-bg icons mb-5 p-1'><FaAddressCard /></div>
                    <input type="text" placeholder='Enter Address' className='fs-5 form-control rounded-0 mb-5 input-radius'  {...register('address')} />
                  </div>
                  {errors?.address && <p className='text-danger'> {errors?.address?.message} </p>}
                </div>

                <div className="col-sm-12 col-md-6">
                  <h4>Your Email:</h4>
                  <div className='d-flex'>
                    <div className='fs-2 icn-bg icons mb-5 p-1'><MdEmail /></div>
                    <input type="email" placeholder='Enter Email' className='fs-5 form-control rounded-0 mb-5 input-radius'  {...register('email')} />
                  </div>
                  {errors?.email && <p className='text-danger'> {errors?.email?.message} </p>}

                  <h4>Your Password:</h4>
                  <div className='d-flex'>
                    <div className='fs-2 icn-bg icons mb-5 p-1'><FaKey /></div>
                    <input type="text" placeholder='Password' className='fs-5 form-control rounded-0 mb-5 input-radius'  {...register('password')} />
                  </div>
                  {errors?.password && <p className='text-danger'> {errors?.password?.message} </p>}

                  <h4>Your Profile:</h4>
                  <div className='d-flex'>
                    <div className='fs-2 icn-bg icons mb-5 p-1'><FaImage /></div>
                    <input type="file" className='fs-5 form-control rounded-0 mb-5 input-radius'  {...register('profile')} />
                  </div>

                </div>
              </div>

              <div className="row">
                <center> <input type="submit" className='register-submit'/></center>
              </div>
            </form>
          </div>
        </div>
      
   </div>
       )}
      </div>
        </div>
      </center>
  </>
   
)
      }
    


export default adminProfile 
