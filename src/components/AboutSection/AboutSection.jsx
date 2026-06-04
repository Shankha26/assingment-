import { motion } from 'framer-motion';
import './AboutSection.css';
import aboutImage from '../../assets/about_meeting.png';

export default function AboutSection() {
  return (
    <section className="about-section" id="creator">
      {/* Background blur decorative element */}
      <div className="about-bg-blur"></div>

      <div className="container about-container">
        {/* Left Side: Content */}
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="about-heading">
            <span className="highlight-underline-yellow">Tomorrow should</span><br />
            be better than <span className="highlight-pill-green">today</span>
          </h2>
          
          <p className="about-paragraph">
            We are a team of strategists, designers communicators, researchers. 
            Togeather, we belive that progress only happens when you refuse 
            to play things safe.
          </p>

          <a href="#services" className="read-more-link">
            Read more <span className="arrow-line"></span>
          </a>
        </motion.div>

        {/* Right Side: Image and Shapes */}
        <motion.div 
          className="about-image-wrapper"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Offset Decorative Orange Triangle */}
          <div className="decor-triangle-about"></div>
          
          {/* Main Circular Meeting Image */}
          <div className="about-image-container">
            <img 
              src={aboutImage} 
              alt="Team discussing tomorrow" 
              className="about-image"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
