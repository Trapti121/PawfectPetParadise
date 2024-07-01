import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cartcard.css';
import EnquiryForm from '../Enquiry/EnquiryForm';
import {FaPlusCircle, FaMinusCircle} from 'react-icons/fa';
import axios from 'axios';
const Cartcard = ({ cardData }) => {
  const [showForm, setShowForm] = useState(false);
  const [count, setCount] =useState(1);
  const sendData = async ()=>{
    const res = await axios.post('http://localhost:8000/postData', cardData);
    // console.log(res);
  }

  function toggleShowForm(value) {
    setShowForm(value);
  } 

  return (
    
    <div className="cardcart">
      <div className='cartImgbx'>
        <img src={cardData.imageUrl} alt={cardData.name} className="cartcard-image" />
      </div>
      <div className="cart-card-content">
        <h2 className="cart-card-title"> <span name={cardData.name}>{cardData.name}</span></h2>
        <div className='cartprice'>
          <p>Price:   {cardData.price}</p>
          <div className="cartcart">  
          <p><FaPlusCircle onClick={()=>{
            setCount(count+1);
          }}/></p>
          <p><FaMinusCircle onClick={()=>{
            setCount(count-1);
          }}/></p>
          </div>
          
        </div>
        <div className='cartDetail'>
          {showForm ? (
            <EnquiryForm dogName={cardData.name} imageUrl={cardData.imageUrl} toggleShowForm = {toggleShowForm} />
          ) : (
            <Link
              to="#"
              className="cartdetails-button"
              onClick={() => toggleShowForm(true)}>
              Send Enquiry
            </Link>
          )}
        </div>
        <div className='itemcount'>
           count: {count}
        </div>
      </div>
    </div>
  );
};

export default Cartcard;