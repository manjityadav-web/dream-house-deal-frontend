import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { FaUserAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaAddressCard } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";
import Footer from './Footer'
import NavBar from './NavBar'
import axios from 'axios'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';  
import * as yup from 'yup';
import swal from 'sweetalert2'


const schema = yup.object().shape({
  name:yup.string().required().max(80),
  contact:yup.number().required(),
  email:yup.string().required().email(),
  address:yup.string().required(),
  password:yup.string().required().min(8).max(20),
  profile:yup.mixed()

})



const UserRegister = () => {

  const {register, handleSubmit, reset, formState:{errors}} = useForm({
    resolver : yupResolver(schema)
})

 const handleRegister =  async(data)=>{
    
    
        const formdata = new FormData();
        formdata.append('name',data?.name)
        formdata.append('email',data?.email)
        formdata.append('password',data?.password)
        formdata.append('address',data?.address)
        formdata.append('contact',data?.contact)
        formdata.append('profile',data?.profile[0])

      const result =  await axios.post('https://dream-house-deal-backend.onrender.com/api/user-register',formdata,{
        headers:{
            "Content-Type": "multipart/form-data"
        }
      })
       
      if(result?.data?.code==200){
        swal.fire({
            title: "Registration",
        text: result?.data?.message,
        icon: "success"
        })
        reset();
      }

      else{
        swal.fire({
            title: "Registration",
        text: result?.data?.message,
        icon: "error"
        })
      }
}



  return (
    <>
    <NavBar />
      <div className="register bg-warning-subtle">
        <center><h1 className='mt-5 text-danger'>Register Here</h1></center>
        <div className="inner-register">
          <form onSubmit={handleSubmit((d)=>{handleRegister(d)})}>
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h4>Your Name:</h4>
              <div className='d-flex  m-0 p-0'>
                <div className='fs-2 icn-bg  icons mb-5 p-1'><FaUserAlt /></div>
                <input type="text" placeholder='Enter Name' className='fs-5 form-control rounded-0 mb-5 input-radius' {...register('name')} />

              </div>
              {errors?.name && <p className='text-danger'> {errors?.name?.message} </p>}
              <h4>Your Number:</h4>
              <div className='d-flex'>
                <div className='fs-2 icn-bg  icons mb-5 p-1'><IoCall /></div>
                <input type="text" placeholder='Enter Number' className='fs-5 form-control rounded-0 mb-5 input-radius' {...register('contact')}/>

              </div>
               {errors?.number && <p className='text-danger'> {errors?.number?.message} </p>}
              <h4>Your Address:</h4>
              <div className='d-flex'>
                <div className='fs-2 icn-bg icons mb-5 p-1'><FaAddressCard /></div>
                <input type="text" placeholder='Enter Address' className='fs-5 form-control rounded-0 mb-5 input-radius' {...register('address')}/>
                </div>
                 {errors?.address && <p className='text-danger'> {errors?.address?.message} </p>}
              </div>

              <div className="col-sm-12 col-md-6">
              <h4>Your Email:</h4>
              <div className='d-flex'>
                <div className='fs-2 icn-bg icons mb-5 p-1'><MdEmail /></div>
                <input type="email" placeholder='Enter Email' className='fs-5 form-control rounded-0 mb-5 input-radius' {...register('email')} />

              </div>
               {errors?.email && <p className='text-danger'> {errors?.email?.message} </p>}
              <h4>Your Password:</h4>
              <div className='d-flex'>
                <div className='fs-2  icn-bg icons mb-5 p-1'><FaKey /></div>
                <input type="text" placeholder='Password' className='fs-5 form-control rounded-0 mb-5 input-radius' {...register('password')} />

              </div>
               {errors?.password && <p className='text-danger'> {errors?.password?.message} </p>}
              <h4>Your Profile:</h4>
              <div className='d-flex'>
                <div className='fs-2 icn-bg icons mb-5  p-1'><FaImage /></div>
                <input type="file" className='fs-5 form-control rounded-0 mb-5 input-radius'{...register('profile')} />

              </div>
                 {errors?.profile && <p className='text-danger'> {errors?.profile?.message} </p>}


            </div>

          </div>
        
          <div className="row">
            <center> <button className='register-submit' >Register</button></center>
          </div>
            </form>
        </div>


      </div>

    </>
  )
}

export default UserRegister
