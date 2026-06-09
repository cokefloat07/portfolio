import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiCode } from 'react-icons/fi';
import { socialLinks, navLinks } from '../../data/portfolioData';
import { smoothScrollTo } from '../../utils/smoothScroll';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-gradient" />
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-top"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="footer-brand">
              <a href="#home" onClick={(e) => { e.preventDefault(); smoothScrollTo('home'); }}>
                <span className="footer-logo">
                  <span className="logo-bracket">&lt;</span>
                  Anchit
                  <span className="logo-bracket">/&gt;</span>
                </span>
              </a>
              <p className="footer-tagline">
                Crafting exceptional digital experiences with modern web technologies.
              </p>
            </div>

            <div className="footer-links-section">
              <h4>Quick Links</h4>
              <ul>
                {navLinks.map(link => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => { e.preventDefault(); smoothScrollTo(link.id); }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-social-section">
              <h4>Connect</h4>
              <div className="footer-social-links">
                {socialLinks.map(social => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, color: '#6c63ff' }}
                    aria-label={social.label}
                  >
                    <social.icon />
                    <span>{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="footer-divider" />

          <motion.div
            className="footer-bottom"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p>
              Designed & Built with <FiHeart className="heart-icon" /> by{' '}
              <span className="gradient-text">Anchit</span>
            </p>
            <p className="footer-tech">
              <FiCode /> React.js • Framer Motion • ☕ Coffee
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;