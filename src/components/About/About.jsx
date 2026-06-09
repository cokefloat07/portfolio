import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiLayout, FiZap, FiHeart } from 'react-icons/fi';
import GlowCard from '../GlowCard/GlowCard';
import TextReveal from '../TextReveal/TextReveal';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import './About.css';
import { personalInfo, aboutStats } from '../../data/portfolioData';
const aboutCards = [
  {
    icon: FiCode,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and well-documented code following industry best practices.',
    color: '#6c63ff'
  },
  {
    icon: FiLayout,
    title: 'Responsive Design',
    description: 'Crafting pixel-perfect layouts that adapt beautifully across all devices and screen sizes.',
    color: '#00d4ff'
  },
  {
    icon: FiZap,
    title: 'Performance',
    description: 'Optimizing for speed with lazy loading, code splitting, and efficient rendering strategies.',
    color: '#ff6b9d'
  },
  {
    icon: FiHeart,
    title: 'User Experience',
    description: 'Creating intuitive interfaces with meaningful animations and seamless interactions.',
    color: '#00ff88'
  }
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="about-content"
        >
          <motion.div variants={fadeInUp}>
            <span className="section-label">About Me</span>
          </motion.div>

          <TextReveal>
            <h2 className="section-title">
              Turning ideas into<br />
              <span className="gradient-text">digital reality</span>
            </h2>
          </TextReveal>

          <div className="about-grid">
            <motion.div className="about-text" variants={fadeInUp}>
  {/* Map over your bio paragraphs from portfolioData */}
  {personalInfo.bio.map((paragraph, i) => (
    <p key={i}>{paragraph}</p>
  ))}

  {/* Stats row */}
  <div className="about-stats-row">
    {aboutStats.map((stat, i) => (
      <motion.div
        key={stat.label}
        className="about-stat-item"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3 + i * 0.1 }}
      >
        <span className="about-stat-number">{stat.number}</span>
        <span className="about-stat-label">{stat.label}</span>
      </motion.div>
    ))}
  </div>

              <div className="about-tech-list">
    <h4>Technologies I work with:</h4>
    <div className="tech-tags">
      {['C++', 'Python', 'JavaScript', 'AI/ML', 'Node.js',
        'MongoDB', 'Flask', 'DSA', 'Unity', 'Linux'].map((tech, i) => (
        <motion.span
          key={tech}
          className="tech-tag"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5 + i * 0.05 }}
          whileHover={{ scale: 1.05, y: -2 }}
        >
          <span className="tech-tag-dot" />
          {tech}
        </motion.span>
      ))}
    </div>
  </div>
</motion.div>

            <motion.div className="about-cards" variants={fadeInUp}>
              {aboutCards.map((card, i) => (
                <GlowCard
                  key={card.title}
                  color={card.color}
                  className="about-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  <div className="about-card-icon" style={{ color: card.color }}>
                    <card.icon />
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </GlowCard>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;