import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';
import EnquiryForm from './Enquiry/EnquiryForm';
import {FaShoppingCart} from 'react-icons/fa';
import axios from 'axios';
const Card = ({ cardData }) => {
  const [showForm, setShowForm] = useState(false);

  const sendData = async ()=>{
    const res = await axios.post('http://localhost:8000/postData', cardData);
    // console.log(res);
  }

  function toggleShowForm(value) {
    setShowForm(value);
  } 

  return (
    
    <div className="card">
      <div className='Imgbx'>
        <img src={cardData.imageUrl} alt={cardData.name} className="card-image" />
      </div>
      <div className="card-content">
        <h2 className="card-title"> <span name={cardData.name}>{cardData.name}</span></h2>
        <div className='price'>
          <p>Price:   {cardData.price}</p>
          <div className="cart">
          <p><FaShoppingCart onClick={sendData}/></p>
          </div>
          
        </div>
        <div className='Detail'>
          {showForm ? (
            <EnquiryForm dogName={cardData.name} imageUrl={cardData.imageUrl} toggleShowForm = {toggleShowForm} />
          ) : (
            <Link
              to="#"
              className="details-button"
              onClick={() => toggleShowForm(true)}>
              Send Enquiry
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;




