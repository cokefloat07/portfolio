import React from 'react';
import { motion } from 'framer-motion';
import './TextReveal.css';

const TextReveal = ({ children, className, delay = 0 }) => {
  return (
    <div className={`text-reveal-wrapper ${className || ''}`}>
      <motion.div
        initial={{ y: '100%' }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.6, -0.05, 0.01, 0.99]
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default TextReveal;