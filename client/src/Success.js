import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppContext } from './Context';
import { NavLink } from 'react-router-dom';

const Success = () => {
  const {cartDtspatch}=useContext(AppContext);
  const [name,setName]=useState("");

  const logoutFunction=async()=>{
    try{
const response=await fetch("https://saini-sahab-bharat-saini-backend.onrender.com/logout",{
    method:"get",
    headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
    },credentials:"include"
})
const data=await response.json();
    }catch(error){
        console.log(error)
    }
}

  const userSuccessFunction=async()=>{
    try{
const response=await fetch("https://saini-sahab-bharat-saini-backend.onrender.com/getData",{
  method:"GET",
  headers:{
Accept:"application/json",
"Content-Type":"application/json"
  },
  credentials:"include"
})
const data= await response.json();
setName(data);

cartDtspatch({type:"LOGOUT_DATA"})

    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    userSuccessFunction()
    logoutFunction();
    toast.success("your payment has been sucessfully", {
      position: "top-center",
      autoClose: 2000,
      });
  },[])
  return (
    <> <ToastContainer style={{fontSize:"1.5rem"}}/>
    <div style={{minHeight:"70vh",backgroundColor:"#FFF",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} >
 <h1 style={{fontSize:"3rem",margin:"1rem 0rem",textTransform:'capitalize',textAlign:'center'}}>

  Your payment has been sucessful
 </h1>
 <div style={{fontSize:"1.5rem"}}>Thank you <span style={{fontSize:"2rem",fontWeight:"500"}}>{name.firstname}</span> for shopping 🚲 🏪 🚒 in the flipkart</div>
 <NavLink to="/" style={{textDecoration:"none"}}><button className='btn btn-primary' style={{fontSize:"2rem",marginTop:"1rem"}}> Home</button></NavLink>
    
    </div>
    </>
  )
}

export default Success