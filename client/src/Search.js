import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from './Context';

const Search = () => {
  const {state,text,SearchChangeFunction}=useContext(AppContext);
  const MenuData=()=>{
    if(state){
      return<>
      <NavLink to={"/signup"}><button type="button" className="btn btn-primary text-primary" style={{backgroundColor:"white",fontSize:"1.5rem"}}>Signup</button></NavLink>
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
   <div className="main-search" style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>

<NavLink style={{marginRight:"1rem",textDecoration:"none"}} to={`/search`} className={"search-box-all-items"}><input type="text" placeholder='Search for products,brands and more'  name='text' id='search' value={text}  onChange={SearchChangeFunction} autoComplete='off'/></NavLink>

<MenuData/>

   </div>
  )
}

export default Search