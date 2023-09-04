import React, { useState } from 'react';
import { AiOutlineUser,AiFillLock,AiFillUnlock } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
import image from "./image/flip8.jpg";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



const Signup = () => {
    const navigate=useNavigate();
    const [input,setInput]=useState({
        firstname:"",
        lastname:"",
        email:"",
        phone:"",
        password:"",
        confirmpassword:"",
        
    })
    const changeInput=(event)=>{
event.preventDefault();
const name=event.target.name;
const value=event.target.value;
setInput({...input,[name]:value})
    }

    const handleInput=async(event)=>{
event.preventDefault();
const {firstname,lastname,email,phone,password,confirmpassword}=input;


try{
const response=await fetch("/signup",{
    method:"post",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        firstname,lastname,email,phone,password,confirmpassword
    })
})

const data=await response.json();
if(response.status===404){
    
    toast.error("Plz filled all the data",{
        autoClose: 2000,
    })
}
if(response.status===408){
    
    toast.error("Plz filled right data",{
        autoClose: 2000,
    })

}
if(response.status===412){
   
    toast.warning("Your Email already exit",{
        autoClose: 2000,
    })
    
}
if(response.status===416){
    
    toast.warning("password not match confirm password",{
        autoClose: 2000,
    })
}
if(response.status===200){
  
    setInput({
        firstname:"",
        lastname:"",
        email:"",
        phone:"",
        password:"",
        confirmpassword:"",
    })
    
 
    window.alert("you Sucessfully login")
    navigate("/login")

}
}catch(error){
    console.log(error)
}
    }
  return (
    <form className='main-signup' style={{backgroundImage:`url(${image})`,backgroundPosition:"cover",backgroundRepeat:"no-repeat",backgroundSize:"cover"}} >
<ToastContainer style={{fontSize:"1.5rem",fontWeight:"500",textTransform:"capitalize"}}/>
        <div className="signup-header" style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh",flexDirection:'column'}}>
<div className='user-signup-page' style={{padding:"5rem 7rem 5rem 5rem ",borderRadius:'5rem',border:"0.1rem solid #fff"}}>

<div className='user-signup-1'style={{width:"40rem",height:'3rem',fontSize:"1.5rem",display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"1rem"}}>
   <AiOutlineUser style={{fontSize:"3rem",color:"#fff",marginRight:"0.5rem",}}/> <input type="text" placeholder='Firstname' style={{width:"100%",height:"100%",outline:"none",padding:"0.5rem 1.5rem",border:"none"}} id='firstname' name='firstname' value={input.firstname} onChange={changeInput}/>
</div>
<div className='user-signup-1'style={{width:"40rem",height:'3rem',fontSize:"1.5rem",display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"1rem"}}>
   <AiOutlineUser style={{fontSize:"3rem",color:"#fff",marginRight:"0.5rem"}}/> <input type="text" placeholder='Lastname' style={{width:"100%",height:"100%",outline:"none",padding:"0.5rem 1.5rem",border:"none"}} id='lastname' name='lastname' value={input.lastname} onChange={changeInput}/>
</div>
<div className='user-signup-1'style={{width:"40rem",height:'3rem',fontSize:"1.5rem",display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"1rem"}}>
   <TfiEmail style={{fontSize:"3rem",color:"#fff",marginRight:"0.5rem"}}/> <input type="email" placeholder='Email' style={{width:"100%",height:"100%",outline:"none",padding:"0.5rem 1.5rem",border:"none"}} id='email' name='email' value={input.email} onChange={changeInput}/>
</div>
<div className='user-signup-1'style={{width:"40rem",height:'3rem',fontSize:"1.5rem",display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"1rem"}}>
   <BiSolidPhoneCall style={{fontSize:"3rem",color:"#fff",marginRight:"0.5rem"}}/> <input type="number" placeholder='Phone' style={{width:"100%",height:"100%",outline:"none",padding:"0.5rem 1.5rem",border:"none"}} id='phone' name='phone' value={input.phone} onChange={changeInput}/>
</div>
<div className='user-signup-1'style={{width:"40rem",height:'3rem',fontSize:"1.5rem",display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"1rem"}}>
   <AiFillLock style={{fontSize:"3rem",color:"#fff",marginRight:"0.5rem"}}/> <input type="password" placeholder='Password' style={{width:"100%",height:"100%",outline:"none",padding:"0.5rem 1.5rem",border:"none"}} id='password' name='password' value={input.password} onChange={changeInput}/>
</div>
<div className='user-signup-1'style={{width:"40rem",height:'3rem',fontSize:"1.5rem",display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"1rem"}}>
   <AiFillUnlock style={{fontSize:"3rem",color:"#fff",marginRight:"0.5rem"}}/> <input type="password" placeholder='Confirmpassword' style={{width:"100%",height:"100%",outline:"none",padding:"0.5rem 1.5rem",border:"none"}} id='confirmpassword' name='confirmpassword' value={input.confirmpassword} onChange={changeInput}/>
</div>



<button type="button" className="btn btn-primary" style={{width:"30rem",fontSize:'2rem',marginLeft:'5.5rem',marginTop:"2rem"}} onClick={handleInput}>SignUp</button>
</div>




        </div>

        
    </form>
  )
}

export default Signup