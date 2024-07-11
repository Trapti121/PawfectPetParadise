import React from 'react';
import Birdpage from '../components/BirdsFolder/Birdpage';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
function Birds() {
  return(
    <>
    <div><Navbar/></div>
    <div >
      <Birdpage/>
    </div>
    <div><Footer/></div>
   </>
  );
}

export default Birds;
