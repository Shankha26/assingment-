import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        <a href="/" className="logo">
          Elementum
        </a>

        {/* Desktop Navigation */}
        <div className="nav-links">
          <a href="#home" className="nav-link">Home</a>
          <a href="#creator" className="nav-link">Creator</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="#faq" className="nav-link">FAQ</a>
        </div>

        <div className="nav-action">
          <button className="btn-login">Login</button>
        </div>

        {/* Mobile menu toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        <div className="mobile-links">
          <a href="#home" className="mobile-link" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#creator" className="mobile-link" onClick={() => setIsOpen(false)}>Creator</a>
          <a href="#services" className="mobile-link" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#contact" className="mobile-link" onClick={() => setIsOpen(false)}>Contact</a>
          <a href="#faq" className="mobile-link" onClick={() => setIsOpen(false)}>FAQ</a>
          <button className="btn-login-mobile" onClick={() => setIsOpen(false)}>Login</button>
        </div>
      </div>
    </nav>
  );
}
