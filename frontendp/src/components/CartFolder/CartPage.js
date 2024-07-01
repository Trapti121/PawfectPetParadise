import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cartcard from './Cartcard';
import './CartPage.css';
const CartPage = () => {
  const [cartData,setCartData] = useState([]);
  useEffect(()=>{
    async function getData() {
        const res = await axios.get('http://localhost:8000/getData');
        console.log(res.data);
        setCartData([...res.data]);
    }
    getData();
  },[])

  return (
    <>
    <div className='CartBox'>
      <div className='Header'>
        <h3>Cart Items</h3>
      </div>
      <div className='datacartbox'>
      {cartData.map((cartData)=>
      <Cartcard
            key={cartData.id}
            cardData={cartData}
          />
        )}
        </div>
    </div>
    </>
  )
}

export default CartPage;
