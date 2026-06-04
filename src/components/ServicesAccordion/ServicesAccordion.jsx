import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './ServicesAccordion.css';
import badgeImage from '../../assets/accordion_badge.png';

export default function ServicesAccordion() {
  const [activeIdx, setActiveIdx] = useState(0);

  const accordionItems = [
    {
      meta: 'Offer of multiple design options',
      title: 'Collaborative & partnership',
      description: 'We believe that true partnership is built on collaboration and trust. We work alongside you as an extension of your own team to explore multiple design alternatives and align on the optimal path forward.'
    },
    {
      meta: 'For target ROI of dynamic digital implementations',
      title: 'We talk about our weight',
      description: 'We are open about our capabilities, limits, and strength. By discussing realistic targets and resources, we align perfectly with your business goals to deliver maximum return on your digital investments.'
    },
    {
      meta: 'Better content control/digital',
      title: 'Piloting digital confidence',
      description: 'Unlock complete control over your content and digital footprint. We pilot systems that enable teams to update, manage, and scale their digital products with confidence and ease.',
      hasBadge: true
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="container services-container">
        <div className="services-header">
          <h2 className="services-heading">
            What we <span className="highlight-underline-yellow">can</span><br />
            <span className="highlight-pill-green">offer you!</span>
          </h2>
        </div>

        <div className="accordion-list">
          {accordionItems.map((item, idx) => {
            const isOpen = activeIdx === idx;
            return (
              <div 
                key={idx} 
                className={`accordion-item ${isOpen ? 'active' : ''}`}
                onClick={() => setActiveIdx(isOpen ? -1 : idx)}
              >
                {/* Meta column */}
                <div className="item-meta">
                  {item.meta}
                </div>

                {/* Main Content (Title and Description) */}
                <div className="item-main">
                  <div className="item-header">
                    <h3 className="item-title">
                      {item.title}
                      {item.hasBadge && (
                        <div className="item-badge-container">
                          <img src={badgeImage} alt="Confidence badge" className="item-badge" />
                        </div>
                      )}
                    </h3>
                    <motion.div 
                      className="item-arrow"
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight size={20} />
                    </motion.div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="item-body"
                      >
                        <p className="item-description">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
