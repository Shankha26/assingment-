import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Newsletter.css';

// Import exact purple shape
import purpleShape from '../../assets/purple_shape.png';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setError('Email address is required.');
      return;
    }
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Success simulation
    setSuccess(true);
    setEmail('');
  };

  return (
    <section className="newsletter-section">
      {/* Decorative Wavy Lines (Top) */}
      <div className="newsletter-decor-top">
        <svg width="60" height="30" viewBox="0 0 60 30" fill="none">
          <path d="M5 25C15 5 20 25 30 5C40 25 45 5 55 25" stroke="#FF5252" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* Decorative Purple Shape (Right) */}
      <div className="newsletter-decor-purple">
        <img src={purpleShape} alt="" className="newsletter-purple-shape-img" />
      </div>

      <div className="container newsletter-container">
        <div className="newsletter-box">
          <h2 className="newsletter-heading">
            Subscribe to<br />our newsletter
          </h2>
          
          <p className="newsletter-subheading">
            To keep you updated on our latest news
          </p>

          {success ? (
            <motion.div 
              className="newsletter-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              🎉 Thank you! You've subscribed successfully.
            </motion.div>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`newsletter-input ${error ? 'invalid' : ''}`}
                />
                <button type="submit" className="btn-subscribe">
                  Subscribe Now
                </button>
              </div>
              {error && <span className="newsletter-error-text">{error}</span>}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
