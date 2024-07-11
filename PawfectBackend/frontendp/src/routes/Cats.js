import React from 'react';
import Catpage from '../components/CatFolder/Catpage';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
function Dogs() {
  return(
    <>
    <div><Navbar/></div>
    <div >
      <Catpage/>
    </div>
    <div><Footer/></div>
   </>
  );
}

export default Dogs;