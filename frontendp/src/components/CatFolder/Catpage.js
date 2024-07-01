import React, { useState, useEffect } from 'react';
import Card from '../Card';
import './Catpage.css';

function Catpage() {
  const [selectedColor, setSelectedColor] = useState('Default');

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const [selectedOrder, setSelectedOrder] = useState('High to low');
  const [catDataList, setCatDataList] = useState([]);

  const handleOrderChange = (sort) => {
    setSelectedOrder(sort);
  };

  useEffect(() => {
    fetch('catData.json')
      .then((response) => response.json())
      .then((data) => setCatDataList(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const sortedCatDataList = catDataList.slice().sort((a, b) => {
    const priceA = a.price;
    const priceB = b.price;

    if (selectedOrder === 'Low to High') {
      return priceA - priceB;
    } else {
      return priceB - priceA;
    }
  });

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
          
            <h3>Cat breeds</h3>
            <div className="Sort">
              <label>Sort By: </label>
              <select onChange={(e) => handleOrderChange(e.target.value)} value={selectedOrder}>
                <option value="Low to High">Low to High Price</option>
                <option value="High to low">High to Low Price</option>
              </select>
            </div>
          </div>
          <div className='h'>
            <hr />
          </div>
          <div className='container2'>
          {sortedCatDataList.map((catData) => (
            <Card
              key={catData.id}
              cardData={catData}
            />
          ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Catpage;
