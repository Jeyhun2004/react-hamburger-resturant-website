import React from 'react';
import './HomePage.css';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className='homepage-container'>
      <div className="header">

        <div className='navbar'>
          <div className="logo">
            <h1>BurgerHouse</h1>
          </div>
          <Link to="/" className="overlay-text">HOME</Link>
          <Link to="/menu" className="overlay-text">MENU</Link>
          <Link to="/about" className="overlay-text">ABOUT</Link>
          <div className="icon-navbar">
            <FaInstagram className='icons' />
            <FaFacebook className='icons' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
