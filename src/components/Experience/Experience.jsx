import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experienceData } from '../../data/portfolioData';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import TextReveal from '../TextReveal/TextReveal';
import './Experience.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={fadeInUp}>
            <span className="section-label">Career Path</span>
          </motion.div>

          <TextReveal>
            <h2 className="section-title">
              Where I've<br />
              <span className="gradient-text">worked</span>
            </h2>
          </TextReveal>

          <div className="experience-content">
            {/* Timeline tabs */}
            <motion.div className="experience-tabs" variants={fadeInUp}>
              {experienceData.map((exp, i) => (
                <motion.button
                  key={exp.id}
                  className={`experience-tab ${activeTab === i ? 'active' : ''}`}
                  onClick={() => setActiveTab(i)}
                  whileHover={{ x: 5 }}
                >
                  <span className="tab-indicator" />
                  {exp.company}
                </motion.button>
              ))}
              <motion.div
                className="tab-highlight"
                animate={{ y: activeTab * 52 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            </motion.div>

            {/* Experience details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                className="experience-details"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="exp-role">
                  {experienceData[activeTab].role}{' '}
                  <span className="exp-company">
                    @{' '}
                    <a href={experienceData[activeTab].companyUrl} target="_blank" rel="noopener noreferrer">
                      {experienceData[activeTab].company}
                    </a>
                  </span>
                </h3>

                <p className="exp-duration">{experienceData[activeTab].duration}</p>

                <ul className="exp-list">
                  {experienceData[activeTab].description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <span className="exp-arrow">▹</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>

                <div className="exp-tech-tags">
                  {experienceData[activeTab].technologies.map((tech) => (
                    <span key={tech} className="exp-tech-tag">{tech}</span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;