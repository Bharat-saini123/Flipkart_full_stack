import React from 'react'
import Navbar from './Navbar'
import Search from './Search'

const Header = () => {
  return (
   <div className="main-header-all-box bg-primary" >
<Search/>
<Navbar/>


   </div>
  )
}

export default Header