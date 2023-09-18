import React, {  useContext, useEffect } from 'react'
import { AppContext } from './Context';
import { useNavigate } from 'react-router-dom';
import image from "./image/flip8.jpg";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const Logout = () => {
    const {state,dispatch,cartItem,cartDtspatch}=useContext(AppContext);
const navigate=useNavigate();
const logoutFunction=async()=>{

    try{
const response=await fetch("https://newhost-application-full.onrender.com/logout",{
    method:"get",
    headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
        
    },credentials:"include",
    
})
const data=await response.json();
toast.success("you successful logout", {
    position: "top-left",
    autoClose: 1000,
    })
dispatch({type:"USER",payload:false})
cartDtspatch({type:"LOGOUT_DATA"})
navigate("/login")
    }catch(error){
        console.log(error)
    }
}
    useEffect(()=>{
logoutFunction()
    },[])
  return (
    <div div className='main-Logout' style={{backgroundImage:`url(${image})`,backgroundPosition:"cover",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"100vh"}}></div>
  )
}

export default Logout