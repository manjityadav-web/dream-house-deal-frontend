import React from 'react'
import NavBar from '../landingComponents/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { useEffect, useState } from 'react'
import axios from 'axios'
const UserBoughtList = () => {


  const [data, setData] = useState([])
  useEffect(() => {
    fetchData();
  }, [])


  const fetchData = async () => {


    const usersData = JSON.parse(localStorage.getItem('userInfo'));


    const response = await axios.post('https://dream-house-deal-backend.onrender.com/api/user-bought-list', {
      userId: usersData?._id

    })
    console.log(response);
    if (response?.data?.code == 200) {
      setData(response?.data?.data)
    }
  }

  
  

    return (
      <>

        <NavBar />

        <div className="row">
          <div className="col-1"></div>
          <div className="col-10 table-responsive">

            <table className="table">
              <thead className="table table-dark fs-4">
                <tr>
                  <th scope="col">Sr.No.</th>
                  <th scope="col">Title</th>
                  <th scope="col">Price</th>
                  <th scope="col">Area</th>
                  <th scope="col">Location</th>
                  <th scope="col">Description</th>
                  <th scope="col">Media</th>
                </tr>
              </thead>
              <tbody>

                {data.map((item, index) => {

                  return (<tr key={index} className='fs-5'>
                    <th scope="row">{index + 1}</th>
                    <td>{item?.title}</td>
                    <td>{item?.price}</td>
                    <td>{item?.area}</td>
                    <td>{item?.location}</td>
                    <td>{item?.description}</td>
                    <td><img height="60" width="100" src={`https://dream-house-deal-backend.onrender.com/img/${item?.pic}`} /></td>
                  </tr>)

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
  export default UserBoughtList
