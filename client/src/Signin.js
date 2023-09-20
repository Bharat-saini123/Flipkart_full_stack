import React, {  useContext, useState } from 'react';
import { AiFillLock } from "react-icons/ai";

import { TfiEmail } from "react-icons/tfi";
import image from "./image/flip8.jpg"
import { AppContext } from './Context';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signin = () => {
  const navigate=useNavigate()
const {state,dispatch}=useContext(AppContext);
  const [input,setInput]=useState({

    email:"",
    password:"",

  })
  const handleinputFunction=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
 setInput({...input,[name]:value})

  }

  const sendData=async(event)=>{
    event.preventDefault();
    const email=input.email;
    const password=input.password;

    try{
      const response=await fetch("https://bhai-saini-flipkart-backend-app.onrender.com/signin",{
        method:"post",
        headers:{
          "Content-Type":"application/json",
        
          
        },body:JSON.stringify({
          email,password
        }),
        credentials:"include",
      
      })

      const data=await response.json();
      if(response.status===404){
        toast.error("please filled all the data", {
          position: "top-right",
          autoClose: 1000,
          })
      }
      if(response.status===408){
        toast.warning("Invalid Login", {
          position: "top-right",
          autoClose: 1000,
          })
      }
      if(response.status===412){
        toast.warning("Invalid Login", {
          position: "top-right",
          autoClose: 1000,
          })
      }
      if(response.status===200){
dispatch({type:"USER",payload:true})
toast.success("sucessfull Login", {
  position: "top-right",
  autoClose: 1000,
  })
       
        setInput({
          email:"",
    password:"",
        })
        navigate("/")
        
      }
    }catch(error){
      console.log(error)
    }



  }


  return (<>
  {/* <ToastContainer style={{fontSize:"1.5rem"}}/> */}
    <div className='main-signup' style={{backgroundImage:`url(${image})`,backgroundPosition:"cover",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>

    <div className="signup-header" style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh",flexDirection:'column'}}>
<div className='user-signup-page' style={{padding:"5rem 7rem 5rem 5rem ",borderRadius:'5rem',border:"0.1rem solid #fff"}}>



<div className='user-signup-1'>
<TfiEmail style={{fontSize:"3rem",color:"#fff",marginRight:"0.5rem"}}/> <input type="email" placeholder='Email' style={{width:"100%",height:"100%",outline:"none",padding:"0.5rem 1.5rem",border:"none",borderRadius:"1rem"}} id='email' name='email' value={input.email} onChange={handleinputFunction} autoComplete='off'/>
</div>

<div className='user-signup-1'>
<AiFillLock style={{fontSize:"3rem",color:"#fff",marginRight:"0.5rem"}}/> <input type="password" placeholder='Password' style={{width:"100%",height:"100%",outline:"none",padding:"0.5rem 1.5rem",border:"none",borderRadius:"1rem"}} id='password' name='password' value={input.password}  onChange={handleinputFunction} autoComplete='off'/>
</div>




<button type="button" className="btn btn-primary btn-signup" style={{fontSize:'2rem',marginLeft:'5.5rem',marginTop:"2rem"}} onClick={sendData}>Sign in</button>
</div>




    </div>

    
</div>
</>
  )
}

export default Signin