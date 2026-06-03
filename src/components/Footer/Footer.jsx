import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Top Separator Line */}
        <div className="footer-line"></div>

        {/* Footer Columns */}
        <div className="footer-columns">
          {/* Column 1: Company */}
          <div className="footer-column">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><a href="#about">Press</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>

          {/* Column 2: Terms & Policies */}
          <div className="footer-column">
            <h4 className="footer-title">Terms & Policies</h4>
            <ul className="footer-links">
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#cookies">Cookies</a></li>
              <li><a href="#accessibility">Accessibility</a></li>
            </ul>
          </div>

          {/* Column 3: Follow Us */}
          <div className="footer-column">
            <h4 className="footer-title">Follow Us</h4>
            <ul className="footer-links">
              <li><a href="#instagram" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="#linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="#dribbble" target="_blank" rel="noopener noreferrer">Dribbble</a></li>
              <li><a href="#twitter" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
          </div>

          {/* Column 4: Contact/Address */}
          <div className="footer-column">
            <h4 className="footer-title">Terms & Policies</h4> {/* Matches the Figma screenshot layout containing contact info in the 4th col */}
            <p className="footer-text">
              88 Whitechapel Rd,<br />
              London E1 1AD,<br />
              United Kingdom
            </p>
            <p className="footer-email">
              <a href="mailto:info@elementum.com">info@elementum.com</a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p className="copyright-text">© 2026 Elementum. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
