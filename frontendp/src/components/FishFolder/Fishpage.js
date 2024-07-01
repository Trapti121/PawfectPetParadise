import React, { useState, useEffect } from 'react';
import Card from '../Card';
import './Fishpage.css';
function Fishpage() {
  const [selectedColor, setSelectedColor] = useState('Default');

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const [selectedOrder, setSelectedOrder] = useState('Default');

  const handleOrderChange = (sort) => {
    setSelectedOrder(sort);
  };
  const [FishDataList, setFishDataList] = useState([]);

  useEffect(() => {
    // Fetch card data from the JSON file in the public folder
    fetch('FishData.json')
      .then((response) => response.json())
      .then((data) => setFishDataList(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  const sortedFishDataList = FishDataList.slice().sort((a, b) => {
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
    <div className='Container'>
    <div className='head'>
    <div className="Size">
          <label>Size: </label>
          <select onChange={(e) => handleColorChange(e.target.value)} value={selectedColor}>
            <option value="Small">Small</option>
            <option value="Default">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div >

      <h3>Fish breeds</h3>
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

      {sortedFishDataList.map((FishData) => (
        <Card
        
          key={FishData.id}
          cardData={FishData}
        />
      ))}
      
    </div>
    </div>
   </>
  );
}

export default Fishpage;