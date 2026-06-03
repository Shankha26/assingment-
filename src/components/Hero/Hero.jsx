import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

// Import the exact assets
import purpleShape from '../../assets/purple_shape.png';
import groupLeft from '../../assets/hero_group_left.png';
import avatarHiker from '../../assets/hero_avatar_hiker.png';
import avatarHoodie from '../../assets/hero_avatar_hoodie.png';
import groupRight from '../../assets/hero_group_right.png';
import avatar7 from '../../assets/hero_avatar_7.png';
import avatar8 from '../../assets/hero_avatar_8.png';

export default function Hero() {
  const avatars = [
    { src: groupLeft, class: 'group-left', delay: 0.1, isGroup: true },
    { src: avatarHiker, class: 'avatar-hiker', delay: 0.2 },
    { src: avatarHoodie, class: 'avatar-hoodie', delay: 0.3 },
    { src: groupRight, class: 'group-right', delay: 0.4, isGroup: true },
    { src: avatar7, class: 'avatar-7', delay: 0.5 },
    { src: avatar8, class: 'avatar-8', delay: 0.6 }
  ];

  return (
    <section className="hero-section" id="home">
      {/* Decorative Wavy Lines (Left) */}
      <div className="hero-decor-left">
        <svg width="80" height="150" viewBox="0 0 80 150" fill="none">
          <path d="M10 10C35 40 -15 80 20 110C40 125 65 110 70 140" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M25 15C50 45 0 85 35 115" stroke="#FF5252" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4" />
        </svg>
      </div>

      {/* Decorative Purple Shape (Right) */}
      <div className="hero-decor-purple">
        <img src={purpleShape} alt="" className="purple-shape-img" />
      </div>

      <div className="container hero-container">
        {/* Heading */}
        <motion.div 
          className="hero-text-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-heading">
            The <span className="highlight-underline-yellow">thinkers and</span><br />
            doers were <span className="highlight-pill-pink">changing</span><br />
            the <span className="highlight-pill-green">status</span> Quo with
          </h1>
          
          <p className="hero-subheading">
            We are a team of strategists, designers communicators, researchers. Togeather,<br className="desktop-only-break" />
            we belive that progress only hghappens when you refuse to play things safe.
          </p>
        </motion.div>

        {/* Floating Avatar Arc */}
        <div className="hero-avatars-container">
          {avatars.map((avatar, idx) => (
            <motion.div
              key={idx}
              className={`hero-avatar-wrapper ${avatar.class} ${avatar.isGroup ? 'group-wrapper' : ''}`}
              initial={{ opacity: 0, scale: 0.5, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 70,
                delay: avatar.delay,
                duration: 0.6 
              }}
              whileHover={{ 
                scale: 1.08,
                zIndex: 10,
                transition: { duration: 0.2 }
              }}
            >
              <img 
                src={avatar.src} 
                alt={avatar.isGroup ? "Team Members" : `Team Member ${idx + 1}`} 
                className="hero-avatar"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
