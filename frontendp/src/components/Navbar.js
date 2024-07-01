import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Navbar.css";
import {FaEnvelope,FaShoppingCart} from 'react-icons/fa';
import logo from "../logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [click, setClick]= useState(false);
  const handleClick = () => setClick(!click);
  const auth = localStorage.getItem('userlogins');
  const logout=()=>{
    localStorage.clear();
    console.log("Logged out");
  }
  return (
    <>
    <div className="Nav">
    <div className="lgo">
        <Link to="/">
        <img src={logo} alt="HOME" />
        </Link>
        </div>
    <div className="header">
        <ul className={click? "nav-menu active": "nav-menu"}>
        <li className="a1">
          <Link to="/">Home</Link>
        </li>
        <li className="b1">
          <Link to="/Dogs">Dogs</Link>
        </li>
        <li className="c1">
          <Link to="/Cats">Cats</Link>
        </li>
        <li className="d1">
          <Link to="/Birds">Birds</Link>
        </li>
        <li className="d1">
          <Link to="/Fishes">Fish</Link>
        </li>
        <li className="d1">
          <Link to="/feedback">Feedback</Link>
        </li>
        
        </ul> 
          <div className="connect">
          <button className="loginbtn" >
          {auth? <Link onClick={logout} to="/login"  >Logout</Link>:  <Link to="/login"  >Login</Link>}
         </button>
         <div className="cart1">
          <Link to="/cart">
            <FaShoppingCart />
          </Link>
          <div className="para">{}</div>
         </div>
         {/* <div className="icon1">
          <p>
            <FaEnvelope/>
          </p>
         </div> */}
        </div>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
          <FaTimes size={20} style ={{color: "#fff"} }/>):
          (<FaBars size={20} />)}
        </div>
    </div>
    </div>
    </>
  );
};

export default Navbar;
