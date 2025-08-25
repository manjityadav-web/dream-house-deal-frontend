import React from 'react'
import { MdEmail, MdImportExport } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';  
import { useEffect,useState } from 'react';


const schema = yup.object().shape({
  email:yup.string().required().email(),
  password:yup.string().required().min(8).max(20)
})

const Login = () => {

 useEffect(() => {
    if (location.pathname === "/login") {
      const token = localStorage.getItem("userInfo");
      if (token) {
        localStorage.removeItem("userInfo");

        Swal.fire({
          icon: "error",
          title: "Logged Out",
          text: "You have been  logged out!",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    }}
  , [location.pathname]);


    const navigate = useNavigate();
    const {register, handleSubmit, formState:{errors}} = useForm({
      resolver:yupResolver(schema)
    })

    const handleLogin = async(data)=>{
      const response = await axios.post('https://dream-house-deal-backend.onrender.com/api/login',data);
      console.log(response);
      
      if(response.data.code==200){
        Swal.fire({
          title:"Login",
          text: response?.data?.message,
          icon: "success"

        });

        localStorage.setItem("userInfo",JSON.stringify(response?.data?.data));
       if (response?.data?.data?.userType == "admin") {
        navigate('/admin-add')
      } else if (response?.data?.data?.userType == "user") {
        navigate('/user-property')
      }

      }
      else{
        Swal.fire({
          title:"Login",
          text:response?.data?.message,
          icon:"error"
        })

      }
    }
 

  return (
    <>
    <NavBar />
     <div className="login bg-warning-subtle">
            <center><h1 className='mt-5 text-danger'>Login Here</h1></center>
            <div className="inner-login">
              <form onSubmit={handleSubmit((d)=>{handleLogin(d)})}>
              <div className="row">
                <div className="col-12">
                  <h4>Your Email:</h4>
                <div className='d-flex  m-0 p-0'>
                    <div className='fs-2 icn-bg  icons mb-5 p-1'><MdEmail /></div>
                  <input type="email" placeholder='Enter Email' className='fs-5 form-control rounded-0 mb-5 input-radius' {...register('email')}/>
    
                </div>
                {errors?.email && <p className='text-danger'>{errors?.email.message}</p>}
                 <h4>Your Password:</h4>
                   <div  className='d-flex'>
                    <div className='fs-2 icn-bg  icons mb-5 p-1'><FaKey /></div>
                  <input type="text" placeholder='Enter Password' className='fs-5 form-control rounded-0 mb-5 input-radius' {...register('password')}/>
    
                   </div>
                   {errors?.password && <p> {errors?.password?.message} </p> } 
                 
                </div>
                <div className="row">
                <center> <button className='login-submit' >Login</button></center>
                </div>
              </div>
    
              </form>
            </div>
          
    </div>
   
    </>
  )
}

export default Login
