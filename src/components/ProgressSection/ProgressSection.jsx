import { motion } from 'framer-motion';
import './ProgressSection.css';
import progressImage from '../../assets/progress_work.png';

export default function ProgressSection() {
  return (
    <section className="progress-section">
      {/* Decorative Wavy SVG Connector (Desktop only) */}
      <div className="progress-connector-desktop">
        <svg viewBox="0 0 1000 300" fill="none" preserveAspectRatio="none">
          <path 
            d="M 800 -120 Q 750 150, 450 100 T 150 250" 
            stroke="#ff5252" 
            strokeWidth="2.5" 
            strokeLinecap="round"
            fill="none" 
          />
        </svg>
      </div>

      <div className="container progress-container">
        {/* Left Side: Image and Shapes */}
        <motion.div 
          className="progress-image-wrapper"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Top-Left Triangle */}
          <div className="decor-triangle-progress-1"></div>
          
          {/* Bottom-Right Triangle */}
          <div className="decor-triangle-progress-2"></div>
          
          {/* Main Circular Progress Image */}
          <div className="progress-image-container">
            <img 
              src={progressImage} 
              alt="Team collaborating at a desk" 
              className="progress-image"
            />
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div 
          className="progress-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="progress-heading">
            <span className="highlight-pill-green">See</span> how we can<br />
            <span className="highlight-underline-yellow">help you progress</span>
          </h2>
          
          <p className="progress-paragraph">
            We add a layer of fearless insights and action that allows change 
            makers to accelerate their progress in areas such as brand, design 
            digital, comms and social research.
          </p>

          <a href="#services" className="read-more-link">
            Read more <span className="arrow-line"></span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
