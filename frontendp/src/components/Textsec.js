import React from 'react'
import './Textsec.css';
import { Link } from "react-router-dom";
import {useState} from "react";
import home1 from '../HomepageImages/cat.jpg';
import home2 from '../HomepageImages/fish.jpg';
import home4 from '../HomepageImages/dog.jpg';
import home3 from '../HomepageImages/petShop.avif';
import home5 from '../HomepageImages/pws.png';
const Textarea = () => {
  // const [btnName, setBtnName]= useState("Login");
  return (
    <>
    <div className='FullTextsec'>
    <div className='text'>
      <h1>Lovely Aquarium </h1>
      <h1> And  Pet Shop</h1>
    </div>

      <div className='LR'>
        <div className="e1">
        {/* <p onClick={()=>{
          setBtnName("Logout");
        }}>  */}
        {/* <Link to="/login">{btnName}
        </Link> */}
          {/* <Link to="/login">
          {btnName}</Link> */}
        {/* </p> */}
       </div>
       <div className="e2">
       <Link to="/register">Register</Link>
       </div>
        
      </div>
      <div className='paws'>
      <img id='img5'src={home5} alt="HOME1" />
      </div>
    <div className='ImgBox'>
      <div className='ImgBox1'>
        <img id='img1'src={home1} alt="HOME1" />
        <img id='img2'src={home2} alt="HOME2" />
        </div>
        <div className="ImgBox2">
        <img id='img3'src={home3} alt="HOME3" />
        <img id='img4'src={home4} alt="HOME4" />
        </div>
        </div>
        </div>
    </>
  );
};

export default Textarea;
