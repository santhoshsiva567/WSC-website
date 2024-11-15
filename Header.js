import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";  // For React Router Link
import './Header.css';

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <header className="header-container">
      <div className="navbar-content">
        {/* Logo */}
        <div className="logo-container" onClick={closeMenu}>
          <Link to="#home" className="logo">
            <img src="path-to-your-logo.png" alt="Logo" />
          </Link>
        </div>

        {/* Desktop Navbar */}
        <nav className="nav-links">
          <a href="#home" className="nav-item" onClick={closeMenu}>
            Home
          </a>
          <a href="#About" className="nav-item" onClick={closeMenu}>
            About
          </a>
          <a href="#Ourservices" className="nav-item" onClick={closeMenu}>
            Services
          </a>
          <a href="#PackageList" className="nav-item" onClick={closeMenu}>
            Package
          </a>
          <a href="#Blogcard" className="nav-item" onClick={closeMenu}>
            Blogs
          </a>
          <a href="#Websitereview" className="nav-item" onClick={closeMenu}>
            Reviews
          </a>
          <a href="#Contact" className="nav-item" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        {/* Login Button */}
        <div className="login-container">
          <a href="https://app.westayclose.in/login">
            <button className="login-btn">Login</button>
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="mobile-menu-icon" onClick={handleChange}>
          {menu ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="mobile-menu">
          <a href="#home" className="mobile-nav-item" onClick={closeMenu}>
            Home
          </a>
          <a href="#About" className="mobile-nav-item" onClick={closeMenu}>
            About
          </a>
          <a href="#Ourservices" className="mobile-nav-item" onClick={closeMenu}>
            Services
          </a>
          <a href="#PackageList" className="mobile-nav-item" onClick={closeMenu}>
            Package
          </a>
          <a href="#Blogcard" className="mobile-nav-item" onClick={closeMenu}>
            Blogs
          </a>
          <a href="#Websitereview" className="mobile-nav-item" onClick={closeMenu}>
            Reviews
          </a>
          <a href="#Contact" className="mobile-nav-item" onClick={closeMenu}>
            Contact
          </a>
          <a href="https://app.westayclose.in/login" className="mobile-login-btn">
            Login
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
