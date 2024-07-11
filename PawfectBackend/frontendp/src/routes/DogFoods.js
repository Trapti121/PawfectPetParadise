import React from 'react';
import DogFood from '../components/DogFolder/DogFood';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
function Dogs() {
  return(
    <>
    <div><Navbar/></div>
    <div >
      <DogFood/>
    </div>
    <div><Footer/></div>
   </>
  );
}

export default Dogs;
