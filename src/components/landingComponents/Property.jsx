

import { IoBedOutline } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia";
import { FaVectorSquare } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import NavBar from "./NavBar";
import { useEffect ,useState } from "react";
import axios from 'axios'
import Swal from 'sweetalert2'
import { RiMoneyRupeeCircleFill } from "react-icons/ri";



const Property = () => {
  const location = useLocation();

  const handleBuy = async(propertyId)=>{
    const userData = JSON.parse(localStorage.getItem('userInfo'))
    console.log(userData,'userdata is here..')
   const response = await  axios.post('http://localhost:5500/api/buy',{userId:userData?._id, propertyId});
   if(response?.data?.code==200){

    Swal.fire({
      title:"Buy Property",
      text:response?.data?.message,
      icon:'success'
    })

   }

   else{
     Swal.fire({
      title:"Buy Property",
      text:response?.data?.message,
      icon:'error'
    })
   }
  }

  const[dataList, setDataList] = useState([]);

  useEffect(()=>{
 
     fetchList()
   }
   ,[])
 
 const fetchList = async()=>{
          const result = await axios.get('http://localhost:5500/api/property-list')
       
          
          if(result?.data?.code==200){
            setDataList(result?.data?.data[0])
          }
        
        }




  return (
    <>
    {location?.pathname!= '/' && <NavBar />}
      <div className="properties services">
        <center><div className="ptitle"><p >Properties</p></div></center>
        <center><h1 className="mb-5">Featured Listings</h1></center>
        <div className="listingContainer">
          {dataList.map((data,index) => {
            return (
                <div className="propertyCard" key={index} import data-aos="fade-up">
                  <div className="imgContainer">
                    <img src={`http://localhost:5500/img/${data.pic}`} />
                  </div>
                  <div className="propertyInfo">
                    <span className="fs-5">  
                     <RiMoneyRupeeCircleFill className="mb-1"/> {data?.price}</span>
                    <h3>{data?.title}</h3>
                    <p className="desc">{data?.description}</p>
                    <div className="facilities">
                      <div className="bedrooms">
                        <span className="fs-3">
                          {data?.bedroom} <IoBedOutline />
                        </span>
                        <p>Bedrooms</p>
                      </div>
                      <div className="bathrooms">
                        <span>
                        <button className="text-light bg-success mt-2  fs-3 buy" onClick={()=>{handleBuy(data?._id)}}>Buy</button>
                        </span>
                       
                      </div>
                      <div className="area mt-2">
                        <span className="fs-5">
                          {data?.area} <FaVectorSquare /> 
                        </span>
                        <p>Square ft</p>
                      </div>
                    </div>
                  </div>
                  <div className="propertyOwner">
                    <div className="owner">
                      <div className="ownerImg">
                        <img src="manjit.jpg" alt="" />
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
                  </div>
                </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Property;