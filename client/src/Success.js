import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppContext } from './Context';
import { NavLink } from 'react-router-dom';

const Success = () => {
  const {cartDtspatch}=useContext(AppContext);
  const [name,setName]=useState("");

  const userSuccessFunction=async()=>{
    try{
const response=await fetch("/getData",{
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
    toast.success("your payment has been sucessfully", {
      position: "top-right",
      autoClose: 1000,
      });

  },[])
  return (
    <> <ToastContainer style={{fontSize:"1.5rem"}}/>
    <div style={{minHeight:"70vh",backgroundColor:"#FFF",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} >
 <h1 style={{fontSize:"3rem",margin:"1rem 0rem"}}>

  Your payment has been sucessful
 </h1>
 <h3>Thank you {name.firstname} for shopping 🚲 🏪 🚒 in the flipkart</h3>
 <NavLink to="/" style={{textDecoration:"none"}}><button className='btn btn-primary' style={{fontSize:"2rem",marginTop:"1rem"}}> Home</button></NavLink>
    
    </div>
    </>
  )
}

export default Success