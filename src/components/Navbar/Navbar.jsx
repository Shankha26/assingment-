import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
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
          <a href="#studio" className="nav-link">Studio</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="#faq" className="nav-link">FAQ's</a>
        </div>

        {/* Hamburger Menu Toggle (Three horizontal lines matching design) */}
        <button 
          className="navbar-hamburger-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={26} strokeWidth={1.5} />
          ) : (
            <svg width="24" height="18" viewBox="0 0 24 18" fill="none" className="custom-hamburger-icon">
              <line y1="1" x2="24" y1="1" stroke="#111111" strokeWidth="2" />
              <line y1="9" x2="24" y1="9" stroke="#111111" strokeWidth="2" />
              <line y1="17" x2="24" y1="17" stroke="#111111" strokeWidth="2" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile/Desktop Drawer Menu */}
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        <div className="mobile-links">
          <a href="#home" className="mobile-link" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#studio" className="mobile-link" onClick={() => setIsOpen(false)}>Studio</a>
          <a href="#services" className="mobile-link" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#contact" className="mobile-link" onClick={() => setIsOpen(false)}>Contact</a>
          <a href="#faq" className="mobile-link" onClick={() => setIsOpen(false)}>FAQ's</a>
        </div>
      </div>
    </nav>
  );
}
