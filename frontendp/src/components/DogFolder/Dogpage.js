import React, { useState, useEffect } from 'react';
import Card from '../Card';
import './Dogpage.css';

const Dogpage = () => {
  const [selectedColor, setSelectedColor] = useState('Default'); 
  const [searchText, setSearchText]= useState("");
  const handleColorChange = (size) => { 
  };

  const [selectedOrder, setSelectedOrder] = useState('Default');
  
  const handleOrderChange = (sort) => {
    setSelectedOrder(sort);
  };

  const [dogDataList, setdogDataList] = useState([]);
  useEffect(() => {
    fetch('dogData.json')
      .then((response) => response.json())
      .then((data) => setdogDataList(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const filteredDogDataList = dogDataList.filter((dogData) => {
    if (selectedColor === 'Default' || dogData.size === selectedColor) {
      return true;
    }
    return false;
  });

  const sortedDogDataList = filteredDogDataList.slice().sort((a, b) => {
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
      <div className='Box'><div className='search'
       value={searchText} 
       onChange={(e)=>{
           setSearchText(e.target.value);
      }}>
          <input type="text" className='search-box' />
          <button className='searchbtn'
          onClick={()=>{
            
            console.log(searchText);
            const newList= dogDataList.filter(
              (dogData)=>dogData.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(newList);
            setdogDataList(newList);
          }}>Search</button>
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
            </div >

            <h3>Dog breeds</h3>
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

          {dogDataList.map((dogData) => (
            <Card
              key={dogData.id}
              cardData={dogData}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Dogpage;
