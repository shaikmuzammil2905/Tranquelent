import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-latest.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/">
              <img src={logo} alt="Tranquelent Logo" className="footer-logo" />
            </Link>
            <p className="footer-tagline">ENGINEERING WHAT'S NEXT</p>
            <p className="footer-description">
              A semiconductor and engineering technology services company helping technology-driven organizations engineer intelligent systems across silicon, embedded platforms and software.
            </p>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-title">Navigation</h4>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/industries">Industries</Link>
              <Link to="/about">About Us</Link>
              <Link to="/careers">Careers</Link>
              <Link to="/contact">Contact Us</Link>
              <Link to="/insights">Insights</Link>
            </div>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-title">Capabilities</h4>
            <div className="footer-links">
              <Link to="/services/semiconductor-engineering">Semiconductor Engineering</Link>
              <Link to="/services/embedded-hardware-engineering">Embedded & Hardware</Link>
              <Link to="/services/software-digital-engineering">Software & Digital</Link>
              <Link to="/services/engineering-technology-consulting">Technology Consulting</Link>
            </div>
          </div>

          <div className="footer-contact">
            <h4 className="footer-title">Contact</h4>
            <div className="footer-address">
              <p><strong>USA Headquarters:</strong></p>
              <p>5900 Balcones Drive STE 100</p>
              <p>Austin, TX 78731</p>
              <p>USA</p>
            </div>
            <div className="footer-address">
              <p><strong>India:</strong></p>
              <p>Bangalore, Karnataka, India</p>
            </div>
            <div className="footer-email">
              <p><strong>Email:</strong></p>
              <a href="mailto:contact@tranquelent.com">contact@tranquelent.com</a>
            </div>
            <div className="footer-social">
              <a href="https://www.linkedin.com/company/tranquelent/" target="_blank" rel="noopener noreferrer" className="social-link">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Tranquelent Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
