import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'; // CSS dosyasını içe aktar

function About() {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <h1>BurgerHouse</h1>
        </div>
        <div className="nav-links">
          <Link to="/" className="overlay-text">HOME</Link>
          <Link to="/menu" className="overlay-text">MENU</Link>
          <Link to="/about" className="overlay-text">ABOUT</Link>
        </div>
      </div>
      <div className="about-container">
        <div className="about-content">
          <h1>About Us</h1>
          <p>
            Welcome to BurgerHouse, where we bring you the finest burgers made from the highest quality ingredients. 
            Our mission is to provide delicious, gourmet burgers in a welcoming and casual environment. 
            With a diverse menu that caters to all tastes, we're committed to offering something for everyone. 
            Our team is passionate about great food and exceptional service, making every visit to BurgerHouse a memorable experience. 
            Thank you for choosing us, and we look forward to serving you!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
