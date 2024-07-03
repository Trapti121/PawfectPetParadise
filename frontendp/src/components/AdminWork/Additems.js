// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// export const Additems = () => {
//   const history = useNavigate();
//   const [price, setPrice] = useState('');
//   const [name, setName] = useState('');
//   const [type, setType] = useState('');
//   const uploadImage=()=>{

//   }
//   return (
//     <div className='form1'>
//       <form >
//         <h2>Add </h2>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />

//         <label htmlFor="name">Type:</label>
//         <input
//           type="text"
//           id="type"
//           value={type}
//           onChange={(e) => setType(e.target.value)}
//           required
//         />

//         <label htmlFor="price">Price:</label>
//         <input
//           type="price"
//           id="price"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           required
//         />

//          <label >Upload Image :
//           <input type='file' accept="image/*" onChange={uploadImage} />
//         </label>
        

//         <button type="submit">Add</button>
//       </form>
//     </div>
//   );
// };

// export default Additems;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export const Additems = () => {
  const history = useNavigate();
  const [price, setPrice] = useState('');
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('price', price);
      formData.append('type', type);
      formData.append('image', image);

      await axios.post("http://localhost:8001/adddata", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      // Optionally, redirect user to another page after successful submission
      history('/');
    } catch (error) {
      console.error("Error occurred while submitting data:", error);
      alert("Failed to submit data. Please try again.");
    }
  }

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  }

  return (
    <div className='form1'>
      <form onSubmit={handleSubmit}>
        <h2>Add </h2>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="type">Type:</label>
        <input
          type="text"
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        />

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <label>
          Upload Image:
          <input type='file' accept="image/*" onChange={handleImageUpload} />
        </label>
        
        <button type="submit">ADD DATA</button>
      </form>
    </div>
  );
};

export default Additems;
