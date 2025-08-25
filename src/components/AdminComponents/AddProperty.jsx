import React from 'react'

import { FaImage } from "react-icons/fa6";
import { MdOutlineTitle } from "react-icons/md";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaChartArea } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegImage } from "react-icons/fa6";
import NavBar from '../landingComponents/NavBar';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IoBedOutline } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia";
import axios from 'axios';
import Swal from 'sweetalert2';
import * as yup from 'yup';

const propertySchema = yup.object().shape({
  title:yup.string().required().max(20),
  price:yup.string().required(),
  bedroom:yup.string().required(),
  bathroom:yup.string().required(),
  description:yup.string().required().max(100),
  location:yup.string().required(),
  area:yup.string().required(),
  pic:yup.mixed()
})

const AddProperty = () => {

  const {register, handleSubmit, reset, formState:{errors}} = useForm({
    resolver:yupResolver(propertySchema)
  })

  

  const addProperty = async(data)=>{
    const formData = new FormData();
    formData.append('title',data?.title);
     formData.append('price', data?.price);
    formData.append('area', data?.area);
    formData.append('location', data?.location);
    formData.append('description', data?.description);
    formData.append('bedroom', data?.bedroom);
    formData.append('bathroom', data?.bathroom);

    formData.append('pic', data?.pic[0]);

  
    
    
    const response = await axios.post('https://dream-house-deal-backend.onrender.com/api/add-property', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    if (response?.data?.code == 200) {
      Swal.fire({
        title: "Add Property",
        text: response?.data?.message,
        icon: "success"
      })
      reset()
    } else {
      Swal.fire({
        title: "Add Property",
        text: response?.data?.message,
        icon: "error"
      })
    }

}




  return (
    <>
    <NavBar />
      <div className="register bg-warning-subtle">
        <center><h1 className='mt-5 text-danger'>Add Property</h1></center>
        <div className="inner-register">

          <form onSubmit={handleSubmit((d)=>{ addProperty(d); })}>
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h4>Title:</h4>
              <div className='d-flex mb-3  m-0 p-0'>
                <div className='fs-2 icn-bg  icons  p-1'><MdOutlineTitle /></div>
                <input type="text" placeholder='Enter Title' className='fs-5 form-control rounded-0  input-radius' {...register('title')} />

              </div>
              {errors?.title && <p className='text-danger fs-5'>{errors?.title?.message}</p> }
              <h4>Price:</h4>
              <div className='d-flex mb-3'>
                <div className='fs-2 icn-bg  icons p-1'><RiMoneyRupeeCircleFill /></div>
                <input type="text" placeholder='Enter Price' className='fs-5 form-control rounded-0  input-radius' {...register('price')} />

              </div>
                {errors?.price && <p className='text-danger fs-5'>{errors?.price?.message}</p> }

                 <h4>Bedrooms:</h4>
              <div className='d-flex mb-3'>
                <div className='fs-2 icn-bg  icons p-1'><IoBedOutline /></div>
                <input type="number" placeholder='Enter Bedrooms' className='fs-5 form-control rounded-0  input-radius' {...register('bedroom')} />

              </div>
                {errors?.bedroom && <p className='text-danger fs-5'>{errors?.bedroom?.message}</p> }
           
            </div>
             <div className="col-sm-12 col-md-6">
              <h4>Area:</h4>
              <div className='d-flex mb-3'>
                <div className='fs-2 icn-bg icons  p-1'><FaChartArea /></div>
                <input type="text" placeholder='Enter Area' className='fs-5 form-control rounded-0  input-radius'  {...register('area')} />

              </div>
                {errors?.area && <p className='text-danger fs-5'>{errors?.area?.message}</p> }
              <h4>Upload Media:</h4>
              <div className='d-flex mb-3'>
                <div className='fs-2 icn-bg icons   p-1'><FaRegImage /></div>
                <input type="file" className='fs-5 form-control rounded-0  input-radius'   {...register('pic')}/>

              </div>
                {errors?.pic && <p className='text-danger fs-5'>{errors?.pic?.message}</p> }

                 <h4>Bathrooms:</h4>
              <div className='d-flex mb-3'>
                <div className='fs-2 icn-bg icons   p-1'><LiaBathSolid /></div>
                <input type="number" className='fs-5 form-control rounded-0  input-radius' placeholder='Enter Bathroom'  {...register('bathroom')}/>

              </div>
                {errors?.bathroom && <p className='text-danger fs-5'>{errors?.bathroom?.message}</p> }
             </div>
          </div>
          <div className="row">
             <h4>Location:</h4>
              <div className='d-flex mb-3'>
                <div className='fs-2 icn-bg icons  p-1'><FaLocationDot /></div>
                <input type="text" className='fs-5 form-control rounded-0  input-radius' placeholder='Enter location'  {...register('location')}/>
            </div>
                {errors?.location && <p className='text-danger fs-5'>{errors?.location?.message}</p> }
           <h4>Description:</h4>
              <div className='d-flex mb-3'>
                <textarea name="" id="" placeholder='Description.........' className='fs-5 form-control   add-property'  {...register('description')}></textarea>
                </div>
                  {errors?.description && <p className='text-danger fs-5'>{errors?.description?.message}</p> }
            <center> <button className='register-submit' >Add</button></center>
          </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddProperty
