import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './NavBar'
import 'bootstrap/dist/js/bootstrap.min.js'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import swal from 'sweetalert2'

const schema = yup.object().shape({
  name:yup.string().required().max(80),
  contact:yup.number().required(),
  email:yup.string().required().email(),
  subject:yup.string().required(),
  message:yup.string().required()
 


})


const ContactUs = () => {
  const location = useLocation();

   const {register, handleSubmit, reset, formState:{errors}} = useForm({
      resolver : yupResolver(schema)
  })

   const handleContact =  async(data)=>{

   const result =  await axios.post('https://dream-house-deal-backend.onrender.com/api/send-contact',data)

     if(result?.data?.code==200){
            swal.fire({
                title: "Contact",
            text: result?.data?.message,
            icon: "success"
            })
            reset();
          }
    
          else{
            swal.fire({
                title: "Contact",
            text: result?.data?.message,
            icon: "error"
            })
          }

   }
  return (
   <>
   {location?.pathname!='/' &&   <NavBar />}
     
   <div className="contact">
     <center><div className='contact-us'>Contact Us</div></center>
      <center><div className='fs-1'><h1>Feel free to Contact Us</h1></div></center>
    
    <div className="inner-contact" data-aos="zoom-in">
  
  <form onSubmit={handleSubmit((d)=>{handleContact(d)})}>
   <div className='row w-100'>
  <div className='col-12 col-sm-12 col-md-6 '>
  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label form-heading">Name:</label>
    <input type="type" className="form-control  input-limit w-100 " id="exampleFormControlInput1" placeholder="Enter Name"{...register('name')} />
  </div>
   {errors?.name && <p className='text-danger'> {errors?.name?.message} </p>}

   <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label form-heading">Email address</label>
    <input type="email" className="form-control  input-limit w-100 " id="exampleFormControlInput1" placeholder="Enter Email" {...register('email')} />
  </div>
   {errors?.email && <p className='text-danger'> {errors?.email?.message} </p>}

   <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label form-heading">Mobile Number:</label>
    <input type="text" className="form-control  input-limit w-100" id="exampleFormControlInput1" placeholder="Enter Number" {...register('contact')}/>
  </div>
   {errors?.contact && <p className='text-danger'> {errors?.contact?.message} </p>}

   <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label form-heading">Subject:</label>
    <input type="text" className="form-control  input-limit w-100" id="exampleFormControlInput1" placeholder="Subject" {...register('subject')}/>
  </div>
   {errors?.subject && <p className='text-danger'> {errors?.subject?.message} </p>}
 

  <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label form-heading">Message:</label>
    <textarea className="form-control msg-h input-limit w-100" id="exampleFormControlTextarea1" rows={3} defaultValue={""} placeholder='Enter Your Messages'{...register('message')}/>
  </div>
   {errors?.message && <p className='text-danger'> {errors?.message?.message} </p>}
  </div>

  <div className="col-sm-12 col-md-6  pe-0 ">
    <img src="./c.jpg" alt="" className='img-fluid contact-img border border-0'/>
  </div>

   
</div>

 <div className="row">
      <center><input type="submit" className='contact-submit form control mt-5 mb-0'/></center>
    </div>
</form>
   
  </div>
  
</div>

   </>
  )
}

export default ContactUs
