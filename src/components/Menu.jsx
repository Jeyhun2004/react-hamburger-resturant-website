import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

function Menu() {
  const menuItems = [
    {
      image: "https://kebanet.restapp.com/uploads/36384/c73aede5e07507e6efa9579dbda00d00-medium.jpg",
      cart_title: "Beef Burger",
      cart_text: "Beef (Cheddar Cheese, Caramelized Onions, Pickles, Greens) + French Fries + Drink",
      price: "20"
    },
    {
      image: "https://kebanet.restapp.com/uploads/36384/d570ada6fdf9c167b3f27937a916df00-medium.jpg",
      cart_title: "Sweet Chili Sauce Chicken Burger Menu",
      cart_text: "Chicken (Mayonnaise, Pickles, Sweet Chili Sauce, Greens) French Fries and Drink",
      price: "15"
    },
    {
      image: "https://kebanet.restapp.com/uploads/36384/f5817726cb5ea927a1e15d122d9801b1-medium.jpg",
      cart_title: "Buffalo Burger Menu",
      cart_text: "Buffalo Burger + French Fries + Drink",
      price: "18"
    },
  ];

  return (
    <div className="menu-container">
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
      <div className="card-container">
        {menuItems.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} className="card-img-top" alt="Card Image" />
            <div className="card-body">
              <h5 className="card-title">{item.cart_title}</h5>
              <p className="card-text">{item.cart_text}</p>
              <a href="#" className="btn">Buy</a>
              <h3 className="price">${item.price}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
