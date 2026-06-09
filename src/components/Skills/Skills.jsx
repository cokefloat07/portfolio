import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillsData } from '../../data/portfolioData';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import TextReveal from '../TextReveal/TextReveal';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={fadeInUp}>
            <span className="section-label">Skills & Expertise</span>
          </motion.div>

          <TextReveal>
            <h2 className="section-title">
              Technologies I<br />
              <span className="gradient-text">work with</span>
            </h2>
          </TextReveal>

          <motion.p className="section-subtitle" variants={fadeInUp}>
            A collection of technologies and tools I use to bring digital products to life.
          </motion.p>

          {/* Category tabs */}
          <motion.div className="skills-tabs" variants={fadeInUp}>
            {skillsData.map((cat, i) => (
              <motion.button
                key={cat.category}
                className={`skills-tab ${activeCategory === i ? 'active' : ''}`}
                onClick={() => setActiveCategory(i)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  borderColor: activeCategory === i ? cat.color : 'transparent',
                  color: activeCategory === i ? cat.color : 'var(--text-secondary)'
                }}
              >
                {cat.category}
              </motion.button>
            ))}
          </motion.div>

          {/* Skills grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="skills-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {skillsData[activeCategory].skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  className="skill-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <div className="skill-card-inner">
                    <div className="skill-icon" style={{ color: skill.color }}>
                      <skill.icon />
                    </div>
                    <h3 className="skill-name">{skill.name}</h3>
                    <div className="skill-bar-container">
                      <motion.div
                        className="skill-bar"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ delay: 0.5 + i * 0.1, duration: 1, ease: 'easeOut' }}
                        style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)` }}
                      />
                    </div>
                    <span className="skill-level">{skill.level}%</span>
                  </div>

                  {/* Glow effect on hover */}
                  <div
                    className="skill-card-glow"
                    style={{ background: `radial-gradient(circle, ${skill.color}15, transparent 70%)` }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;