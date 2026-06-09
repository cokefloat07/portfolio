import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDownRight, FiDownload } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import useTypewriter from '../../hooks/useTypewriter';
import MagneticButton from '../MagneticButton/MagneticButton';
import { personalInfo, socialLinks } from '../../data/portfolioData';
import { smoothScrollTo } from '../../utils/smoothScroll';
import './Hero.css';

const Hero = ({ setCursorVariant }) => {
  const typedText = useTypewriter(
  personalInfo.typewriterWords,
  );

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <section id="home" className="hero">
      {/* Animated background blobs */}
      <div className="hero-blobs">
        <motion.div
          className="blob blob-1"
          animate={{
            x: mousePos.x * 2,
            y: mousePos.y * 2,
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
        />
        <motion.div
          className="blob blob-2"
          animate={{
            x: mousePos.x * -1.5,
            y: mousePos.y * -1.5,
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
        />
        <motion.div
          className="blob blob-3"
          animate={{
            x: mousePos.x * 1,
            y: mousePos.y * -1,
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>

      {/* Grid overlay */}
      <div className="hero-grid" />

      {/* Side social links */}
      <motion.div 
        className="hero-social-sidebar"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        {socialLinks.map((social, i) => (
          <motion.a
            key={social.label}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-sidebar-link"
            whileHover={{ y: -3, color: '#6c63ff' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 + i * 0.15 }}
            onMouseEnter={() => setCursorVariant('button')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            <social.icon />
          </motion.a>
        ))}
        <div className="social-sidebar-line" />
      </motion.div>

      {/* Email sidebar */}
      <motion.div 
        className="hero-email-sidebar"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <a href={`mailto:${personalInfo.email}`} className="email-sidebar-link">
          {personalInfo.email}
        </a>
        <div className="social-sidebar-line" />
      </motion.div>

      <div className="container hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-greeting"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="greeting-wave">👋</span>
            <span className="greeting-text">Hey there, I'm</span>
          </motion.div>

          <div className="hero-name-wrapper">
            {personalInfo.name.split('').map((letter, i) => (
              <motion.span
                key={i}
                className="hero-name-letter"
                initial={{ opacity: 0, y: 80, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  delay: 0.5 + i * 0.08,
                  duration: 0.8,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }}
                onMouseEnter={() => setCursorVariant('text')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                {letter}
              </motion.span>
            ))}
            <motion.span
              className="hero-name-dot"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5, type: 'spring' }}
            >
              .
            </motion.span>
          </div>

          <motion.div
            className="hero-title-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <span className="hero-title-prefix">I'm a </span>
            <span className="hero-typed-text">{typedText}</span>
            <span className="hero-cursor">|</span>
          </motion.div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            {personalInfo.description}
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <MagneticButton
              className="primary"
              onClick={() => smoothScrollTo('projects')}
              onMouseEnter={() => setCursorVariant('button')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              View My Work <FiArrowDownRight />
            </MagneticButton>

            <MagneticButton
              onClick={() => window.open('/assets/resume.pdf', '_blank')}
              onMouseEnter={() => setCursorVariant('button')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              Download CV <FiDownload />
            </MagneticButton>
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            <div className="hero-stat">
              <span className="hero-stat-number">2+</span>
              <span className="hero-stat-label">Years Exp.</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-number">25+</span>
              <span className="hero-stat-label">Projects</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-number">10+</span>
              <span className="hero-stat-label">Clients</span>
            </div>
          </motion.div>
        </div>

        {/* Hero Visual/Code Block */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
          style={{
            transform: `perspective(1000px) rotateX(${mousePos.y * 0.3}deg) rotateY(${mousePos.x * 0.3}deg)`
          }}
        >
          <div className="code-window">
            <div className="code-window-header">
              <div className="code-dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <span className="code-filename">developer.jsx</span>
            </div>
           
<pre className="code-content">
  <code>
    <span className="code-keyword">const</span>{' '}
    <span className="code-function">Anchit</span>{' '}
    <span className="code-operator">=</span>{' '}
    <span className="code-bracket">{'() => {'}</span>{'\n'}
    {'  '}<span className="code-keyword">return</span>{' '}
    <span className="code-bracket">{'{'}</span>{'\n'}
    {'    '}<span className="code-property">name</span>
    <span className="code-operator">:</span>{' '}
    <span className="code-string">"Anchit Chedge"</span>
    <span className="code-comma">,</span>{'\n'}
    {'    '}<span className="code-property">college</span>
    <span className="code-operator">:</span>{' '}
    <span className="code-string">"VIT Pune"</span>
    <span className="code-comma">,</span>{'\n'}
    {'    '}<span className="code-property">skills</span>
    <span className="code-operator">:</span>{' '}
    <span className="code-bracket">[</span>
    <span className="code-string">"AI/ML"</span>
    <span className="code-comma">,</span>{' '}
    <span className="code-string">"Backend"</span>
    <span className="code-bracket">]</span>
    <span className="code-comma">,</span>{'\n'}
    {'    '}<span className="code-property">loves</span>
    <span className="code-operator">:</span>{' '}
    <span className="code-string">"Game Dev 🎮"</span>
    <span className="code-comma">,</span>{'\n'}
    {'    '}<span className="code-property">hireable</span>
    <span className="code-operator">:</span>{' '}
    <span className="code-boolean">true</span>{'\n'}
    <span className="code-bracket">{'}'}</span>
  </code>
</pre>
          </div>

          {/* Floating tech badges */}
          <motion.div
            className="floating-badge badge-react"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            ⚛️ React
          </motion.div>
          <motion.div
            className="floating-badge badge-next"
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            ▲ Next.js
          </motion.div>
          <motion.div
            className="floating-badge badge-js"
            animate={{ y: [-5, 15, -5] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            ✨ JS
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={() => smoothScrollTo('about')}
      >
        <span>Scroll</span>
        <motion.div
          className="scroll-line"
          animate={{ height: [0, 30, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;