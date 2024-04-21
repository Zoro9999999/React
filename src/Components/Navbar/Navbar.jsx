import React from "react";
import "./Navbar.css"
import { TiShoppingCart } from "react-icons/ti";
import { IoIosSearch } from "react-icons/io";
import {  useNavigate } from 'react-router-dom';


function Nav(){
  const navigation = useNavigate();
  function tocart (){
    navigation('/cart');
  }
  return(
    <>
    <div className="nav">
    <div className="brand">
      <h3>Partify</h3>
    </div>
    <div className="search">
      <input placeholder="Search Products " ></input>
      </div>
      <div >
      <button className="icon"><IoIosSearch/></button>
      </div>
    <div>
      
     <div>
      
      <button className="add" onClick={tocart}><TiShoppingCart /></button>
    
     </div>
   
    </div>
      </div>
    </>
    )
}
export default Nav;