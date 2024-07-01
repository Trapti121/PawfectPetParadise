import React from 'react';
import Fishpage from '../components/FishFolder/Fishpage';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
function Fishes() {
  return(
    <>
    <div><Navbar/></div>
    <div >
      <Fishpage/>
    </div>
    <div><Footer/></div>
   </>
  );
}

export default Fishes;