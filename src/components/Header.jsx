import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo-new.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo-container">
          <img src={logo} alt="Tranquelent Logo" className="logo" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          
          <div 
            className="dropdown-container"
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <Link to="/services" className={`nav-link ${location.pathname.startsWith('/services') ? 'active' : ''}`}>
              Services <ChevronDown size={16} />
            </Link>
            
            <AnimatePresence>
              {isServicesDropdownOpen && (
                <motion.div 
                  className="dropdown-menu"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link to="/services/semiconductor-engineering" className="dropdown-item">Semiconductor Engineering</Link>
                  <Link to="/services/embedded-hardware-engineering" className="dropdown-item">Embedded & Hardware Engineering</Link>
                  <Link to="/services/software-digital-engineering" className="dropdown-item">Software & Digital Engineering</Link>
                  <Link to="/services/engineering-technology-consulting" className="dropdown-item">Engineering & Technology Consulting</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/industries" className={`nav-link ${location.pathname.startsWith('/industries') ? 'active' : ''}`}>Industries</Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About Us</Link>
          <Link to="/careers" className={`nav-link ${location.pathname === '/careers' ? 'active' : ''}`}>Careers</Link>
          <Link to="/insights" className={`nav-link ${location.pathname === '/insights' ? 'active' : ''}`}>Insights</Link>
        </nav>

        <div className="header-cta desktop-only">
          <Link to="/contact" className="btn btn-primary">Talk to Our Experts &rarr;</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mobile-nav-content">
              <Link to="/" className="mobile-link">Home</Link>
              <div className="mobile-dropdown-header">Services</div>
              <div className="mobile-sublinks">
                <Link to="/services/semiconductor-engineering" className="mobile-sublink">Semiconductor Engineering</Link>
                <Link to="/services/embedded-hardware-engineering" className="mobile-sublink">Embedded & Hardware</Link>
                <Link to="/services/software-digital-engineering" className="mobile-sublink">Software & Digital</Link>
                <Link to="/services/engineering-technology-consulting" className="mobile-sublink">Engineering Consulting</Link>
              </div>
              <Link to="/industries" className="mobile-link">Industries</Link>
              <Link to="/about" className="mobile-link">About Us</Link>
              <Link to="/careers" className="mobile-link">Careers</Link>
              <Link to="/contact" className="mobile-link">Contact Us</Link>
              
              <div className="mobile-cta-container">
                <Link to="/contact" className="btn btn-primary w-full">Talk to Our Experts</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
