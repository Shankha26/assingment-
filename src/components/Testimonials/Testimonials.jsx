import { motion } from 'framer-motion';
import './Testimonials.css';

// Import testimonial avatars
import avatar1 from '../../assets/testimonial_avatar_1.png';
import avatar2 from '../../assets/testimonial_avatar_2.png';
import avatar3 from '../../assets/testimonial_avatar_3.png';
import avatar4 from '../../assets/testimonial_avatar_4.png';
import avatar5 from '../../assets/testimonial_avatar_5.png';
import avatar6 from '../../assets/testimonial_avatar_6.png';
import avatar7 from '../../assets/testimonial_avatar_7.png';
import avatar8 from '../../assets/testimonial_avatar_8.png';

export default function Testimonials() {
  const floatingAvatars = [
    { src: avatar1, class: 'test-avatar-1', x: -30, y: -40, delay: 0.1 },
    { src: avatar2, class: 'test-avatar-2', x: -10, y: 15, delay: 0.3 },
    { src: avatar3, class: 'test-avatar-3', x: -25, y: 35, delay: 0.5 },
    { src: avatar4, class: 'test-avatar-4', x: -5, y: 80, delay: 0.7 },
    { src: avatar5, class: 'test-avatar-5', x: 25, y: -30, delay: 0.2 },
    { src: avatar6, class: 'test-avatar-6', x: 45, y: -50, delay: 0.4 },
    { src: avatar7, class: 'test-avatar-7', x: 30, y: 10, delay: 0.6 },
    { src: avatar8, class: 'test-avatar-8', x: 40, y: 60, delay: 0.8 }
  ];

  // Floating animation for avatars
  const floatAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="testimonials-section">
      <div className="container testimonials-container">
        
        {/* Section Heading */}
        <div className="testimonials-header">
          <h2 className="testimonials-heading">
            <span className="highlight-pill-green">What</span> our customer<br />
            says <span className="highlight-underline-yellow">About Us</span>
          </h2>
        </div>

        {/* Central Quote Card & Surrounding Avatars */}
        <div className="testimonials-card-wrapper">
          
          {/* Grouped container for floating/responsive avatars */}
          <div className="testimonials-avatars-group">
            {floatingAvatars.map((avatar, idx) => (
              <motion.div
                key={idx}
                className={`testimonial-avatar-wrapper ${avatar.class}`}
                variants={floatAnimation}
                animate="animate"
                custom={idx}
                style={{
                  transition: "transform 0.3s ease"
                }}
                whileHover={{ scale: 1.15, zIndex: 10 }}
              >
                <img src={avatar.src} alt={`Customer ${idx + 1}`} className="testimonial-avatar-img" />
              </motion.div>
            ))}
          </div>

          {/* Central Card */}
          <motion.div 
            className="testimonials-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Left Quote Icon */}
            <span className="quote-mark quote-left">“</span>
            
            <p className="testimonial-quote">
              Elementum delivered the site with inthe timeline as they requested. 
              Inthe end, the client found a 50% increase in traffic with in days since its launch. 
              They also had an impressive ability to use technologies that the company 
              hasn't used, which have also proved to be easy to use and reliable
            </p>

            {/* Right Quote Icon */}
            <span className="quote-mark quote-right">”</span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
