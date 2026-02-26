import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <div className="footer-eclipse">
            <div className="footer-sun"></div>
            <div className="footer-moon"></div>
          </div>
          <div className="footer-title">FRUMEFNI</div>
          <div className="footer-subtitle">The Elemental Contact</div>
        </div>

        <div className="footer-info">
          <div className="footer-section">
            <h4>The Event</h4>
            <p>August 12, 2026</p>
            <p>Iceland</p>
            <p>Total Solar Eclipse</p>
          </div>

          <div className="footer-section">
            <h4>Festival Pillars</h4>
            <p>CONNECT</p>
            <p>EXPLORE</p>
            <p>LEARN</p>
          </div>

          <div className="footer-section">
            <h4>Project Lead</h4>
            <p>Michael Brandon Lane</p>
          </div>
        </div>

        <div className="footer-quote">
          <p>"Where Earth, Cosmos, and Self converge in a moment of collective transformation"</p>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Frumefni: The Elemental Contact. All rights reserved.</p>
          <p className="footer-tagline">A pioneering fusion of radical wellness, performance art, and ethnographic research</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
