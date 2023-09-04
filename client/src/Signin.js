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
      const response=await fetch("/signin",{
        method:"post",
        headers:{
          "Content-Type":"application/json"
        },body:JSON.stringify({
          email,password
        })
      })

      const data=await response.json();
      if(response.status===404){
        toast.error("please filled all the data")
      }
      if(response.status===408){
        toast.warning("Invalid Login")
      }
      if(response.status===412){
        toast.warning("Invalid Login")
      }
      if(response.status===200){
dispatch({type:"USER",payload:true})
        window.alert("you login sucessfully");
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


  return (
    <div className='main-signup' style={{backgroundImage:`url(${image})`,backgroundPosition:"cover",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
<ToastContainer style={{fontSize:"1.5rem",fontWeight:"500",textTransform:"capitalize"}}/>
    <div className="signup-header" style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh",flexDirection:'column'}}>
<div className='user-signup-page' style={{padding:"5rem 7rem 5rem 5rem ",borderRadius:'5rem',border:"0.1rem solid #fff"}}>



<div className='user-signup-1'style={{width:"40rem",height:'3rem',fontSize:"1.5rem",display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"1rem"}}>
<TfiEmail style={{fontSize:"3rem",color:"#fff",marginRight:"0.5rem"}}/> <input type="email" placeholder='Email' style={{width:"100%",height:"100%",outline:"none",padding:"0.5rem 1.5rem",border:"none"}} id='email' name='email' value={input.email} onChange={handleinputFunction}/>
</div>

<div className='user-signup-1'style={{width:"40rem",height:'3rem',fontSize:"1.5rem",display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"1rem"}}>
<AiFillLock style={{fontSize:"3rem",color:"#fff",marginRight:"0.5rem"}}/> <input type="password" placeholder='Password' style={{width:"100%",height:"100%",outline:"none",padding:"0.5rem 1.5rem",border:"none"}} id='password' name='password' value={input.password}  onChange={handleinputFunction}/>
</div>




<button type="button" className="btn btn-primary" style={{width:"30rem",fontSize:'2rem',marginLeft:'5.5rem',marginTop:"2rem"}} onClick={sendData}>Sign in</button>
</div>




    </div>

    
</div>
  )
}

export default Signin