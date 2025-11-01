import React from 'react';
import { HiMail } from 'react-icons/hi';
import { FaPhone, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-text">
          <h1 className="name">SAKSHI SANKPAL</h1>
          <p className="title">Civil & Structural Engineer | Heriot Watt University</p>
          <div className="contact-info">
            <a href="mailto:sakshisankpal00@gmail.com" className="contact-link">
              <HiMail className="icon" /> sakshisankpal00@gmail.com
            </a>
            <a href="tel:+917249207272" className="contact-link">
              <FaPhone className="icon" /> +91 7249207272
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link">
              <FaLinkedin className="icon" /> LinkedIn
            </a>
            <span className="location">
              <FaMapMarkerAlt className="icon" /> UK / India
            </span>
          </div>
        </div>
        
        <div className="header-image">
          <img src="/images/profile.jpg" alt="Sakshi Sankpal - Civil Engineer" />
        </div>
      </div>
    </header>
  );
};

export default Header;