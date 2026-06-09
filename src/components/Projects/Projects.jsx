import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi';
import { projectsData } from '../../data/portfolioData';
import GlowCard from '../GlowCard/GlowCard';
import TextReveal from '../TextReveal/TextReveal';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import './Projects.css';

const categories = [
  'all',
  'ai',
  'fullstack',
  'backend',
  'frontend',
  'dsa',
  'game',
];

const Projects = ({ setCursorVariant }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  const featuredProjects = projectsData.filter(p => p.featured);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={fadeInUp}>
            <span className="section-label">My Work</span>
          </motion.div>

          <TextReveal>
            <h2 className="section-title">
              Featured<br />
              <span className="gradient-text">Projects</span>
            </h2>
          </TextReveal>

          <motion.p className="section-subtitle" variants={fadeInUp}>
            A selection of projects that showcase my expertise in building modern web applications.
          </motion.p>

          {/* Featured Projects - Large Cards */}
          <div className="featured-projects">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                className={`featured-project ${i % 2 === 0 ? '' : 'reverse'}`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
              >
                <div className="featured-project-image">
                  <motion.div
                    className="project-image-wrapper"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    onMouseEnter={() => {
                      setHoveredProject(project.id);
                      setCursorVariant('text');
                    }}
                    onMouseLeave={() => {
                      setHoveredProject(null);
                      setCursorVariant('default');
                    }}
                  >
                    <img src={project.image} alt={project.title} loading="lazy" />
                    <div className="project-image-overlay">
                      <div className="project-overlay-links">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <FiGithub /> Code
                        </a>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <FiExternalLink /> Live
                        </a>
                      </div>
                    </div>
                    <div
                      className="project-image-glow"
                      style={{ background: `${project.color}20` }}
                    />
                  </motion.div>
                </div>

                <div className="featured-project-info">
                  <span className="project-overline" style={{ color: project.color }}>
                    Featured Project
                  </span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  
                  <div className="project-description-card">
                    <p>{project.description}</p>
                  </div>

                  <div className="project-tech-list">
                    {project.tags.map(tag => (
                      <span key={tag} className="project-tech-tag">{tag}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ y: -3 }}
                    >
                      <FiGithub />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ y: -3 }}
                    >
                      <FiExternalLink />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          <motion.div
            className="other-projects-header"
            variants={fadeInUp}
          >
            <h3>Other Noteworthy Projects</h3>
          </motion.div>

          {/* Filter buttons */}
          <motion.div className="project-filters" variants={fadeInUp}>
            {categories.map(cat => (
              <motion.button
                key={cat}
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </motion.button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="projects-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {filteredProjects.filter(p => !p.featured).map((project, i) => (
                <GlowCard
                  key={project.id}
                  className="project-card"
                  color={project.color}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  onMouseEnter={() => setCursorVariant('text')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  <div className="project-card-header">
                    <div className="project-card-folder">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                      </svg>
                    </div>
                    <div className="project-card-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <FiGithub />
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <FiExternalLink />
                      </a>
                    </div>
                  </div>

                  <h4 className="project-card-title">{project.title}</h4>
                  <p className="project-card-desc">{project.description}</p>

                  <div className="project-card-tags">
                    {project.tags.map(tag => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </GlowCard>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;