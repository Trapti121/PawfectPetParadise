import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Card from '../Card';
import axios from "axios";
import './Birdpage.css';

function Birdpage() {
  const [selectedColor, setSelectedColor] = useState('Default');
  const [selectedOrder, setSelectedOrder] = useState('Default');
  const [birdDataList, setBirdDataList] = useState([]);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleOrderChange = (sort) => {
    setSelectedOrder(sort);
  };
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8001/birds');
        console.log(response.data); 
        setBirdDataList(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  const sortedBirdDataList = birdDataList.slice().sort((a, b) => {
    const priceA = a.price;
    const priceB = b.price;

    if (selectedOrder === 'Low to High') {
      return priceA - priceB;
    } else {
      return priceB - priceA;
    }
  });

  console.log('rendered');
  
  return (
    <>

      <div className='Box'>
        <div>
          <Link to='/add-items'>
          <button>Add Birds</button>
          </Link>
          </div>
        <div className='Container'>
          <div className='head'>
            <div className="Size">
              <label>Size: </label>
              <select onChange={(e) => handleColorChange(e.target.value)} value={selectedColor}>
                <option value="Small">Small</option>
                <option value="Default">Medium</option>
                <option value="Large">Large</option>
              </select>
            </div>

            <h3>Bird breeds</h3>
            <div className="Sort">
              <label>Sort By: </label>
              <select onChange={(e) => handleOrderChange(e.target.value)} value={selectedOrder}>
                <option value="Low to High">Low to High Price</option>
                <option value="High to low">High to Low Price</option>
              </select>
            </div>
          </div>
          <div className='h'>
            <hr/>
          </div>
          {sortedBirdDataList.map((BirdData) => (
            <Card
              key={BirdData.id}
              cardData={BirdData}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Birdpage;
// import React, { useState, useEffect } from 'react';
// import Card from '../Card';
// import './Birdpage.css';
// function Birdpage() {
//   const [selectedColor, setSelectedColor] = useState('Default');

//   const handleColorChange = (color) => {
//     setSelectedColor(color);
//   };

//   const [selectedOrder, setSelectedOrder] = useState('Default');

//   const handleOrderChange = (sort) => {
//     setSelectedOrder(sort);
//   };
//   const [BirdDataList, setBirdDataList] = useState([]);
//   useEffect(() => {
//     fetch('BirdData.json')
//       .then((response) => response.json())
//       .then((data) => setBirdDataList(data))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);
//   const sortedBirdDataList = BirdDataList.slice().sort((a, b) => {
//     const priceA = a.price;
//     const priceB = b.price;

//     if (selectedOrder === 'Low to High') {
//       return priceA - priceB;
//     } else {
//       return priceB - priceA;
//     }
//   });
//   console.log('rendered');
//   return (
//     <>
//     <div className='Box'>
//     <div className='Container'>
//     <div className='head'>
//     <div className="Size">
//           <label>Size: </label>
//           <select onChange={(e) => handleColorChange(e.target.value)} value={selectedColor}>
//             <option value="Small">Small</option>
//             <option value="Default">Medium</option>
//             <option value="Large">Large</option>
//           </select>
//         </div >

//       <h3>Bird breeds</h3>
//       <div className="Sort">
//           <label>Sort By: </label>
//           <select onChange={(e) => handleOrderChange(e.target.value)} value={selectedOrder}>
//             <option value="Low to High">Low to High Price</option>
//             <option value="High to low">High to Low Price</option>
//           </select>
//      </div>
     
//      </div>
//      <div className='h'>
//       <hr/>
//      </div>
//       {sortedBirdDataList.map((BirdData) => (
//         <Card
        
//           key={BirdData.id}
//           cardData={BirdData}
//         />
//       ))}
      
//     </div>
//     </div>
//    </>
//   );
// }

// export default Birdpage;