import React from 'react';
import Dogpage from '../components/DogFolder/Dogpage';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
function Dogs() {
  return(
    <>
    <div><Navbar/></div>
    <div >
      <Dogpage/>
    </div>
    <div><Footer/></div>
   </>
  );
}

export default Dogs;

