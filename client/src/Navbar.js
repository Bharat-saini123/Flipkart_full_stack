import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart,AiFillHome } from "react-icons/ai";
import { AppContext } from './Context';

const Navbar = () => {

const {state}=useContext(AppContext);
const Menu=()=>{
  if(state){
    return <>
 <NavLink to="#" style={{margin:"1rem",textDecoration:"none",color:"white",fontWeight:"bold"}}>
    Become a Seller

</NavLink>
<NavLink to="#" style={{margin:"1rem",textDecoration:"none",color:"white",fontWeight:"bold"}}>
  More

</NavLink>
<NavLink to="/" style={{textDecoration:"none",margin:"1rem",color:"white",fontWeight:"bold",fontSize:"1.5rem"}}> <AiFillHome style={{fontSize:"2rem",textDecoration:"none",color:"white",fontWeight:"bold",marginRight:"0.3rem",marginBottom:"0.5rem"}}/>Home</NavLink>
{/* <NavLink to="/cart" style={{textDecoration:"none",margin:"1rem",color:"white",fontWeight:"bold"}}>
<AiOutlineShoppingCart style={{fontSize:"2rem",marginLeft:"1rem",textDecoration:"none",color:"white",fontWeight:"bold"}}/><span>Cart</span> */}

{/* </NavLink> */}
<NavLink to={"/about"} style={{textDecoration:"none",margin:"1rem",color:"white",fontWeight:"bold"}}>About</NavLink>
<NavLink to={"/logout"} style={{textDecoration:"none",margin:"1rem",color:"white",fontWeight:"bold"}}>Logout</NavLink>
    
    </>
  }
  else{
    return<>
<NavLink to="#" style={{margin:"1rem",textDecoration:"none",color:"white",fontWeight:"bold"}}>
    Become a Seller

</NavLink>
<NavLink to="#" style={{margin:"1rem",textDecoration:"none",color:"white",fontWeight:"bold"}}>
  More

</NavLink>
<NavLink to="/" style={{textDecoration:"none",margin:"1rem",color:"white",fontWeight:"bold",fontSize:"1.5rem"}}> <AiFillHome style={{fontSize:"2rem",textDecoration:"none",color:"white",fontWeight:"bold",marginRight:"0.3rem",marginBottom:"0.5rem"}}/>Home</NavLink>
    </>
  }
}
  return (
    <div style={{fontSize:"1.5rem"}}>
<Menu/>

    </div>
  )
}

export default Navbar