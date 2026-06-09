import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import './GlowCard.css';

const GlowCard = ({ children, className, color = 'var(--accent-purple)', ...props }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
    card.style.setProperty('--glow-color', color);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`glow-card ${className || ''}`}
      onMouseMove={handleMouseMove}
      {...props}
    >
      <div className="glow-card-border" />
      <div className="glow-card-content">
        {children}
      </div>
    </motion.div>
  );
};

export default GlowCard;