import React from 'react';
import Navbar from '../components/Navbar';
import '../components/home.css';
import Textsec from '../components/Textsec';
import Textsec1 from '../components/Textsec1';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <>
    <div>
      <Navbar/>
      <Textsec/>
      <Textsec1/>
      <Footer/> 
    </div>
    </>
  );
};

export default Home;
