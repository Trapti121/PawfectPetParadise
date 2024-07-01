import React, { useState } from 'react';
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';
import './EnquiryForm.css';
export const EnquiryForm = ({ dogName, imageUrl, toggleShowForm }) => {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(e){
    e.preventDefault();
    try{
      await axios.post("http://localhost:8000/EnquiryForm",{
        email,name,phone,message
      }).then(res=>{
        if(res.data==="notexist"){
            history("/")
        }
        else if(res.data==="exist"){
            alert("Enquiry Already Sent!!!")
            history("/")
        }
    })
    .catch(e=>{
        alert("wrong details")
        console.log(e);
    });
      
    }
    catch(e){
      alert("Something went wrong")
      console.log(e);
    }
  }
  return (
    <div className='form1'>
      <form onSubmit={handleSubmit}>
        <h2>Product Enquiry Form</h2>
        <div className="product-info">
          <img src={imageUrl} alt={dogName} className="mini-image" />
          <span>{dogName}</span>
        </div>
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button type="submit">Submit Enquiry</button>
      </form>
    </div>
  );
};

export default EnquiryForm;
