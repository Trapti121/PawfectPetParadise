import React, { useState, useEffect } from 'react';
import Card from '../Card';
import './Catpage.css';
function CatFood() {
    const [selectedOrder, setSelectedOrder] = useState('Default');
    const [FoodDataList, setFoodDataList] = useState([]);
  
    const handleOrderChange = (sort) => {
      setSelectedOrder(sort);
    };
  
    useEffect(() => {
      fetch('FoodData.json')
        .then((response) => response.json())
        .then((data) => {
          const filteredData = data.filter((FoodData) => FoodData.type === 'Cat');
          setFoodDataList(filteredData);
        })
        .catch((error) => console.error('Error fetching data:', error));
    }, []);
  
    const sortedFoodDataList = FoodDataList.slice().sort((a, b) => {
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
              <h3>Cat Food</h3>
              <div className="Sort">
                <label>Sort By: </label>
                <select onChange={(e) => handleOrderChange(e.target.value)} value={selectedOrder}>
                  <option value="Default">Default</option>
                  <option value="Low to High">Low to High Price</option>
                  <option value="High to low">High to Low Price</option>
                </select>
              </div>
            </div>
            <div className='h'>
              <hr />
            </div>
            <div className='container2'>
              {sortedFoodDataList.map((FoodData) => (
                <Card
                  key={FoodData.id}
                  cardData={FoodData}
                />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default CatFood;