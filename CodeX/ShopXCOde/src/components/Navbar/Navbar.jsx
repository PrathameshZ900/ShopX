import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ isLoggedIn, userName, handleLogout }) => {
  return (
    <>
      {/* Top Banner */}
      <div id="topper">
        <p>
          <strong>🎁 Get your holiday gifts in time!</strong> Order by 5PM PT on
          12/17 for standard shipping.{" "}
          <a href="#" style={{ textDecoration: "underline" }}>Shop Gifts</a>
        </p>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">Shop<span>X</span></Link>
        </div>
        <div className="search-container">
          <input
            type="text"
            id="searchbar"
            placeholder="Search products, categories..."
          />
          <button className="search-btn">
            <img src="https://www.svgrepo.com/show/522266/search.svg" alt="search img" />
          </button>
        </div>
        <ul className="navbar-links">
          {isLoggedIn && (
            <li>
              <Link to="/">
                Hi, {userName}! <div className="down-arrow"></div>
              </Link>
            </li>
          )}
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="navbar-buttons">
          {isLoggedIn ? (
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          ) : (
            <Link to="/login" className="login-btn">Login</Link>
          )}
          <button className="cart-btn">Cart</button>
        </div>
      </nav>

      {/* Secondary Navbar */}
      <nav className="navbar2">
        <ul className="navbar2-links">
          <li><Link to="/">Gift Guide</Link></li>
          <li><Link to="/products">New</Link></li>
          <li><Link to="/about">Women</Link></li>
          <li><Link to="/contact">Men</Link></li>
          <li><Link to="/">Kids</Link></li>
          <li><Link to="/products">Shoes</Link></li>
          <li><Link to="/about">Bag & Accessories</Link></li>
          <li><Link to="/contact">Home</Link></li>
          <li><Link to="/">Beauty</Link></li>
          <li><Link to="/products">Clearance</Link></li>
          <li><Link to="/about">Flash Events</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
