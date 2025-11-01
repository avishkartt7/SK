import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Sakshi Sankpal. All rights reserved.</p>
        <div className="footer-links">
          <a href="mailto:sakshisankpal00@gmail.com">Email</a>
          <a href="tel:+917249207272">Phone</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;