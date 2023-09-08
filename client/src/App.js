import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from './Home';
import Header from './MainHeader';
import Footer from './Footer';
import "./App.css";
import Signup from './Signup';
import Signin from './Signin';
import About from './About';
import Logout from './Logout';
import Item from "./Item";
import OneItem from './OneItem';
import OneNewItems from './OneNewItems';
import Cart from './Cart';
import SearchData from './SearchData';
import Success from './Success';
import Cancel from './Cancel';




const App = () => {
  return (
  <BrowserRouter>
  <Header/>
  <Routes>




    <Route path='/' element={<Home/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Signin/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/logout' element={<Logout/>}/>
    <Route path='/search' element={<SearchData/>}/>
    <Route path='/:id' element={<Item/>}/>
    <Route path='/:id/:name' element={<OneItem/>}/>
    <Route path='/:id/:name/:onenew' element={<OneNewItems/>}/>
    <Route path='/:id/:name/:onenew/:cartId' element={<Cart/>}/>
    <Route path='/success' element={<Success/>}/>
    <Route path='/cancel' element={<Cancel/>}/>

    
    
    
  </Routes>
  
  <Footer/>
  </BrowserRouter>
  )
}

export default App