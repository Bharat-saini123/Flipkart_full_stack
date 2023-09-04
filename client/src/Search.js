import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from './Context';

const Search = () => {
  const {state}=useContext(AppContext);
  const MenuData=()=>{
    if(state){
      return<>
      <NavLink to={"/signup"}><button type="button" className="btn btn-primary text-primary" style={{backgroundColor:"white",fontSize:"1.5rem"}}>Sign up </button></NavLink>
      </>
    }
    else{
      return<>
      <NavLink to={"/signup"}><button type="button" className="btn btn-primary text-primary" style={{backgroundColor:"white",fontSize:"1.5rem"}}>Sign up </button></NavLink>
      <NavLink to={"/login"}><button type="button" className="btn btn-primary text-primary" style={{backgroundColor:"white",fontSize:"1.5rem",marginLeft:"1rem"}}>Login </button></NavLink>
      </>
    }
  }
  return (
   <div className="main-search" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>

<div style={{width:"30rem",height:"3rem",marginRight:"1rem"}}><input type="text" placeholder='Search for products,brands and more' style={{width:"100%",height:"100%",outline:"none",border:"none",display:"block",padding:"0.5rem 1.5rem",fontSize:'1.5rem'}}/></div>

<MenuData/>

   </div>
  )
}

export default Search