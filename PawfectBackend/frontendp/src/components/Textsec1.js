import React from 'react'
import './Textsec1.css';
import { Link } from "react-router-dom";
import home1 from '../HomepageImages/Dogimg.png';
import home2 from '../HomepageImages/Catimg.png';
import home4 from '../HomepageImages/Fishimg.png';
import home3 from '../HomepageImages/Birdimg.png';
import home5 from '../HomepageImages/DogFood.png';
import home6 from '../HomepageImages/CatFood.png';
import home7 from '../HomepageImages/FishFood.png';
import home8 from '../HomepageImages/BirdFood.png';
const Textsec1 = () => {
  return (
    <>
     <div className='TextSec2Container'>
        <h1>Shop By Food</h1>
    <div className='Textsec1Box'>
      <Link to="/dogfood"><img id='im5'src={home5} alt="HOME5" /></Link>
      <Link to="/catfood"><img id='im6'src={home6} alt="HOME6" /></Link>
      <Link to="/fishfood"><img id='im7'src={home7} alt="HOME7" /></Link>
      <Link to="/birds"><img id='im8'src={home8} alt="HOME8" /></Link>
        </div> 
        </div>
    <div className='TextSec1Container'>
        <h1>Shop By Pets</h1>
    <div className='Textsec1Box'>
      <Link to="/dogs"><img id='im1'src={home1} alt="HOME1" /></Link>
      <Link to="/cats"><img id='im2'src={home2} alt="HOME2" /></Link>
      <Link to="/fish"><img id='im3'src={home3} alt="HOME3" /></Link>
      <Link to="/birds"><img id='im4'src={home4} alt="HOME4" /></Link>
        </div> 
        </div>
       
    </>
  );
};
export default Textsec1;
