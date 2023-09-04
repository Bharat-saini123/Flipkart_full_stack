import React from 'react'
import Navbar from './Navbar'
import Search from './Search'

const Header = () => {
  return (
   <div className="main-header bg-primary" style={{display:"flex",justifyContent:"center",alignItems:"center",padding:"1.5rem 3rem",}}>
<Search/>
<Navbar/>


   </div>
  )
}

export default Header