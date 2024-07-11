import React from 'react';
import {FaPhone, FaEnvelope, FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="shop-info">
         <div className='About_us'>
        <h3>Lovely Aquarium and Pet Shop</h3>
        <p>Shop No. 1, Wavare Plaza, Wavare Nagar, Near Pournima Sweet, Opp Godavri Mart, ITI Ambad Link Road, Kamatwade, Nashik</p>
        </div> 
        <div className="social-links">
          <div className='FB'>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></div>
          <div className='Insta'>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /> </a></div>
          <div className='Watsapp'>
          <a href="https://www.watsapp.com" target="_blank" rel="noopener noreferrer"><FaWhatsapp /> </a></div>
          <div className='Insta'>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /> </a></div>
        </div>
        </div>

        <div className='Support'>
          <h3>Support</h3>
            <ul>
              <li ><a href='#'>FAQ</a></li>
              <li><a href='#'>Privacy Policy</a></li>
              <li><a href='#'>Help</a></li>
              <li><a href='#'>Contact</a></li>
            </ul>
        </div>

        <div className='Shop'>
          <h3>Shop</h3>
            <ul>
              <li><a href='#'>Dog</a></li>
              <li><a href='#'>Cat</a></li>
              <li><a href='#'>Help</a></li>
              <li><a href='#'>Contact</a></li>
            </ul>
        </div>
          <div className='contact_us'>
            <h3>Contact Us</h3>
          <p><FaPhone />  9011680392</p>
          <p>  <FaEnvelope /> lovelypet@gmail.com</p>
          <p>  <FaWhatsapp /> 7274679011</p>
          </div>
         
        </div>
    </footer>
  );
};

export default Footer;

