import React, { useState } from 'react'
import NavBar from '../landingComponents/NavBar'
import axios from 'axios'
import { useEffect } from 'react'
import { IoBedOutline } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia";
import { FaVectorSquare } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2'
import { RiMoneyRupeeCircleFill } from "react-icons/ri";


const AdminPropertyList = () => {

  const [listData, setListData] = useState([])  

  useEffect(()=>{

    fetchList()
  }
  ,[])

        const fetchList = async()=>{
          const result = await axios.get('http://localhost:5500/api/property-list')

          
          if(result?.data?.code==200){
            setListData(result?.data?.data[0])
          }
        
        }

//         const handleDeleteProperty = (_id)=>{

//             // alert(_id);

//             Swal.fire({
//   title: "Are you sure?",
//   text: "You won't be able to revert this!",
//   icon: "warning",
//   showCancelButton: true,
//   confirmButtonColor: "#3085d6",
//   cancelButtonColor: "#d33",
//   confirmButtonText: "Yes, delete it!"
// }).then(async(result) => {
//   if (result.isConfirmed) {

//  const response =  await  axios.post('http://localhost:5500/api/delete-property',{_id})
//     if(response?.data?.code==200){
//       Swal.fire({
//         title: "Delete Property",
//         text: response?.data?.message,
//         icon: "success"
//       })

//       fetchList()

     
//     } else{
//           Swal.fire({
//         title: "Delete Property",
//         text: response?.data?.message,
//         icon: "error"
//       })   
//       }
//   }
// });
//         }
  return (
    <>
    <NavBar/>
      <div className="properties services">
             <center><div className="ptitle"><p >Properties</p></div></center>
             <center><h1 className="mb-5">Featured Listings</h1></center>
             <div className="listingContainer">
               {listData?.map((data,index) => {
                 return (
                     <div className="propertyCard" key={index}>
                       <div className="imgContainer">
                         <img src={`http://localhost:5500/img/${data.pic}`} />
                       </div>
                       <div className="propertyInfo">
                         <span className="fs-5">  <RiMoneyRupeeCircleFill className="mb-1"/>{data?.price}</span>
                         <h3>{data?.title}</h3>
                         <p className="desc">{data?.description}</p>
                         <div className="facilities">
                           <div className="bedrooms">
                             <span className="fs-3">
                               {data?.bedroom} <IoBedOutline />
                             </span>
                             <p>Bedrooms</p>
                           </div>
                           <div className="bathrooms ">
                             <span className='fs-3'>
                               {data?.bathroom}<LiaBathSolid />
                             </span>
                             <p>Bathrooms</p>
                           </div>
                           <div className="area mt-2">
                             <span  className='fs-5'>
                               {data?.area} <FaVectorSquare />
                             </span>
                             <p>Square ft</p>
                           </div>
                         </div>
                       </div>
                       <div className="propertyOwner">
                         <div className="owner">
                           <div className="ownerImg">
                             <img src="mk.jpg" alt="" />
                           </div>
                           <div className="ownerInfo">
                             <p>Manjit Yadav</p>
                             <span>Estate Agents</span>
                           </div>
                        
                         </div>
                          
                         <div className="ownerIcons">
                           <span className="pb-4">
                             <IoIosHeartEmpty />
                           </span>
                           <span className="pb-4">
                             <IoIosAddCircleOutline />
                           </span>
                            
                         </div>
                          {/* <button className='btn btn-outline-danger mb-2' onClick={()=>{handleDeleteProperty(data?._id)}} >Delete</button> */}
                       </div>
                     </div>
                 );
               })}
             </div>
           </div>
    </>
  
  )
}

export default AdminPropertyList
