import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
export const PetDetails = ({ dogName, imageUrl,toggleShowForm }) => {
    const history=useNavigate();
    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
  const handleSubmit1 = (e) => {
        e.preventDefault();
        console.log('Enquiry submitted:', { name, email, phone, message, dogName });
      };
      async function handleSubmit(e){
              e.preventDefault();
              // console.log(email,name,phoneNumber,message);
              await axios.post("http://localhost:8000/EnquiryForm",{
                email,name,phone,message
              }).then((res)=>{
                  toggleShowForm(false)
              }).catch((e)=>console.log(e));
          }
  return (
    <div className='form1'>
   <form onSubmit={handleSubmit1}>
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

    <button type="submit" onClick={handleSubmit}>Submit Enquiry</button>
  </form>
  </div>
);
};

export default EnquiryForm;
